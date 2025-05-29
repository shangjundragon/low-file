package bootstrap

import (
	"fmt"
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
	if strutil.IsNotBlank(viper.GetString("ContextPath")) {
		htmlStr = strings.ReplaceAll(htmlStr, `window['BASE_API'] = undefined`, "window['BASE_API'] = "+fmt.Sprintf("'%s'", viper.GetString("ContextPath")))
	}
	global.Logger.Info(htmlStr)
	global.IndexHtml = []byte(htmlStr)
}
