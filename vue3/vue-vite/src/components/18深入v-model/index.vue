<template>
  <div>
    <button @click="changeFlag">改变{{flag}}</button>
    <div>{{title}}</div>
  </div>
  <Dialog v-model="flag" v-model:title="title"></Dialog>
</template>

<script lang='ts' setup>
import { reactive, onMounted, ref } from 'vue'
import Dialog from './component/Dialog.vue'

const changeFlag = () => {
  flag.value = !flag.value
  if(flag.value) title.value = '我是张德帅'
}
const flag = ref<boolean>(true)
let title = ref<string>('我是张德帅')
  // v-model 双向绑定的值和事件 modelValue  update:modelValue  支持多个v-model 支持自定义命名
  onMounted(() => {

  })

</script>
<style scoped lang='less'>

</style>