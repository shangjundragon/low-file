package handlers

import (
	"github.com/duke-git/lancet/v2/strutil"
	"github.com/gin-gonic/gin"
	"github.com/spf13/viper"
	"go.uber.org/zap"
	"low-file/src/common/utils"
	"low-file/src/global"
	"os"
	"path/filepath"
	"time"
)

func UploadHandler(c *gin.Context) {

	// 获取上传的文件
	file, err := c.FormFile("file")
	filename := c.PostForm("filename")

	responseHandler, _ := global.GetLoggerAndResponseHandler(c, zap.String("filename", filename))
	if strutil.IsBlank(filename) {
		global.ResFail(responseHandler.WithMsg("无法获取文件名称"))
		return
	}

	if err != nil {
		global.ResFail(responseHandler.WithMsg("无法获取上传文件").WithError(err))
		return
	}

	var fullPath string
	fullPath, err = utils.ValidatePath(filename)
	if err != nil {
		global.ResFail(responseHandler.WithMsg("非法访问").WithError(err))
		return
	}

	// 提取目录路径并创建
	dirPath := filepath.Dir(fullPath)
	if err := os.MkdirAll(dirPath, os.ModePerm); err != nil {
		global.ResFail(responseHandler.WithMsg("无法创建目录").WithError(err))
		return
	}
	// 检查是否存在同名文件
	if viper.GetBool("Overwrite") == false {
		if _, err := os.Stat(fullPath); err == nil {
			// 文件已存在且不允许覆盖
			global.ResFail(responseHandler.WithMsg("存在同名文件").WithError(err))
			return
		} else if !os.IsNotExist(err) {
			// 检查文件状态时发生其他错误
			global.ResFail(responseHandler.WithMsg("检查文件状态失败").WithError(err))
			return
		}
	}
	// 保存文件
	if err := c.SaveUploadedFile(file, fullPath); err != nil {
		global.ResFail(responseHandler.WithMsg("文件保存失败").WithError(err))
		return
	}
	rel, err := filepath.Rel(global.RootUploadsDir, fullPath)
	if err != nil {
		global.ResFail(responseHandler.WithMsg("获取相对路径失败").WithError(err))
		return
	}
	// 数据库添加记录
	fileName := filepath.Base(filename)
	filePath := filename
	fileSize := file.Size
	createTime := time.Now().UnixMilli()
	_, err = global.SQLite.Exec(`
		insert into file_records
		(file_name, file_path, file_size, create_time)
		values (?,?,?,?)
	`, fileName, filePath, fileSize, createTime)
	if err != nil {
		global.ResFail(responseHandler.WithMsg("文件记录失败").WithError(err))
		return
	}
	global.ResOk(responseHandler.WithMsg("文件上传成功 filename=" + filename).WithData(rel))
}
