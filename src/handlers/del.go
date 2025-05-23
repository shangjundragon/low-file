package handlers

import (
	"github.com/duke-git/lancet/v2/strutil"
	"github.com/gin-gonic/gin"
	"go.uber.org/zap"
	"low-file/src/common/utils"
	"low-file/src/global"
	"os"
)

type FilePathBo struct {
	FilePath string `bind:"required" json:"filePath" form:"filePath" uri:"filePath"`
}

func Del(c *gin.Context) {
	var bo FilePathBo
	err := c.ShouldBind(&bo)
	responseHandler, traceLogger := global.GetLoggerAndResponseHandler(c)
	traceLogger.With(zap.String("filePath", bo.FilePath))
	if strutil.IsBlank(bo.FilePath) || err != nil {
		global.ResFail(responseHandler.WithMsg("参数错误"))
		return
	}
	var fullPath string
	fullPath, err = utils.ValidatePath(bo.FilePath)
	if err != nil {
		global.ResFail(responseHandler.WithMsg("非法访问").WithError(err))
		return
	}

	// 获取文件/文件夹信息
	info, err := os.Stat(fullPath)
	if err != nil {
		if os.IsNotExist(err) {
			global.ResFail(responseHandler.WithMsg("文件或文件夹不存在").WithError(err))
		} else {
			global.ResFail(responseHandler.WithMsg("获取文件信息失败").WithError(err))
		}
		return
	}

	// 判断是文件还是文件夹
	if info.IsDir() {
		// 检查文件夹是否为空
		entries, err := os.ReadDir(fullPath)
		if err != nil {
			if os.IsNotExist(err) {
				global.ResFail(responseHandler.WithMsg("文件夹不存在").WithError(err))
			} else if os.IsPermission(err) {
				global.ResFail(responseHandler.WithMsg("无权限访问文件夹").WithError(err))
			} else {
				global.ResFail(responseHandler.WithMsg("读取文件夹内容失败").WithError(err))
			}
			return
		}

		if len(entries) > 0 {
			global.ResFail(responseHandler.WithMsg("文件夹非空，无法删除"))
			return
		}

		// 删除空文件夹
		err = os.RemoveAll(fullPath)
		if err != nil {
			global.ResFail(responseHandler.WithMsg("删除文件夹失败").WithError(err))
			return
		}
	} else {
		// 删除文件
		err = os.Remove(fullPath)
		if err != nil {
			global.ResFail(responseHandler.WithMsg("删除文件失败").WithError(err))
			return
		}
	}
	global.ResOk(responseHandler.WithMsg("删除文件/夹成功"))
}
