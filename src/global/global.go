package global

import (
	"github.com/gin-gonic/gin"
	"go.uber.org/zap"
)

var OnLineToken = make(map[string]any)

var Logger *zap.Logger

// RootDir 文件存储根路径
var RootDir string

// BasePath 程序允许路径
var BasePath string

func GetZapTraceLogger(c *gin.Context) *zap.Logger {
	logger, exists := c.Get("zap_logger")
	if !exists {
		logger = Logger // 回退到全局Logger
	}
	return logger.(*zap.Logger)
}
