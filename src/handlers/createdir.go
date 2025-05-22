package handlers

import (
	"github.com/gin-gonic/gin"
	"go.uber.org/zap"
	"low-file/src/global"
	"os"
	"path/filepath"
)

// CreateDirBo 请求参数结构体
type CreateDirBo struct {
	Dir string `bind:"required" json:"dir" form:"dir" uri:"dir"`
}

// CreateDir 创建目录的处理函数
func CreateDir(c *gin.Context) {
	var bo CreateDirBo
	if err := c.ShouldBind(&bo); err != nil {
		global.Logger.Error("参数绑定失败", zap.Error(err))
		c.JSON(200, gin.H{
			"code": 400,
			"msg":  "参数缺失或格式错误",
		})
		return
	}

	fullPath := filepath.Join(global.RootDir, bo.Dir)
	fullPath = filepath.Clean(fullPath)

	// 4. 创建目录
	if err := os.MkdirAll(fullPath, os.ModePerm); err != nil {
		global.Logger.Error("目录创建失败",
			zap.String("fullPath", fullPath),
			zap.Error(err))
		c.JSON(200, gin.H{
			"code": 500,
			"msg":  "目录创建失败",
		})
		return
	}

	// 5. 成功响应
	c.JSON(200, gin.H{
		"code": 200,
		"msg":  "目录创建成功",
		"path": fullPath,
	})
}
