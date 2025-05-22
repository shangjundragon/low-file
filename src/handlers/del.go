package handlers

import (
	"github.com/gin-gonic/gin"
	"low-file/src/common/utils"
	"os"
)

type FilePathBo struct {
	FilePath string `bind:"required" json:"filePath" form:"filePath" uri:"filePath"`
}

func Del(c *gin.Context) {
	var bo FilePathBo
	err := c.ShouldBind(&bo)
	if err != nil {
		c.JSON(200, gin.H{
			"code": 500,
			"msg":  "参数错误",
		})
		return
	}
	var fullPath string
	fullPath, err = utils.ValidatePath(bo.FilePath)
	if err != nil {
		c.JSON(200, gin.H{
			"code": 500,
			"msg":  "非法访问",
		})
		return
	}

	// 获取文件/文件夹信息
	info, err := os.Stat(fullPath)
	if err != nil {
		if os.IsNotExist(err) {
			c.JSON(200, gin.H{
				"code": 404,
				"msg":  "文件或文件夹不存在",
			})
		} else {
			c.JSON(200, gin.H{
				"code": 500,
				"msg":  "获取文件信息失败",
			})
		}
		return
	}

	// 判断是文件还是文件夹
	if info.IsDir() {
		// 检查文件夹是否为空
		entries, err := os.ReadDir(fullPath)
		if err != nil {
			if os.IsNotExist(err) {
				c.JSON(200, gin.H{
					"code": 404,
					"msg":  "文件夹不存在",
				})
			} else if os.IsPermission(err) {
				c.JSON(200, gin.H{
					"code": 403,
					"msg":  "无权限访问文件夹",
				})
			} else {
				c.JSON(200, gin.H{
					"code": 500,
					"msg":  "读取文件夹内容失败",
				})
			}
			return
		}

		if len(entries) > 0 {
			c.JSON(200, gin.H{
				"code": 500,
				"msg":  "文件夹非空，无法删除",
			})
			return
		}

		// 删除空文件夹
		err = os.RemoveAll(fullPath)
		if err != nil {
			c.JSON(200, gin.H{
				"code": 500,
				"msg":  "删除文件夹失败",
			})
			return
		}
	} else {
		// 删除文件
		err = os.Remove(fullPath)
		if err != nil {
			c.JSON(200, gin.H{
				"code": 500,
				"msg":  "删除文件失败",
			})
			return
		}
	}

	// 成功响应
	c.JSON(200, gin.H{
		"code": 200,
		"msg":  "删除成功",
	})
}
