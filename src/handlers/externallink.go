package handlers

import (
	"github.com/duke-git/lancet/v2/strutil"
	"net/http"
	"os"
	"strings"
	"sync"
	"time"

	"github.com/gin-gonic/gin"
	"github.com/spf13/viper"
	"go.uber.org/zap"
	"low-file/src/common/utils"
	"low-file/src/global"
)

var internalNetworkIPs = make([]string, 0)
var envLinks = make([]string, 0)
var mergeLinks = make([]string, 0)
var mergeLinksMutex sync.RWMutex
var lastUpdate time.Time

const cacheTTL = 5 * time.Minute // 缓存过期时间

func init() {
	// 获取内网ip
	ips, err := utils.GetAllIntranetIPs()
	// 添加一个本机地址
	ips = append(ips, "localhost")
	if err != nil {
		global.Logger.Error("读取内网IP失败", zap.Error(err))
	}
	for _, val := range ips {
		internalNetworkIPs = append(internalNetworkIPs, "http://"+val+viper.GetString("Port"))
	}
	global.Logger.Info("读取本机所有ip", zap.Any("internalNetworkIPs", internalNetworkIPs))

	// 获取环境变量
	envConfigExternalLink := os.Getenv("ExternalLink")
	if strutil.IsNotBlank(envConfigExternalLink) {
		envLinks = strings.Split(envConfigExternalLink, ",")
		global.Logger.Info("获取环境变量外链", zap.Any("envLinks", envLinks))
	}

}

// isHealthy 检查指定地址是否健康
func isHealthy(client *http.Client, addr string) bool {
	url := addr + "/ping"
	resp, err := client.Get(url)
	if err != nil {
		global.Logger.Error("Ping请求失败", zap.String("addr", addr), zap.Error(err))
		return false
	}
	defer resp.Body.Close()

	if resp.StatusCode != http.StatusOK {
		global.Logger.Warn("非200状态码", zap.String("addr", addr), zap.Int("status", resp.StatusCode))
		return false
	}

	return true
}

// ExternalLink 处理外部链接请求
func ExternalLink(c *gin.Context) {
	resHandler, logger := global.GetLoggerAndResponseHandler(c)
	forceRefresh := c.DefaultQuery("force_refresh", "false") == "true"

	// 检查缓存是否有效
	mergeLinksMutex.RLock()
	if !forceRefresh && len(mergeLinks) > 0 && time.Since(lastUpdate) < cacheTTL {
		logger.Info("使用缓存结果")
		mergeLinksMutex.RUnlock()
		global.ResOk(resHandler.WithData(mergeLinks))
		return
	}
	mergeLinksMutex.RUnlock()

	// 并发检查健康地址
	client := &http.Client{Timeout: 5 * time.Second}
	var healthyLinks []string
	var wg sync.WaitGroup
	resultChan := make(chan string, len(internalNetworkIPs))

	for _, addr := range internalNetworkIPs {
		logger.Info("开始检查内网ip节点", zap.String("addr", addr))
		wg.Add(1)
		go func(addr string) {
			defer wg.Done()
			if isHealthy(client, addr) {
				resultChan <- addr
			}
		}(addr)
	}

	// 等待所有 goroutine 完成
	go func() {
		wg.Wait()
		close(resultChan)
	}()

	// 收集健康地址
	for addr := range resultChan {
		healthyLinks = append(healthyLinks, addr)
	}
	// 合并环境变量配置
	healthyLinks = append(healthyLinks, envLinks...)

	// 合并链接并设置缓存
	mergeLinksMutex.Lock()
	links := viper.GetStringSlice("ExternalLink")
	uniqueLinks := make(map[string]struct{})
	for _, link := range append(links, healthyLinks...) {
		uniqueLinks[link] = struct{}{}
	}

	mergeLinks = make([]string, 0, len(uniqueLinks))
	for link := range uniqueLinks {
		mergeLinks = append(mergeLinks, link)
	}
	lastUpdate = time.Now()
	mergeLinksMutex.Unlock()

	logger.Info("生成新缓存", zap.Any("mergeLinks", mergeLinks))
	global.ResOk(resHandler.WithData(mergeLinks))
}
