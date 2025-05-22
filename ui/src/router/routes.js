export default [
    {
        path: '/',
        component: () => import('@/src/views/home.vue'),
        name: 'home',
        children: [
            {
                path: '',
                component: () => import('@/src/views/home-views/file-manage.vue'),
                name: 'FileManage',
                meta: {title: '文件管理',}
            }

        ]
    },
    {
        path: '/login',
        component: () => import('@/src/views/login.vue'),
        name: 'login'
    },
]
