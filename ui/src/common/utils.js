export async function copyText(text) {
    try {
        // 优先使用 Clipboard API（HTTPS/localhost 环境）
        if (navigator.clipboard && window.isSecureContext) {
            await navigator.clipboard.writeText(text);
            $message.success('已复制到剪贴板');
        } else {
            // 回退方案：使用 document.execCommand（兼容 HTTP 内网环境）
            fallbackCopyTextToClipboard(text);
        }
    } catch (err) {
        console.error('复制失败:', err);
        $message.error('无法复制');
    }
}


// 回退方案：兼容 HTTP 内网环境
function fallbackCopyTextToClipboard(text) {
    const textArea = document.createElement("textarea");
    textArea.value = text;
    textArea.style.position = "fixed"; // 避免影响页面布局
    textArea.style.top = "0";
    textArea.style.left = "0";
    textArea.style.width = "2em";
    textArea.style.height = "2em";
    textArea.style.padding = "0";
    textArea.style.border = "none";
    textArea.style.outline = "none";
    textArea.style.boxShadow = "none";
    textArea.style.background = "transparent";
    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();

    try {
        document.execCommand('copy');
        $message.success('已复制分享链接到剪贴板');
    } catch (err) {
        console.error('复制失败（回退方案）:', err);
        $message.error('无法复制分享链接');
    } finally {
        document.body.removeChild(textArea);
    }
}


export function endWithImgType(str) {
    try {
        const imageExtensions = ['.jpg', '.jpeg', '.png', '.gif', '.bmp', '.svg'];
        return imageExtensions.some(ext => str.endsWith(ext));
    } catch (e) {
        // 如果 URL 无效，返回 false
        return false;
    }
}