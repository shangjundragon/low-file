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
	if err := c.ShouldBind(&bo); err != nil {
		global.Logger.Error("参数绑定失败", zap.Error(err))
		c.JSON(200, gin.H{
			"code": 500,
			"msg":  "参数缺失或格式错误",
		})
		return
	}
	var fullPath, err = utils.ValidatePath(bo.CurrentFolder)
	if err != nil {
		c.JSON(200, gin.H{
			"code": 500,
			"msg":  "非法访问",
		})
		return
	}
	files, err := utils.GetFolderFiles(fullPath)
	if err != nil {
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
