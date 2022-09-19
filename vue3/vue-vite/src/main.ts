import { createApp } from 'vue'
import App from './App.vue'
import 'animate.css'
// import ElementPlus from 'element-plus'
// import 'element-plus/dist/index.css'
// 全局组件
import Card from '../src/components/11全局和递归组件/components/Card.vue'

const app = createApp(App)

type Filters = {
  format: <T extends any>(str:T)=> string
}
// 全局属性需要在 @vue/runtime-core上进行declare声明， 否则在模板上使用会标红
declare module '@vue/runtime-core' {
  export interface ComponentCustomProperties {
    $filters:Filters,
    $env: string
  }
}
// vue3 注册全局变量和方法 和vue2不一样 Vue.prototype.$http = xxx
app.config.globalProperties.$filters = {
  format<T extends any> (str:T):string {
    return `str:${(str as string).split('').join(', ')}`
  }
}
app.config.globalProperties.$env = null  ?? 'env test'

app.component('Card',Card).mount('#app')
