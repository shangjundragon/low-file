package utils

import (
	"fmt"
	"low-file/src/global"
	"net"
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
		rel, err := filepath.Rel(global.RootUploadsDir, path)
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

// ValidatePath 验证路径是否合法（是否在 RootUploadsDir 范围内）
func ValidatePath(path string) (string, error) {

	// 2. 拼接并清理用户传入的路径
	fullPath := filepath.Join(global.RootUploadsDir, path)
	cleanFull := filepath.Clean(fullPath)

	// 3. 检查路径是否超出根目录范围
	if !strings.HasPrefix(cleanFull, global.RootUploadsDir) {
		return "", fmt.Errorf("illegal path: %s", path)
	}

	return cleanFull, nil
}

func GetAllIntranetIPs() ([]string, error) {
	var ips []string
	interfaces, err := net.Interfaces()
	if err != nil {
		return nil, err
	}

	for _, intf := range interfaces {
		if intf.Flags&net.FlagLoopback != 0 {
			continue
		}

		addrs, err := intf.Addrs()
		if err != nil {
			continue
		}

		for _, addr := range addrs {
			ipNet, ok := addr.(*net.IPNet)
			if !ok || ipNet.IP.To4() == nil || ipNet.IP.IsLoopback() {
				continue
			}
			ips = append(ips, ipNet.IP.String())
		}
	}

	return ips, nil
}
