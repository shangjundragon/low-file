package global

import (
	"go.uber.org/zap"
	"io/fs"
)

var OnLineToken = make(map[string]any)

var Logger *zap.Logger

// RootDir 文件存储根路径
var RootDir string

// BasePath 程序允许路径
var BasePath string

// StaticFs 前端静态文件系统
var StaticFs fs.FS

// IndexHtml 前端首页index.html
var IndexHtml []byte
