package handlers

import (
	"github.com/gin-gonic/gin"
	"github.com/spf13/viper"
	"go.uber.org/zap"
	"low-file/src/common/utils"
	"low-file/src/global"
)

var internalNetworkIps = make([]string, 0)

func init() {
	ips, err := utils.GetAllIntranetIPs()
	if err != nil {
		global.Logger.Error("读取内网ip失败", zap.Error(err))
	}
	global.Logger.Info("内网ip", zap.Any("ip", ips))
	for _, val := range ips {
		internalNetworkIps = append(internalNetworkIps, "http://"+val+viper.GetString("Port"))
	}
}

func ExternalLink(c *gin.Context) {
	links := viper.GetStringSlice("ExternalLink")

	c.JSON(200, gin.H{"data": append(links, internalNetworkIps...)})
}
