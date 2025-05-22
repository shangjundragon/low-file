package routers

import (
	"github.com/gin-gonic/gin"
	"github.com/spf13/viper"
	"low-file/src/common/middlerware"
	"low-file/src/global"
	"low-file/src/handlers"
	"net/http"
)

func InitRouter() *gin.Engine {
	if viper.GetBool("AppDebug") == false {
		gin.SetMode(gin.ReleaseMode)
	}
	engine := gin.Default()

	middlerware.MiddleWare(engine)
	engine.StaticFile("/", "./public/index.html")
	engine.Static("/static", "./public")
	engine.StaticFS("/dir", http.Dir(global.RootDir))

	engine.GET("/ping", func(context *gin.Context) {
		context.JSON(http.StatusOK, gin.H{
			"message": "pong",
		})
	})

	// 查看该目录下的所有文件/夹
	engine.POST("/folderFiles", handlers.FolderFiles)
	// 上传文件 指定上传目录
	engine.POST("/upload", handlers.UploadHandler)
	// 创建文件 指定目录
	engine.POST("/createDir", handlers.CreateDir)
	engine.GET("/externalLink", handlers.ExternalLink)
	engine.POST("/del", handlers.Del)
	return engine
}
