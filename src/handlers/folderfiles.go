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
	resFail := global.ResFail
	logger := global.GetZapTraceLogger(c).With(zap.String("CurrentFolder", bo.CurrentFolder))
	if err := c.ShouldBind(&bo); err != nil {
		resFail(logger, c, "参数绑定失败", nil, err)
		return
	}
	var fullPath string
	fullPath, err = utils.ValidatePath(bo.CurrentFolder)
	if err != nil {
		logger.Error("非法访问")
		c.JSON(200, gin.H{
			"code": 500,
			"msg":  "非法访问",
		})
		return
	}
	files, err := utils.GetFolderFiles(fullPath)
	if err != nil {
		logger.Error("获取该目录下文件失败", zap.Error(err))
		c.JSON(200, gin.H{
			"code": 500,
			"msg":  "系统错误",
		})
		return
	}

	c.JSON(200, gin.H{
		"code": 200,
		"data": files,
	})

}
