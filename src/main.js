import { createApp } from 'vue'

import App from '@/App'

import router from '@/router'

import store from '@/store'

import '@/permission'

import '@/assets/icons' // icon
import svgIcon from '@/components/SvgIcon'

import ElementPlus from 'element-plus';
import 'element-plus/lib/theme-chalk/index.css';

createApp(App)
    .use(store)
    .use(router)
    .use(ElementPlus, {
        size: 'small',
        zIndex: 3000
    })
    .component('svg-icon',svgIcon)
    .mount('#app')
