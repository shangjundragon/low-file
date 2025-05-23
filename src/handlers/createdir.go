package handlers

import (
	"github.com/duke-git/lancet/v2/strutil"
	"github.com/gin-gonic/gin"
	"go.uber.org/zap"
	"low-file/src/common/utils"
	"low-file/src/global"
	"os"
)

// CreateDirBo 请求参数结构体
type CreateDirBo struct {
	Dir string `bind:"required" json:"dir" form:"dir" uri:"dir"`
}

// CreateDir 创建目录的处理函数
func CreateDir(c *gin.Context) {

	var bo CreateDirBo
	err := c.ShouldBind(&bo)
	responseHandler, _ := global.GetLoggerAndResponseHandler(c, zap.String("dir", bo.Dir))

	if strutil.IsBlank(bo.Dir) || err != nil {
		global.ResFail(responseHandler.WithMsg("参数绑定失败").WithError(err))
		return
	}
	var fullPath string
	fullPath, err = utils.ValidatePath(bo.Dir)
	if err != nil {
		global.ResFail(responseHandler.WithMsg("非法访问").WithError(err))
		return
	}

	// 4. 创建目录
	if err := os.MkdirAll(fullPath, os.ModePerm); err != nil {
		global.ResFail(responseHandler.WithMsg("目录创建失败").WithError(err))
		return
	}
	// 5. 成功响应
	global.ResOk(responseHandler.WithMsg("目录创建成功").WithData(fullPath))

}
