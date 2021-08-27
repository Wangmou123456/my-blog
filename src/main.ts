import { createApp } from 'vue'
import store from '@/store'
import router from '@/router'
import App from './App.vue'

import 'animate.css'
import 'assets/css/index.less'

import global from '@/global/index'

import { getAllInfo } from '@/store'

const app = createApp(App)

app.use(store)
app.use(router)
getAllInfo()

// 加载elmment-plus等其他
app.use(global)
app.mount('#app')
