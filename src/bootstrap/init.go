package bootstrap

import (
	"fmt"
	"github.com/spf13/viper"
	"go.uber.org/zap"
	"log"
	"low-file/src/global"

	"os"
	"path/filepath"
)

func init() {

	workDir, err := os.Getwd()
	if err != nil {
		log.Fatalf("无法获取当前工作目录: %v", err)
	}
	defaultDir := filepath.Join(workDir, "uploads")
	defaultDir = filepath.Clean(defaultDir)
	viper.SetDefault("AppDebug", false)
	viper.SetDefault("Dir", defaultDir)
	viper.SetDefault("Port", ":23547")
	viper.SetDefault("ExternalLink", make([]string, 0))
	viper.SetConfigName("application")
	viper.SetConfigType("yml")
	viper.AddConfigPath(".")

	err = viper.ReadInConfig()
	if err != nil {
		fmt.Println("没有application.yml配置文件 使用默认配置")
	}

	Dir := viper.GetString("Dir")
	// 判断是否为绝对路径
	isAbs := filepath.IsAbs(Dir)
	if !isAbs {
		panic("Dir 必须为绝对路径 example D:\\local\\uploads or /usr/local/uploads")
	}
	stat, err := os.Stat(Dir)
	if err != nil {
		if os.IsNotExist(err) {
			fmt.Println("目录不存在 自动创建目录 " + Dir)
			err = os.MkdirAll(Dir, os.ModePerm)
			if err != nil {
				panic("自动创建目录失败 " + err.Error())
			}
			// 重新获取 stat
			stat, err = os.Stat(Dir)
			if err != nil {
				panic("无法获取目录信息 " + err.Error())
			}
		} else {
			panic("无法获取目录信息 " + err.Error())
		}
	}
	if !stat.IsDir() {
		panic(Dir + "必须为目录")
	}
	global.RootDir = Dir

	zapLoggerInstance, err := zap.NewDevelopment()
	if err != nil {
		panic("初始化日志失败" + err.Error())
	}
	global.Logger = zapLoggerInstance
	global.Port = viper.GetString("Port")
}
