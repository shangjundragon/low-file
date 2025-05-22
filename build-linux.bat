@echo off
setlocal

go env -w GOARCH=amd64
go env -w GOOS=linux
go env -w CGO_ENABLED=0

go build -o ./target/low-file.linux -ldflags "-w -s" -trimpath ./main/main.go

if %errorlevel% neq 0 (
    echo Error: 构建失败!!!
    exit /b 1
) else (
    echo 项目构建成功!!!
)

endlocal