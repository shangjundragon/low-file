import {createRouter, createWebHistory, createWebHashHistory} from 'vue-router'
import routes from './routes.js'
import SysStore from '@/src/store/sys-store.js'
import request from "@/src/common/request.js";

const router = createRouter({

    history: createWebHashHistory(),
    routes,
})

let reqTmp = false;

router.beforeEach(async (to, from) => {
    if (!localStorage.getItem('authorization-token') && to.name !== 'login') {
        // 没登录跳转登录页
        return {name: 'login'};
    }

    if (reqTmp === false && SysStore.value.externalLinkOptions.length === 0) {
        reqTmp = true;
        request({
            url: '/externalLink',
            method: 'get',
        }).then(res => {
            SysStore.value.externalLinkOptions = res.data.map(m => {
                return {label: m, value: m}
            });
            if (localStorage.getItem('externalLink')) {
                SysStore.value.externalLink = localStorage.getItem('externalLink');
            } else {
                SysStore.value.externalLink = res.data[0];
                localStorage.setItem('externalLink', SysStore.value.externalLink);
            }
        });
    }
    return true
})


export default router
