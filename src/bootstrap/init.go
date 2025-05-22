package bootstrap

import (
	"errors"
	"github.com/spf13/viper"
	"log"
	"low-file/src/common/factory"
	"low-file/src/global"
	"os"
	"path/filepath"
	"strings"
)

func init() {

	if curPath, err := os.Getwd(); err == nil {
		// 路径进行处理，兼容单元测试程序程序启动时的奇怪路径
		if len(os.Args) > 1 && strings.HasPrefix(os.Args[1], "-test") {
			global.BasePath = strings.Replace(strings.Replace(curPath, `\test`, "", 1), `/test`, "", 1)
		} else {
			global.BasePath = curPath
		}
	} else {
		log.Fatal("初始化程序目录失败")
	}

	// 设置viper默认配置
	setupDefaults()
	// 加载application.yml配置
	loadConfiguration()
	// 验证存储目录
	validateAndCreateUploadDir()
	// 初始化日志
	initializeLogger()

}

func setupDefaults() {
	workDir, err := os.Getwd()
	if err != nil {
		log.Fatalf("无法获取工作目录: %v", err)
	}

	defaultUploadsDir := filepath.Clean(filepath.Join(workDir, "uploads"))
	viper.SetDefault("AppDebug", false)
	viper.SetDefault("Dir", defaultUploadsDir)
	viper.SetDefault("Port", ":23547")
	viper.SetDefault("ExternalLink", []string{})
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

func initializeLogger() {
	/*var logger *zap.Logger
	var err error
	var config zap.Config
	if viper.GetBool("AppDebug") {
		config = zap.NewDevelopmentConfig()
	} else {
		config = zap.NewProductionConfig()
	}
	config.EncoderConfig.EncodeTime = zapcore.TimeEncoderOfLayout(time.DateTime)

	logger, err = config.Build()

	if err != nil {
		log.Fatalf("日志初始化失败: %v", err)
	}

	// 替换全局 logger 并确保刷新缓冲日志（如果有）
	zap.ReplaceGlobals(logger)
	global.Logger = logger*/

	global.Logger = factory.CreateZapFactory()
}
