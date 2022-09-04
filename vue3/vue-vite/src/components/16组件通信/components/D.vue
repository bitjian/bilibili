<template>
  <div class="wrapB">
    <button @click="emitFunc">触发emit</button>
    <h2>我是组件DDDDDurian</h2>
    <h2>111{{ flag }}</h2>
  </div>
</template>

<script lang='ts' setup>
import bus from '../bus'
import { reactive, onMounted, inject } from 'vue'
type Prop = {
  flag: boolean
}
const prop =defineProps<Prop>()

const emitFunc = () => {
  bus.emit('log', prop.flag)
}
onMounted(() => {

})

</script>
<style scoped lang='less'>
.wrapB {
  width: 150px;
  height: 100px;
  background-color: rgb(0, 149, 255);
}
</style>