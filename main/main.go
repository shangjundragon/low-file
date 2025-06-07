package main

import (
	"context"
	"fmt"
	"github.com/getlantern/systray"
	"github.com/getlantern/systray/example/icon"
	_ "github.com/glebarez/go-sqlite"
	"github.com/spf13/viper"
	"go.uber.org/zap"
	_ "low-file/src/bootstrap"
	"low-file/src/global"
	"low-file/src/routers"
	"net/http"
	"os"
	"os/exec"
	"os/signal"
	"runtime"
	"strconv"
	"sync"
	"syscall"
	"time"
)

var (
	currentPID = os.Getpid()
	server     *http.Server
	// 添加退出控制通道
	shutdownChan = make(chan struct{})
	// 添加等待组确保优雅退出
	wg sync.WaitGroup
)

func main() {
	router := routers.InitRouter()
	port := viper.GetString("Port")

	server = &http.Server{
		Addr:    port,
		Handler: router,
	}

	// 启动服务器
	go func() {
		global.Logger.Info("Starting server on port " + port)
		if err := server.ListenAndServe(); err != nil && err != http.ErrServerClosed {
			global.Logger.Fatal("Server failed to start:", zap.Error(err))
		}
	}()

	// 启动后操作
	go afterRun(port)

	// 等待退出信号
	waitForShutdown()
}

func afterRun(port string) {
	// 确保服务器已启动
	time.Sleep(500 * time.Millisecond)

	serverURL := fmt.Sprintf("http://localhost%s", port)
	global.Logger.Info("Server running at " + serverURL)

	// 自动打开浏览器
	if viper.GetBool("AutoOpenBrowser") {
		openBrowser(serverURL)
	}

	// 启动系统托盘（仅Windows）
	if runtime.GOOS == "windows" {
		wg.Add(1) // 增加等待组计数
		go func() {
			defer wg.Done() // 系统托盘退出时减少计数

			systray.Run(
				func() {
					systray.SetIcon(icon.Data)
					systray.SetTitle("low-file")
					systray.SetTooltip("low-file - PID: " + strconv.Itoa(currentPID))

					mQuit := systray.AddMenuItem("退出", "退出程序")
					mQuit.SetIcon(icon.Data)
					go func() {
						<-mQuit.ClickedCh
						global.Logger.Info("Received quit signal from system tray")
						// 发送退出信号
						close(shutdownChan)
					}()

					mOpen := systray.AddMenuItem("打开", "打开")
					mOpen.SetIcon(icon.Data)
					go func() {
						<-mOpen.ClickedCh
						openBrowser(serverURL)
					}()
				},
				func() {
					global.Logger.Info("System tray exited")
				},
			)
		}()
	}
}

func openBrowser(url string) {
	var cmd *exec.Cmd

	switch runtime.GOOS {
	case "windows":
		cmd = exec.Command("cmd", "/c", "start", url)
	case "darwin":
		cmd = exec.Command("open", url)
	default: // Linux
		cmd = exec.Command("xdg-open", url)
	}

	if err := cmd.Start(); err != nil {
		global.Logger.Error("Failed to open browser:", zap.Error(err))
	}
}

func waitForShutdown() {
	// 创建信号通道
	sigChan := make(chan os.Signal, 1)
	signal.Notify(sigChan, syscall.SIGINT, syscall.SIGTERM, os.Interrupt)

	// 同时监听系统信号和托盘退出信号
	select {
	case sig := <-sigChan:
		global.Logger.Info("Received OS signal", zap.String("signal", sig.String()))
	case <-shutdownChan:
		global.Logger.Info("Received shutdown signal from system tray")
	}

	// 创建关闭超时上下文
	ctx, cancel := context.WithTimeout(context.Background(), 5*time.Second)
	defer cancel()

	// 优雅关闭服务器
	global.Logger.Info("Shutting down server...")
	if err := server.Shutdown(ctx); err != nil {
		global.Logger.Error("Server shutdown error:", zap.Error(err))
	} else {
		global.Logger.Info("Server gracefully stopped")
	}

	// 退出系统托盘（如果正在运行）
	if runtime.GOOS == "windows" {
		systray.Quit()
		// 等待系统托盘完全退出
		wg.Wait()
	}

	global.Logger.Info("Application exiting")
}
