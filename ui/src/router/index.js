import {createRouter, createWebHistory, createWebHashHistory} from 'vue-router'
import routes from './routes.js'
import SysStore from '@/src/store/sys-store.js'
import request from "@/src/common/request.js";

const router = createRouter({

    history: createWebHashHistory(),
    routes,
})

router.beforeEach(async (to, from) => {
    if (!localStorage.getItem('authorization-token') && to.name !== 'login') {
        // 没登录跳转登录页
        return {name: 'login'};
    }

    if (SysStore.value.externalLinkOptions.length === 0) {
        console.log('externalLinkOptions', to.name)
        try {
            const res = await request({
                url: '/externalLink',
                method: 'get',
            })
            SysStore.value.externalLinkOptions = res.data.map(m => {
                return {label: m, value: m}
            });
            if (localStorage.getItem('externalLink')) {
                SysStore.value.externalLink = localStorage.getItem('externalLink');
            } else {
                SysStore.value.externalLink = res.data[0];
                localStorage.setItem('externalLink', SysStore.value.externalLink);
            }
        } catch (error) {
            console.log('获取外链失败')
            return true
        }
    }
    return true
})


export default router
