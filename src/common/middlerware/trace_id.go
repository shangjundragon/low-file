package middlerware

import (
	"github.com/gin-gonic/gin"
	"github.com/google/uuid"
	"go.uber.org/zap"
	"low-file/src/global"
)

func traceMiddleware() gin.HandlerFunc {
	return func(c *gin.Context) {
		// 生成唯一TraceID
		traceID := uuid.New().String()
		// 从全局获取基础Logger并添加trace_id字段
		logger := global.Logger.With(zap.String("trace_id", traceID))

		// 存入Gin上下文
		c.Set("zap_logger", logger)
		c.Next()
	}
}
