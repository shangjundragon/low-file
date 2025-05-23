package routers

import (
	"embed"
	"github.com/gin-gonic/gin"
	"github.com/spf13/viper"
	"io"
	"io/fs"
	"low-file/src/common/middlerware"
	"low-file/src/handlers"
	"net/http"
)

func InitRouter(embeddedFS embed.FS) *gin.Engine {

	// 获取 public 子目录的 FS
	subFS, err := fs.Sub(embeddedFS, "public")
	if err != nil {
		panic("无法创建子文件系统: " + err.Error())
	}

	if viper.GetBool("AppDebug") == false {
		gin.SetMode(gin.ReleaseMode)
	}
	engine := gin.Default()
	// 挂载嵌入的静态资源
	engine.StaticFS("/static", http.FS(subFS))

	engine.GET("/", func(c *gin.Context) {
		// 打开嵌入的文件
		file, err := subFS.Open("index.html")
		if err != nil {
			c.AbortWithStatusJSON(http.StatusNotFound, gin.H{
				"error": "首页文件未找到",
			})
			return
		}
		defer file.Close()
		content, err := io.ReadAll(file)
		if err != nil {
			c.AbortWithStatusJSON(http.StatusInternalServerError, gin.H{
				"error": "文件读取失败",
			})
			return
		}
		c.Data(http.StatusOK, "text/html; charset=utf-8", content)
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
	return engine
}
