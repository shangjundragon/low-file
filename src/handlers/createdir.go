package handlers

import (
	"github.com/duke-git/lancet/v2/strutil"
	"github.com/gin-gonic/gin"
	"go.uber.org/zap"
	"low-file/src/common/utils"
	"low-file/src/global"
	"os"
)

// CreateDirBo 请求参数结构体
type CreateDirBo struct {
	Dir string `bind:"required" json:"dir" form:"dir" uri:"dir"`
}

// CreateDir 创建目录的处理函数
func CreateDir(c *gin.Context) {

	var bo CreateDirBo
	err := c.ShouldBind(&bo)
	traceLogger := global.GetZapTraceLogger(c).With(zap.String("dir", bo.Dir))
	if strutil.IsBlank(bo.Dir) || err != nil {
		traceLogger.Error("参数绑定失败", zap.Error(err))
		c.JSON(200, gin.H{
			"code": 500,
			"msg":  "参数缺失或格式错误",
		})
		return
	}
	var fullPath string
	fullPath, err = utils.ValidatePath(bo.Dir)
	if err != nil {
		traceLogger.Error("非法访问")
		c.JSON(200, gin.H{
			"code": 500,
			"msg":  "非法访问",
		})
		return
	}

	// 4. 创建目录
	if err := os.MkdirAll(fullPath, os.ModePerm); err != nil {
		traceLogger.Error("目录创建失败")
		c.JSON(200, gin.H{
			"code": 500,
			"msg":  "目录创建失败",
		})
		return
	}
	traceLogger.Info("创建文件夹")
	// 5. 成功响应
	c.JSON(200, gin.H{
		"code": 200,
		"msg":  "目录创建成功",
		"path": fullPath,
	})
}
