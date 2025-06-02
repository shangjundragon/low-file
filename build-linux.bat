@echo off

REM
cd /d "%~dp0\ui"
echo 构建前端中。。。
call pnpm run build
echo 前端构建完毕!!!
cd ..

setlocal

go env -w GOARCH=amd64
go env -w GOOS=linux

echo 构建linux可执行文件中。。。

go build -o ./target/low-file.linux -ldflags "-w -s" -trimpath ./main/main.go

if %errorlevel% neq 0 (
    echo Error: 构建失败!!!
    exit /b 1
) else (
    echo linux可执行文件构建成功!!!
)

endlocal