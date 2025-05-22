package global

import (
	"github.com/gin-gonic/gin"
	"go.uber.org/zap"
	"net/http"
)

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

func ResOk(context *gin.Context, data interface{}, msg string) {
	context.JSON(http.StatusOK, gin.H{
		"code": http.StatusOK,
		"msg":  msg,
		"data": data})
}

func ResFail(withTraceLogger *zap.Logger, context *gin.Context, msg string, data interface{}, err error) {
	withTraceLogger.Error(msg, zap.Any("data", data), zap.Error(err))
	context.JSON(http.StatusOK, gin.H{
		"code": http.StatusInternalServerError,
		"msg":  msg,
		"data": data})
}
