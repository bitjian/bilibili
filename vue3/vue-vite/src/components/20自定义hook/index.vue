<template>
  <div>
    <img id="img" src="../../assets/2229.jpg" width="800" height="500"/>
  </div>
</template>

<script lang='ts' setup>
import { reactive, onMounted } from 'vue'
import base64 from './hooks/base64'
base64({el:"#img"}).then(res => {
  console.log(res.url)
})
  onMounted(() => {

  })

</script>
<style scoped lang='less'>

</style>