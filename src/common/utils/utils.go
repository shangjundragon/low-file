package utils

import (
	"fmt"
	"low-file/src/global"
	"os"
	"path/filepath"
	"strings"
)

// FileInfo 用于存储文件/文件夹的信息
type FileInfo struct {
	Type     string `json:"type"`
	Name     string `json:"name"`
	FilePath string `json:"filePath"`
	Size     int64  `json:"size"`
	MTime    string `json:"mtime"`
}

func GetFolderFiles(folder string) ([]FileInfo, error) {
	var result = make([]FileInfo, 0)

	// 读取目录内容
	entries, err := os.ReadDir(folder)
	if err != nil {
		return nil, err
	}

	for _, entry := range entries {
		name := entry.Name()
		path := filepath.Join(folder, name)

		// 获取文件详细信息
		info, err := entry.Info()
		if err != nil {
			return nil, err
		}

		// 格式化修改时间
		mtime := info.ModTime().Format("2006-01-02 15:04:05")
		rel, err := filepath.Rel(global.RootDir, path)
		if err != nil {
			return nil, err
		}
		rel = strings.Replace(rel, "\\", "/", -1)
		// 判断是文件还是文件夹
		if info.IsDir() {

			result = append(result, FileInfo{
				Type:     "folder",
				Name:     name,
				FilePath: rel,
				Size:     info.Size(),
				MTime:    mtime,
			})
		} else {
			result = append(result, FileInfo{
				Type:     "file",
				Name:     name,
				FilePath: rel,
				Size:     info.Size(),
				MTime:    mtime,
			})
		}
	}

	return result, nil
}

// ValidatePath 验证路径是否合法（是否在 RootDir 范围内）
func ValidatePath(path string) (string, error) {

	// 2. 拼接并清理用户传入的路径
	fullPath := filepath.Join(global.RootDir, path)
	cleanFull := filepath.Clean(fullPath)

	// 3. 检查路径是否超出根目录范围
	if !strings.HasPrefix(cleanFull, global.RootDir) {
		return "", fmt.Errorf("illegal path: %s", path)
	}

	return cleanFull, nil
}
