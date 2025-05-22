import {createRouter, createWebHistory, createWebHashHistory} from 'vue-router'
import routes from './routes.js'


const router = createRouter({

    history: createWebHashHistory(),
    routes,
})

router.beforeEach((to, from) => {
    /*if (!localStorage.getItem('authorization-token') && to.name !== 'login') {
        // 没登录跳转登录页
        return {name: 'login'};
    }*/
    return true
})


export default router
