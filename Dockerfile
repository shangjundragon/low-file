FROM d9fafc8e81bc44498235a34713053f3e.mirror.swr.myhuaweicloud.com/library/ubuntu:latest

# 设置环境变量 BASE_DIR
ENV BASE_DIR=/usr/local/at-sjl/low-file
ENV TZ=Asia/Shanghai
USER root

# 复制linux可执行文件
COPY target/low-file.linux ${BASE_DIR}/


RUN apt-get update && apt-get install -y tzdata && apt-get clean && rm -rf /var/lib/apt/lists/* && mkdir -p ${BASE_DIR}/storage && chmod +x ${BASE_DIR}/low-file.linux

WORKDIR ${BASE_DIR}

# 启动命令
CMD ["./low-file.linux"]

