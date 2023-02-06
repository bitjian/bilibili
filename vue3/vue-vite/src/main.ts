import { createApp } from 'vue'
import App from './App.vue'
import 'animate.css'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import './index.css'
// 引入pinia
import { createPinia } from 'pinia'
// 全局组件
import Card from '../src/components/11全局和递归组件/components/Card.vue'
import 'uno.css'
// 创建仓库
const store = createPinia()

createApp(App).use(ElementPlus).use(store).component('Card',Card).mount('#app')
