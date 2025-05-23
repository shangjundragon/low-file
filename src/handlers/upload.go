package handlers

import (
	"github.com/duke-git/lancet/v2/strutil"
	"github.com/gin-gonic/gin"
	"go.uber.org/zap"
	"low-file/src/common/utils"
	"low-file/src/global"
	"os"
	"path/filepath"
)

func UploadHandler(c *gin.Context) {

	// 获取上传的文件
	file, err := c.FormFile("file")
	filename := c.PostForm("filename")
	logger := global.GetZapTraceLogger(c).With(zap.String("filename", filename))
	rc := global.NewResponseHandler(c, logger)
	if strutil.IsBlank(filename) {
		global.ResFail(rc.WithMsg("无法获取文件名称"))
		return
	}

	if err != nil {
		global.ResFail(rc.WithMsg("无法获取上传文件").WithError(err))
		return
	}

	var fullPath string
	fullPath, err = utils.ValidatePath(filename)
	if err != nil {
		global.ResFail(rc.WithMsg("非法访问").WithError(err))
		return
	}

	// 提取目录路径并创建
	dirPath := filepath.Dir(fullPath)
	if err := os.MkdirAll(dirPath, os.ModePerm); err != nil {
		global.ResFail(rc.WithMsg("无法创建目录").WithError(err))
		return
	}

	// 保存文件
	if err := c.SaveUploadedFile(file, fullPath); err != nil {
		global.ResFail(rc.WithMsg("文件保存失败").WithError(err))
		return
	}
	rel, err := filepath.Rel(global.RootDir, fullPath)
	if err != nil {
		global.ResFail(rc.WithMsg("获取相对路径失败").WithError(err))
		return
	}
	global.ResOk(rc.WithMsg("文件上传成功 filename=" + filename).WithData(rel))
}
