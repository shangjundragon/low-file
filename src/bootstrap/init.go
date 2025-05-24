package bootstrap

import (
	"embed"
	"low-file/src/common/factory"
	"low-file/src/global"
)

//go:embed public/*
var embeddedFS embed.FS

func init() {

	// 初始化BasePath
	initBasePath()
	// 初始化配置
	initConfig()
	// 初始化日志
	global.Logger = factory.CreateZapFactory(factory.ZapLogHandler)
	// 初始化sqlite数据库
	initSqlite()
	// 验证文件存储目录
	initRootUploadsDir()
	// 初始化静态资源
	initStatic()

}
