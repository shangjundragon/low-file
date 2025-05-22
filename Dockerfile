FROM d9fafc8e81bc44498235a34713053f3e.mirror.swr.myhuaweicloud.com/library/ubuntu:latest

# 设置环境变量 BASE_DIR
ENV BASE_DIR=/usr/local/at-sjl/low-file
ENV TZ=Asia/Shanghai
USER root

# 复制linux可执行文件
COPY target/low-file.linux ${BASE_DIR}/
COPY ./public ${BASE_DIR}/public


RUN mkdir -p ${BASE_DIR}/uploads && chmod +x ${BASE_DIR}/low-file.linux


# 暴露端口
EXPOSE 23547

# 启动命令
CMD ["bash", "-c", "cd ${BASE_DIR} && ./low-file.linux"]

