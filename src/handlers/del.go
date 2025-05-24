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
	responseHandler, logger := global.GetLoggerAndResponseHandler(c, zap.String("filePath", bo.FilePath))
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

		// 删除file_record
		result, err := global.SQLite.Exec(`DELETE FROM file_records WHERE file_path = ?`, bo.FilePath)
		if err != nil {
			global.ResFail(responseHandler.WithMsg("删除文件记录失败").WithError(err))
			return
		}

		// 获取受影响的行数
		rowsAffected, err := result.RowsAffected()
		if err != nil {
			global.ResFail(responseHandler.WithMsg("获取删除记录数失败").WithError(err))
			return
		}

		logger.Info("删除文件记录",
			zap.Int64("deleted_rows", rowsAffected), // 记录删除数量
			zap.String("file_path", bo.FilePath))
	}
	global.ResOk(responseHandler.WithMsg("删除文件/夹成功"))
}
