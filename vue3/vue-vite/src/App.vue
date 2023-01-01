<script setup lang="ts">
// import testRef from './components/ref&reactive/index.vue'
// import testRef from './components/02computed$watch/index.vue'
// import testRef from './components/03hook/index.vue'
// import testRef from './components/04shallowReactive&shallowRef/index.vue'
// import testRef from './components/05toRaw&markRaw/index.vue'
// import testRef from './components/06customRef/index.vue'
// import testRef from './components/10父子组件传参/index.vue'
import testRef from './components/22原子化css/index.vue'
// 熟悉vue3 v-bind v-on v-for v-model等指令
import {ref}  from 'vue'
// v-html
const vhtml = '<h1>v-html</h1>'
const arr:Array<number> = [1,2,3,4,5,6]
const clickFn = (item:number):void => {
  console.log('click'+item)
  alert('click'+item)
}
const valueStr = ref<string>('')

const styleObj:any = {color:"blue"}
</script>

<template>
<!-- <div>v-html</div>
<div v-html="vhtml"></div>
<div>v-for</div>
<div v-for="item in arr" :key="item">
  <h2 @click="clickFn(item)">{{item}}</h2>
</div>
<input v-model="valueStr" /><br/>
<input :value="valueStr" disabled/>
<div :style="styleObj">13456</div> -->
<testRef></testRef>
<div class="test"></div>
</template>

<style>
/* #app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  overflow: hidden;
}

#app, body, html {
  height: 100%;
  overflow: hidden;
} */

</style>
