package bootstrap

import (
	"github.com/duke-git/lancet/v2/strutil"
	"github.com/spf13/viper"
	"io"
	"io/fs"
	"low-file/src/global"
	"strings"
)

func initStatic() {
	subFS, err := fs.Sub(embeddedFS, "public")
	if err != nil {
		panic("无法创建子文件系统: " + err.Error())
	}

	// 打开嵌入的文件
	file, err := subFS.Open("index.html")
	if err != nil {
		panic("读取index.html失败: " + err.Error())
	}
	defer file.Close()
	content, err := io.ReadAll(file)
	if err != nil {
		panic("读取index.html失败: " + err.Error())
	}

	global.StaticFs = subFS
	htmlStr := string(content)
	viperContextPath := viper.GetString("ContextPath")
	if strutil.IsNotBlank(viperContextPath) {
		htmlStr = strings.ReplaceAll(htmlStr, `/ContextPath/`, viperContextPath)
	}
	global.Logger.Info(htmlStr)
	global.IndexHtml = []byte(htmlStr)
}
