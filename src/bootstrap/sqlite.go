package bootstrap

import (
	"database/sql"
	_ "github.com/glebarez/go-sqlite"
	"go.uber.org/zap"
	"log"
	"low-file/src/global"
	"os"
	"path/filepath"
)

var createTableStatements = []string{
	// 文件记录表
	`
	    CREATE TABLE IF NOT EXISTS file_records (
	        id INTEGER PRIMARY KEY AUTOINCREMENT,
	        file_name TEXT NOT NULL,
	        file_path TEXT NOT NULL,
	        file_size INTEGER NOT NULL,
	        create_time INTEGER NOT NULL
	    )
	`,
}

func initSqlite() {
	// 获取数据库文件路径（分离目录和文件名）
	dataDir := filepath.Join(global.BasePath, "storage/data") // 目录路径
	dbFile := filepath.Join(dataDir, "low-file.db")           // 文件路径

	// 创建数据目录（仅创建目录部分）
	if err := os.MkdirAll(dataDir, 0755); err != nil {
		log.Fatalf("sqlite目录创建失败: %v (路径: %s)", err, dataDir)
	}

	// 验证目录权限（可选）
	if fileInfo, err := os.Stat(dataDir); err != nil {
		log.Fatalf("sqlite目录访问失败: %v (路径: %s)", err, dataDir)
	} else if !fileInfo.IsDir() {
		log.Fatalf("sqlite路径不是目录: %s", dataDir)
	} else if fileInfo.Mode().Perm()&0200 == 0 {
		log.Fatalf("sqlite目录不可写: %s (权限: %s)", dataDir, fileInfo.Mode().String())
	}

	// 初始化数据库连接
	db, err := sql.Open("sqlite", dbFile+"?_foreign_keys=1&_journal_mode=WAL")
	if err != nil {
		log.Fatal("sqlite数据库连接失败:", err)
	}

	// 配置连接池（SQLite推荐设置）
	db.SetMaxOpenConns(1) // 重要！避免数据库锁定
	db.SetMaxIdleConns(1)

	// 验证连接
	if err := db.Ping(); err != nil {
		log.Fatal("sqlite数据库连接不可用:", err)
	}

	global.SQLite = db
	// 初始化表
	initTable()
	// 记录版本信息
	var version string
	if err := global.SQLite.QueryRow("SELECT sqlite_version()").Scan(&version); err != nil {
		global.Logger.Error("获取SQLite版本失败", zap.Error(err))
	} else {
		global.Logger.Info("SQLite初始化完成",
			zap.String("version", version),
			zap.String("path", dbFile))
	}
}

func initTable() {
	for _, val := range createTableStatements {
		_, err := global.SQLite.Exec(val)
		if err != nil {
			log.Fatal("初始化表失败:", err)
		}
	}

}
