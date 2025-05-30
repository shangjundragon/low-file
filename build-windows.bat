@echo off

REM 进入 ui 目录
cd /d "%~dp0\ui"

REM 检查是否成功进入 ui 目录
if not exist "package.json" (
    echo package.json not found in ui directory.
    exit /b 1
)

REM 执行 pnpm run build
echo 构建前端中。。。
call pnpm run build
echo 前端构建完毕!!!
REM 返回上级目录
cd ..

setlocal

go env -w GOARCH=amd64
go env -w GOOS=windows

echo 构建exe中。。。

go build -o ./target/low-file.exe -ldflags "-w -s" -trimpath ./main/main.go

if %errorlevel% neq 0 (
    echo Error: 构建失败!!!
    exit /b 1
) else (
    echo exe构建成功!!!
)

endlocal