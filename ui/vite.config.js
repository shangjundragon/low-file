import AutoImport from 'unplugin-auto-import/vite'
import {NaiveUiResolver} from 'unplugin-vue-components/resolvers'
import Components from 'unplugin-vue-components/vite'
import {defineConfig} from 'vite'
import {resolve} from 'path';
import VueJsx from '@vitejs/plugin-vue-jsx'
import vue from '@vitejs/plugin-vue'
// https://vite.dev/config/
export default defineConfig({
    base: '/static/',
    plugins: [vue(),
        VueJsx(),
        AutoImport({
            imports: [
                'vue',
                {
                    'naive-ui': [
                        'useDialog',
                        'useMessage',
                        'useNotification',
                        'useLoadingBar'
                    ]
                }
            ]
        }),
        Components({
            resolvers: [
                NaiveUiResolver(),
            ],
            // 补充全局样式引入
            importStyle: 'css',
            include: [/\.vue$/, /\.vue\?vue/, /\.jsx$/]
        })],
    build: {
        outDir: '../main/public',
        emptyOutDir: true,
    },
    server: {
        open: true,
        host: '0.0.0.0',
        port: 8000,
    },
    resolve: {
        alias: [
            {
                find: '@',
                replacement: resolve('')
            },
        ],
        dedupe: ['vue'],
    },
})
