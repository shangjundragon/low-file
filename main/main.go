package main

import (
	"fmt"
	"github.com/spf13/viper"
	"go.uber.org/zap"
	_ "low-file/src/bootstrap"
	"low-file/src/global"
	"low-file/src/routers"
	"os/exec"
	"runtime"
)

func main() {
	router := routers.InitRouter()
	port := viper.GetString("Port")
	// 在 Goroutine 中启动服务器（避免阻塞）
	go func() {
		if err := router.Run(port); err != nil {
			global.Logger.Fatal("Server failed to start:", zap.Error(err))
		}
	}()
	afterRun(port)
	// 防止主函数提前退出，保持程序运行
	select {}
}

func afterRun(port string) {
	if viper.GetBool("AutoOpenBrowser") == false {
		return
	}
	serverURL := fmt.Sprintf("http://localhost%s", port)
	global.Logger.Info("- " + serverURL)
	if runtime.GOOS == "windows" {
		// 构造 cmd 命令
		cmd := exec.Command("cmd", "/c", "start", serverURL)
		err := cmd.Start()
		if err != nil {
			global.Logger.Error("Failed to open browser:", zap.Error(err))
		}
	}
}
