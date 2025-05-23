import axios from "axios";
import router from "@/src/router/index.js";

const request = axios.create({
    baseURL: import.meta.env.VITE_BASE_API,
    timeout: 10000,
})

request.interceptors.request.use(config => {
    config.headers['authorization'] = localStorage.getItem('authorization-token')
    return config;
})
request.interceptors.response.use(async response => {
    // 默认两百
    const code = response.data?.code || 200;
    const msg = response.data?.msg || '服务器未知错误';
    // 二进制数据则直接返回
    if (response.request.responseType === 'blob' || response.request.responseType === 'arraybuffer') {
        return response.data
    }
    if (code === 401) {
        window['$message'].error(msg);
        localStorage.removeItem('authorization-token')
        await router.push({name: 'login'});
        return Promise.reject('无效的会话，或者会话已过期，请重新登录。')
    } else if (code === 404) {
        window['$message'].error(msg);
        return Promise.reject(new Error(msg))
    } else if (code === 500) {
        window['$message'].error(msg);
        return Promise.reject(new Error(msg))
    } else if (code !== 200) {
        return Promise.reject('error')
    } else {
        return response.data;
    }

}, error => {
    console.log('err' + error)
    let {message} = error;
    if (message === "Network Error") {
        message = "接口连接异常";
    } else if (message.includes("timeout")) {
        message = "接口请求超时";
    } else if (message.includes("Request failed with status code")) {
        message = "接口" + message.substr(message.length - 3) + "异常";
    }
    window['$message'].error(message)
    return Promise.reject(error)
})


/**
 *
 * @param option
 * @param option.loadingBar
 * @param option.url
 * @param option.method
 * @param option.data
 * @param option.params
 * @param option.headers
 * @param option.responseType
 * @returns {Promise<axios.AxiosResponse<any>|void>}
 */
request['loadingRequest'] = async (option) => {
    const {loadingBar, url, method, data, params, responseType, headers} = option;
    return new Promise(async (resolve, reject) => {
        try {

            loadingBar.start()
            const res = await request({
                method,
                url,
                data,
                params,
                responseType,
                headers
            });
            loadingBar.finish();
            resolve(res)
        } catch (e) {
            loadingBar.error();
            reject(e)
        }
    })
}

export default request
