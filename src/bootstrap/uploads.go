package bootstrap

import (
	"github.com/spf13/viper"
	"log"
	"low-file/src/global"
	"os"
	"path/filepath"
)

func initRootUploadsDir() {
	uploadDir := filepath.Clean(viper.GetString("Dir"))

	if !filepath.IsAbs(uploadDir) {
		log.Fatal("配置目录必须为绝对路径（示例：/var/uploads 或 C:\\uploads）")
	}

	// 尝试创建目录（如果不存在）
	if err := os.MkdirAll(uploadDir, 0755); err != nil {
		log.Fatalf("目录创建失败: %v", err)
	}

	// 验证路径确实是目录
	if fileInfo, err := os.Stat(uploadDir); err != nil {
		log.Fatalf("目录访问失败: %v", err)
	} else if !fileInfo.IsDir() {
		log.Fatalf("路径不是目录: %s", uploadDir)
	}

	global.RootUploadsDir = uploadDir
}
