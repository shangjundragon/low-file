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
		responseHandler, _ := global.GetLoggerAndResponseHandler(c, zap.String("ossPath", ossPath))

		fullPath, err := utils.ValidatePath(ossPath)
		if err != nil {
			global.ResFail(responseHandler.WithMsg("非法访问"))
			c.Abort()
			return
		}
		// 查找有没有这个文件
		if _, err := os.Stat(fullPath); err == nil {
			// 文件存在
			c.File(fullPath)
			c.Abort()
			return
		}

		c.Next()
	}
}
