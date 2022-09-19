<template>
  <div>
    <!-- 全局属性可以直接在模板使用,但是需要在 @vue/runtime-core的 componentCustomProperty进行声明 -->
    {{$filters.format('123456')}}
  </div>
  <div>{{$env}}</div>
</template>

<script lang='ts' setup>
import { reactive, onMounted } from 'vue'
  onMounted(() => {

  })

</script>
<style scoped lang='less'>

</style>