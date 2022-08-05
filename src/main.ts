import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import 'element-plus/theme-chalk/index.css'
import 'tailwindcss/tailwind.css'
import './assets/styles/common.scss'

createApp(App).use(router).use(store).mount('#app')
