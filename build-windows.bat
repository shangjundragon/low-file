@echo off

REM
cd /d "%~dp0\ui"
echo 构建前端中。。。
call pnpm run build
echo 前端构建完毕!!!
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