import {ArchiveOutline} from '@vicons/ionicons5'
import {ref} from "vue";
import _ from 'lodash-es'


/**
 * 文件上传组件
 * @param {Object} options - 配置选项
 * @param {Object} options.modal - naive-ui modal实例
 * @param {Object} options.loadingBar - naive-ui loadingBar实例
 * @param {Object} [options.multiple] - 默认false 是否支持多个文件 多选
 * @param {Object} [options.max] - naive-ui 默认undefined(不做限制) 限制上传文件数量
 * @param {Function} options.uploadFunc - 上传方法，点击上传后会传入文件信息file
 * @param {Object} [options.emits] - 事件发射器
 * @param {Function} [options.emits.uploadSuccess] - 事件发射器，上传成功防抖回调，会在所有文件上传后执行
 * @param {Object} [options.otherNUploadProps] - 其它n-upload属性配置 ，通过v-bind绑定
 * @returns {ModalReactive}
 */
export default (options) => {
    const {modal, loadingBar, emits, uploadFunc, multiple = false, max, otherNUploadProps = {}} = options
    const uploadContainer = ref(null)     // 上传容器引用
    const fileList = ref([])             // 文件列表
    const uploadRef = ref(null)          // 上传组件引用
    let cleanupInterval = null           // 清理定时器

    /* 弹窗出现回调*/
    async function onAfterEnter() {
        if (otherNUploadProps?.disabled === true) {
            return
        }
        // 初始化剪贴板监听
        uploadContainer.value?.addEventListener('paste', handlePaste)
        uploadContainer.value?.focus()

        // 保持容器焦点（解决部分浏览器粘贴需要焦点的问题）
        cleanupInterval = setInterval(() => {
            uploadContainer.value?.focus()
        }, 500)
    }

    function onBeforeLeave() {
        // 资源清理
        clearInterval(cleanupInterval)
        uploadContainer.value?.removeEventListener('paste', handlePaste)
        releaseObjectURLs() // 释放内存
    }


    function releaseObjectURLs() {
        // 释放所有Blob URL
        fileList.value.forEach(file => {
            if (file.url) URL.revokeObjectURL(file.url)
        })
    }

    // 处理复制事件
    function handlePaste(event) {
        console.log('handlePaste')
        // 处理剪贴板粘贴事件
        const clipboardData = event.clipboardData
        if (!clipboardData) {
            return
        }
        const newFiles = Array.from(clipboardData.items)
            .filter(item => item.kind === 'file')
            .map((item, index) => createFileObject(item.getAsFile(), index))

        if (newFiles.length > 0) {
            event.preventDefault()
            fileList.value = [...fileList.value, ...newFiles]
        }
    }

    function createFileObject(file, index) {
        const now = Date.now();
        // 创建标准化文件对象
        return {
            key: now, // 生成唯一标识
            name: `${now}_${file.name}`,
            file,
            status: 'pending',
            url: URL.createObjectURL(file) // 生成预览URL
        }
    }


    /* 上传逻辑 */
    async function customUpload(options) {
        try {
            await uploadFunc(options)
            handleUploadComplete()
        } catch (error) {
            console.error('上传失败:', error)
            loadingBar.error()
            $message.error(error.message || '上传失败，请重试')
        }
    }

    function handleUploadComplete() {
        try {
            $message.success('上传成功')
            resetUploadState()
            notifyUploadSuccess()
        } finally {
            loadingBar.finish()
        }
    }

    function resetUploadState() {
        // 重置上传状态
        uploadRef.value?.clear()
        fileList.value = []
        releaseObjectURLs()
    }


    const notifyUploadSuccess = _.debounce(() => {
        emits?.uploadSuccess?.()
    }, 1000)


    /* 渲染模态框 */
    const instance = modal.create({
        title: '上传文件',
        preset: 'card',
        style: {width: '600px', padding: '1rem'},
        onAfterEnter,
        onBeforeLeave,
        maskClosable: false,
        content: () => (
            <div
                tabindex="-1"
                ref={uploadContainer}
                style="height: 100%; display: flex; flex-direction: column; gap: 1rem"
            >
                <n-upload multiple={multiple} max={max} {...otherNUploadProps}
                          file-list={fileList.value}
                          ref={uploadRef}
                          custom-request={customUpload}
                          default-upload={false}
                          onChange={(options) => {
                              // options 包含之前的文件和本次上传的文件
                              fileList.value = options.fileList
                          }}
                          directory-dnd
                >
                    <n-upload-dragger>
                        <div style="margin-bottom: 12px">
                            <n-icon size="48" depth={3}>
                                <ArchiveOutline/>
                            </n-icon>
                        </div>
                        <n-text style="font-size: 16px">
                            复制 | 点击 | 拖动文件到该区域来上传
                        </n-text>
                    </n-upload-dragger>
                </n-upload>
                <n-button
                    disabled={fileList.value.length === 0}
                    onClick={() => uploadRef.value?.submit()}
                >
                    上传
                </n-button>
            </div>
        )
    })

    return instance
}
