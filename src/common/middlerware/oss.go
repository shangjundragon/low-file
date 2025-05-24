package middlerware

import (
	"github.com/gin-gonic/gin"
	"go.uber.org/zap"
	"low-file/src/common/utils"
	"low-file/src/global"
	"os"
)

func ossMiddleware() gin.HandlerFunc {
	return func(c *gin.Context) {
		ossPath := c.Request.URL.Path
		if ossPath == "/" {
			c.Next()
			return
		}
		responseHandler, _ := global.GetLoggerAndResponseHandler(c, zap.String("ossPath", ossPath))

		fullPath, err := utils.ValidatePath(ossPath)
		if err != nil {
			global.ResFail(responseHandler.WithMsg("非法访问"))
			c.Abort()
			return
		}
		var info os.FileInfo
		info, err = os.Stat(fullPath)
		if err != nil {
			// 不存在
			c.Next()
			return
		}

		// 文件夹还是文件？
		if info.IsDir() {
			global.ResFail(responseHandler.WithMsg("不可访问目录"))
			c.Abort()
			return
		}

		// 文件
		c.File(fullPath)
		c.Abort()
		return

	}
}
