<template>
  <div class="wrapA">
    <button @click="changeFlag">changeFlag2</button>
    <h2>我是组件CCCCCHERRY{{flag}}</h2>
  </div>
</template>

<script lang='ts' setup>
import bus from '../bus'

import { reactive, onMounted, inject, Ref, ref } from 'vue'
type Prop = {
  flag: boolean
}
const props = defineProps<Prop>()
const emit = defineEmits(['onClick'])

// 需要通过泛型进行声明，不然返回值包含unknown 不能进行.value
// 需要进行重载，不然默认一个参数，返回值包含undefined
const changeFlag = () => {
  // Flag?.value 使用？不能进行复制操作
  emit('onClick',!props.flag)
}
onMounted(() => {
  bus.on('log', (flag:boolean) => {
    console.log(`aaaa--${flag}`);
    
  })

})

</script>
<style scoped lang='less'>
.wrapA {
  width: 150px;
  height: 100px;
  background-color: red;
}
</style>