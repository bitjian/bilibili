import { createApp } from 'vue'
import App from './App.vue'
import 'animate.css'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import './index.css'
// 全局组件
import Card from '../src/components/11全局和递归组件/components/Card.vue'
import 'uno.css'

createApp(App).use(ElementPlus).component('Card',Card).mount('#app')
