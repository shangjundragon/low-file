package handlers

import (
	"github.com/duke-git/lancet/v2/strutil"
	"github.com/gin-gonic/gin"
	"go.uber.org/zap"
	"low-file/src/common/utils"
	"low-file/src/global"
	"net/http"
	"os"
	"path/filepath"
)

func UploadHandler(c *gin.Context) {
	resFail := global.ResFail
	// 获取上传的文件
	file, err := c.FormFile("file")
	filename := c.PostForm("filename")
	logger := global.GetZapTraceLogger(c).With(zap.String("filename", filename))

	if err != nil {
		resFail(logger, c, "无法获取上传文件", nil, err)
		return
	}

	if strutil.IsBlank(filename) {
		resFail(logger, c, "文件名不能为空", nil, err)
		return
	}
	var fullPath string
	fullPath, err = utils.ValidatePath(filename)
	if err != nil {
		resFail(logger, c, "非法访问", nil, err)
		return
	}

	// 提取目录路径并创建
	dirPath := filepath.Dir(fullPath)
	if err := os.MkdirAll(dirPath, os.ModePerm); err != nil {
		resFail(logger, c, "无法创建目录", nil, err)
		return
	}

	// 保存文件
	if err := c.SaveUploadedFile(file, fullPath); err != nil {
		resFail(logger, c, "文件保存失败", nil, err)
		return
	}
	rel, err := filepath.Rel(global.RootDir, fullPath)
	if err != nil {
		resFail(logger, c, "获取相对路径失败", nil, err)
		return
	}
	global.GetZapTraceLogger(c).Info("文件上传成功", zap.String("filename", filename))
	c.JSON(http.StatusOK, gin.H{
		"msg":      "文件上传成功",
		"filepath": rel,
	})
}
