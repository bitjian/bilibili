<template>
  <div>
    <div class="wrap">
      <h2>我是根组件,使用provide/inject传参{{flag}}</h2>
      <A></A>
      <B></B>
    </div>

    <div class="wrap">
      <h2>我是根组件,使用事件通信传参{{flag2}}</h2>
      <C :flag="flag2" @onClick="getFlag"></C>
      <D :flag="flag2"></D>
    </div>
  </div>

</template>

<script lang='ts' setup>

import { reactive, onMounted, provide, ref } from 'vue'
import A from './components/A.vue';
import B from './components/B.vue';
import C from './components/C.vue';
import D from './components/D.vue';
const flag = ref(true)
const flag2 = ref(true)
// 通过provide进行 兄弟间通讯
// 传入响应式值，在子组件则也是响应式，否则是非响应式的
provide('flag', flag)
const getFlag = (flag:boolean) => {
  flag2.value = flag
}

onMounted(() => {
})

</script>
<style scoped lang='less'>
.wrap {
  margin: 25px;
  width: 250px;
  height: 250px;
  overflow: hidden;
  background-color: orange;
}
</style>