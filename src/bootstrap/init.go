package bootstrap

import (
	"embed"
	"errors"
	"github.com/spf13/viper"
	"log"
	"low-file/src/common/factory"
	"low-file/src/global"
	"os"
	"path/filepath"
)

//go:embed public/*
var embeddedFS embed.FS

func init() {

	// 初始化BasePath
	initBasePath()
	// 设置viper默认配置
	setupDefaults()
	// 加载application.yml配置
	loadConfiguration()
	// 初始化日志
	global.Logger = factory.CreateZapFactory(factory.ZapLogHandler)
	// 验证存储目录
	validateAndCreateUploadDir()
	// 初始化静态资源
	initStatic()
}

func setupDefaults() {
	workDir, err := os.Getwd()
	if err != nil {
		log.Fatalf("无法获取工作目录: %v", err)
	}

	defaultUploadsDir := filepath.Clean(filepath.Join(workDir, "uploads"))
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
	})
	// 设置日志相关配置的默认值
	viper.SetDefault("Logs.GinLogName", "/logs/gin.log")
	viper.SetDefault("Logs.AppFileLogName", "/logs/low-file.log")
	viper.SetDefault("Logs.TextFormat", "json")
	viper.SetDefault("Logs.TimePrecision", "millisecond")
	viper.SetDefault("Logs.MaxSize", 10)   // 单位：MB
	viper.SetDefault("Logs.MaxBackups", 7) // 保留文件数
	viper.SetDefault("Logs.MaxAge", 15)    // 保留天数
	viper.SetDefault("Logs.Compress", false)
}

func loadConfiguration() {
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

func validateAndCreateUploadDir() {
	uploadDir := filepath.Clean(viper.GetString("Dir"))

	if !filepath.IsAbs(uploadDir) {
		log.Fatal("配置目录必须为绝对路径（示例：/var/uploads 或 C:\\uploads）")
	}

	// 尝试创建目录（如果不存在）
	if err := os.MkdirAll(uploadDir, 0755); err != nil {
		log.Fatalf("目录创建失败: %v", err)
	}

	// 验证路径确实是目录
	if fileInfo, err := os.Stat(uploadDir); err != nil {
		log.Fatalf("目录访问失败: %v", err)
	} else if !fileInfo.IsDir() {
		log.Fatalf("路径不是目录: %s", uploadDir)
	}

	global.RootDir = uploadDir
}
