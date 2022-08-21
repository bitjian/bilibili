import { createApp } from 'vue'
import App from './App.vue'
// 全局组件
import Card from '../src/components/11全局和递归组件/components/Card.vue'

createApp(App).component('Card',Card).mount('#app')
