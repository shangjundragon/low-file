import {createApp} from 'vue'
import './style.css'
import '@/src/assets/styles/flex-common.scss'
import App from './App.vue'
import 'naive-ui/lib/modal/styles/index.js'

import router from './router/index.js'

createApp(App).use(router).mount('#app')
