import AutoImport from 'unplugin-auto-import/vite'
import {NaiveUiResolver} from 'unplugin-vue-components/resolvers'
import Components from 'unplugin-vue-components/vite'
import {defineConfig} from 'vite'
import {resolve} from 'path';
import VueJsx from '@vitejs/plugin-vue-jsx'
import vue from '@vitejs/plugin-vue'


const INVALID_CHAR_REGEX = /[\x00-\x1F\x7F<>*#"{}|^[\]`;?:&=+$,]/g;
const DRIVE_LETTER_REGEX = /^[a-z]:/i;

// https://vite.dev/config/
export default defineConfig({
    base: '/low-file-static/',
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
        outDir: '../src/bootstrap/public',
        emptyOutDir: true,
        rollupOptions: {
            output: {
                // https://github.com/rollup/rollup/blob/master/src/utils/sanitizeFileName.ts
                sanitizeFileName(fileName) {
                    const match = DRIVE_LETTER_REGEX.exec(fileName);
                    const driveLetter = match ? match[0] : "";
                    return (
                        driveLetter +
                        fileName.slice(driveLetter.length).replace(INVALID_CHAR_REGEX, "")
                    );
                },
            },
        },
    },
    server: {
        open: true,
        host: '0.0.0.0',
        port: 8765,
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
