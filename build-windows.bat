@echo off
setlocal

go env -w GOARCH=amd64
go env -w GOOS=windows

go build -o ./target/low-file.exe -ldflags "-w -s" -trimpath ./main.go

echo 项目构建中。。。

if %errorlevel% neq 0 (
    echo Error: 构建失败!!!
    exit /b 1
) else (
    echo 项目构建成功!!!
)

endlocal