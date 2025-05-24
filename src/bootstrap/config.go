package bootstrap

import (
	"errors"
	"github.com/spf13/viper"
	"log"
	"low-file/src/global"
	"path/filepath"
)

func initConfig() {
	setupDefaults()
	loadApplicationYml()
}
func setupDefaults() {
	defaultUploadsDir := filepath.Clean(filepath.Join(global.BasePath, "storage/uploads"))
	viper.SetDefault("Public", false)
	viper.SetDefault("AppDebug", false)
	viper.SetDefault("Dir", defaultUploadsDir)
	viper.SetDefault("Port", ":23547")
	viper.SetDefault("ExternalLink", []string{})
	viper.SetDefault("AutoOpenBrowser", true)
	viper.SetDefault("Overwrite", false)
	viper.SetDefault("Username", "admin")
	viper.SetDefault("Password", "123456")
	viper.SetDefault("JwtSecret", "xclvnjkweryisdlfmnvcv")

	// 接口白名单
	viper.Set("WhitePath", []string{
		"/token",
		"/externalLink",
	})
	// 设置日志相关配置的默认值
	viper.SetDefault("Logs.GinLogName", "/storage/logs/gin.log")
	viper.SetDefault("Logs.AppFileLogName", "/storage/logs/low-file.log")
	viper.SetDefault("Logs.TextFormat", "json")
	viper.SetDefault("Logs.TimePrecision", "millisecond")
	viper.SetDefault("Logs.MaxSize", 10)   // 单位：MB
	viper.SetDefault("Logs.MaxBackups", 7) // 保留文件数
	viper.SetDefault("Logs.MaxAge", 15)    // 保留天数
	viper.SetDefault("Logs.Compress", false)
}

func loadApplicationYml() {
	viper.SetConfigName("application")
	viper.SetConfigType("yml")
	viper.AddConfigPath(".")

	if err := viper.ReadInConfig(); err != nil {
		var configFileNotFoundError viper.ConfigFileNotFoundError
		if errors.As(err, &configFileNotFoundError) {
			log.Println("未找到配置文件，使用默认配置")
			return
		}
		log.Fatalf("配置文件读取失败: %v", err)
	}
}
