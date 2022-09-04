<template>
  <div class="wrapA">
    <button @click="changeFlag">changeFlag</button>
    <h2>我是组件AAAAAPLE</h2>
    <h2>{{Flag}}</h2>
  </div>
</template>

<script lang='ts' setup>
import { reactive, onMounted, inject, Ref, ref } from 'vue'
// 需要通过泛型进行声明，不然返回值包含unknown 不能进行.value
// 需要进行重载，不然默认一个参数，返回值包含undefined
let Flag = inject<Ref<boolean>>('flag', ref<boolean>(true))
const changeFlag = () => {
  // Flag?.value 使用？不能进行复制操作
  Flag.value = !Flag.value
}
  onMounted(() => {

  })

</script>
<style scoped lang='less'>
.wrapA {
  width: 150px;
  height: 100px;
  background-color: red;
}
</style>