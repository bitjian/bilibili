<template >
  <div>
    <strong>shallowReactive</strong>
    <div @click="shallowReactiveObj.age++">{{shallowReactiveObj.age}}</div>
    <div @click="++shallowReactiveObj.job.salary">点击salary是没有响应式的: {{shallowReactiveObj.job.salary}}</div>
    <strong>shallowRef</strong>
    <div @click="++shallowNum">点击增加shallowNum：{{shallowNum}}</div>
    <div @click="shallowRefObj.age++">shallowRef声明的对象是没有响应式的，点击点击{{shallowRefObj}}</div>
  </div>
</template>
<script lang="ts">
import { shallowRef, shallowReactive,watch } from 'vue'
export default {
    setup(){
      // 1.shallowReactive 用来声明对象，第一层响应式，深层的不是
      let shallowReactiveObj = shallowReactive({
        name: 'zzj',
        age: 18,
        job:{
          salary: 18
        }
      })
      watch(()=> shallowReactiveObj.age, (newVal, oldVal) => {
        // 使用shallowReactive深层属性是没有响应式的,但是其他更新会触发视图更新
        ++shallowReactiveObj.job.salary
      })
      // shallowRef,声明基础数据和 ref 是一样的效果， 但是声明复制类型是没有响应式的
      let shallowNum = shallowRef<number>(18)
      let shallowRefObj = shallowRef({age:18, name: 'zzj'})
      return {
        shallowReactiveObj,
        shallowNum,
        shallowRefObj
      }
    }
}
</script>
<style >
  
</style>