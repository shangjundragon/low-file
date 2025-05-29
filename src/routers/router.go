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
	// 挂载嵌入的静态资源
	engine.StaticFS("/static", http.FS(global.StaticFs))
	// index.html
	engine.GET("/", func(c *gin.Context) {
		c.Data(http.StatusOK, "text/html; charset=utf-8", global.IndexHtml)
	})

	middlerware.MiddleWare(engine)

	engine.GET("/ping", func(context *gin.Context) {
		context.JSON(http.StatusOK, gin.H{
			"message": "pong",
		})
	})
	// 获取token
	engine.POST("/token", handlers.Token)
	// 查看该目录下的所有文件/夹
	engine.POST("/folderFiles", handlers.FolderFiles)
	// 上传文件 指定上传目录
	engine.POST("/upload", handlers.UploadHandler)
	// 创建文件 指定目录
	engine.POST("/createDir", handlers.CreateDir)
	// 获取外链
	engine.GET("/externalLink", handlers.ExternalLink)
	// 删除文件/夹
	engine.POST("/del", handlers.Del)
	// 文件记录列表
	engine.POST("/file_records_list", handlers.FileRecordList)
	return engine
}
