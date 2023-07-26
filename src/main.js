import { createApp } from 'vue'
import App from './App.vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import router from './router';
import axios from "axios"//引用axios
//引入封装Axios请求
//引入封装Axios请求
import Axios from './request/axios';
 
 
const app = createApp(App)

app.config.globalProperties.$axios = axios



app.use(ElementPlus)
app.use(router)
app.mount('#app')
app.use(Axios)
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
  }