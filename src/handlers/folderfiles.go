package handlers

import (
	"github.com/gin-gonic/gin"
	"go.uber.org/zap"
	"low-file/src/common/utils"
	"low-file/src/global"
)

type FolderFilesBo struct {
	CurrentFolder string `json:"currentFolder" form:"currentFolder" uri:"currentFolder"`
}

func FolderFiles(c *gin.Context) {
	var bo FolderFilesBo
	err := c.ShouldBind(&bo)

	responseHandler, _ := global.GetLoggerAndResponseHandler(c, zap.String("CurrentFolder", bo.CurrentFolder))
	if err != nil {
		global.ResFail(responseHandler.WithMsg("参数绑定失败").WithError(err))
		return
	}
	var fullPath string
	fullPath, err = utils.ValidatePath(bo.CurrentFolder)
	if err != nil {
		global.ResFail(responseHandler.WithMsg("非法访问").WithError(err))
		return
	}
	files, err := utils.GetFolderFiles(fullPath)
	if err != nil {
		global.ResFail(responseHandler.WithMsg("获取该目录下文件失败").WithError(err))
		return
	}
	global.ResOk(responseHandler.WithData(files))

}
