package middlerware

import (
	"github.com/gin-gonic/gin"
	"net/http"
)

// 自定义 CORS 中间件
func corsMiddleware() gin.HandlerFunc {
	return func(c *gin.Context) {
		// 允许所有来源（*）或指定来源（如 http://example.com）
		c.Writer.Header().Set("Access-Control-Allow-Origin", "*")
		// 允许携带凭证（如 Cookie）
		c.Writer.Header().Set("Access-Control-Allow-Credentials", "true")
		// 允许的请求方法
		c.Writer.Header().Set("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS")
		// 允许的请求头
		c.Writer.Header().Set("Access-Control-Allow-Headers", "*")

		// 处理预检请求（OPTIONS）
		if c.Request.Method == "OPTIONS" {
			c.AbortWithStatus(http.StatusNoContent)
			return
		}

		c.Next()
	}
}
