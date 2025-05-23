package global

import (
	"github.com/duke-git/lancet/v2/strutil"
	"github.com/gin-gonic/gin"
	"go.uber.org/zap"
	"net/http"
)

type ResponseHandler struct {
	code int         `json:"code"`
	msg  string      `json:"msg"`
	data interface{} `json:"data"`

	context *gin.Context
	logger  *zap.Logger
	err     error
}

func NewResponseHandler(c *gin.Context, l *zap.Logger) *ResponseHandler {
	return &ResponseHandler{
		context: c,
		logger:  l,
	}
}

func (rh *ResponseHandler) WithCode(code int) *ResponseHandler {
	rh.code = code
	return rh
}

func (rh *ResponseHandler) WithMsg(msg string) *ResponseHandler {
	rh.msg = msg
	return rh
}
func (rh *ResponseHandler) WithData(data interface{}) *ResponseHandler {
	rh.data = data
	return rh
}
func (rh *ResponseHandler) WithError(err error) *ResponseHandler {
	rh.err = err
	return rh
}

func ResOk(rh *ResponseHandler) {
	if strutil.IsNotBlank(rh.msg) {
		rh.logger.Info(rh.msg)
	}

	rh.context.JSON(http.StatusOK, gin.H{
		"code": 200,
		"msg":  rh.msg,
		"data": rh.data})
}

func ResFail(rh *ResponseHandler) {
	rh.logger.Error(rh.msg, zap.Any("data", rh.data), zap.Error(rh.err))
	rh.context.JSON(http.StatusOK, gin.H{
		"code": 500,
		"msg":  rh.msg,
		"data": rh.data})
}
