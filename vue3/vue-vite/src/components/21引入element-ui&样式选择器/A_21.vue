<template>
  <div>
    我是A组件
    <slot></slot>
  </div>
</template>

<script lang='ts' setup>
import { reactive, onMounted } from 'vue'

onMounted(() => {

})

</script>
<style scoped lang='less'>
// 插槽选择器
:slotted(.a_slot) {
  color: red;
}
</style>