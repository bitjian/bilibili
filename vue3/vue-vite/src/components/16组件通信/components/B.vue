<template>
  <div class="wrapB">
    <h2>我是组件BBBBBLUE</h2>
    <h2>{{Flag}}</h2>
  </div>
</template>

<script lang='ts' setup>
import { reactive, onMounted,inject } from 'vue'
const Flag = inject('flag')
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