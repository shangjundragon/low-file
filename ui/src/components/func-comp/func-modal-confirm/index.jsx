/**
 *
 * @param options
 * @param options.modal
 * @param [options.title]
 * @param [options.width]
 * @param options.text
 * @returns {Promise<unknown>}
 */
export default (options) => {
    const {
        modal,
        title = '提示',
        width = '400px',
        text = '确认继续?'
    } = options;

    return new Promise((resolve, reject) => {
        function confirm() {
            instance.destroy();
            resolve(true)
        }

        function cancel() {
            instance.destroy();
            reject('取消')
        }

        const instance = modal.create({
            title,
            preset: 'card',
            style: {width,},
            onAfterLeave: cancel,
            content: () => {
                return <div style="height: 100%;display: flex;flex-direction: column;gap: 1rem">
                    <span>{text}</span>
                    <div class="fx al-ct ju-fe fx-gp10">
                        <n-button onClick={confirm} size="small" type="error">确认</n-button>
                        <n-button onClick={cancel} size="small">取消</n-button>
                    </div>
                </div>
            }
        });
    })
}