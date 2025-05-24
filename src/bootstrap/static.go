package bootstrap

import (
	"io"
	"io/fs"
	"low-file/src/global"
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
	global.IndexHtml = content
}
