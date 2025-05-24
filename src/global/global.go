package global

import (
	"database/sql"
	"go.uber.org/zap"
	"io/fs"
)

var Logger *zap.Logger

// RootUploadsDir 文件存储根路径
var RootUploadsDir string

// BasePath 程序允许路径
var BasePath string

// StaticFs 前端静态文件系统
var StaticFs fs.FS

// IndexHtml 前端首页index.html
var IndexHtml []byte

// SQLite sqlite数据库实例
var SQLite *sql.DB
