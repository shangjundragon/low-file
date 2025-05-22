package handlers

import (
	"github.com/duke-git/lancet/v2/strutil"
	"github.com/gin-gonic/gin"
	"low-file/src/common/utils"
	"low-file/src/global"
	"net/http"
	"os"
	"path/filepath"
)

func UploadHandler(c *gin.Context) {
	// 获取上传的文件
	file, err := c.FormFile("file")
	if err != nil {
		c.JSON(200, gin.H{"msg": "无法获取上传文件", "code": 500})
		return
	}

	filename := c.PostForm("filename")
	if strutil.IsBlank(filename) {
		c.JSON(200, gin.H{"msg": "文件名不能为空", "code": 500})
		return
	}
	var fullPath string
	fullPath, err = utils.ValidatePath(filename)
	if err != nil {
		c.JSON(200, gin.H{
			"code": 500,
			"msg":  "非法访问",
		})
		return
	}

	// 提取目录路径并创建
	dirPath := filepath.Dir(fullPath)
	if err := os.MkdirAll(dirPath, os.ModePerm); err != nil {
		c.JSON(200, gin.H{"msg": "无法创建目录", "code": 500})
		return
	}

	// 保存文件
	if err := c.SaveUploadedFile(file, fullPath); err != nil {
		c.JSON(200, gin.H{"msg": "文件保存失败", "code": 500})
		return
	}
	rel, err := filepath.Rel(global.RootDir, fullPath)
	if err != nil {
		c.JSON(200, gin.H{"msg": "系统错误", "code": 500})
		return
	}
	c.JSON(http.StatusOK, gin.H{
		"msg":      "文件上传成功",
		"filepath": rel,
	})
}
