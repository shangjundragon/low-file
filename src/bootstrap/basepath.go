package bootstrap

import (
	"log"
	"low-file/src/global"
	"os"
	"strings"
)

func initBasePath() {
	if curPath, err := os.Getwd(); err == nil {
		// 路径进行处理，兼容单元测试程序程序启动时的奇怪路径
		if len(os.Args) > 1 && strings.HasPrefix(os.Args[1], "-test") {
			global.BasePath = strings.Replace(strings.Replace(curPath, `\test`, "", 1), `/test`, "", 1)
		} else {
			global.BasePath = curPath
		}
	} else {
		log.Fatal("初始化程序目录失败")
	}
}
