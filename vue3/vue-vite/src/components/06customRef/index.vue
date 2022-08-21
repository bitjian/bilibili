<template >
  <div>
    <div @click="clickNum">{{cusRef}}</div>
  </div>
</template>
<script lang="ts">
import { customRef } from 'vue'
export default {
  setup() {
    const myRef = function<T> (value:T) {
      return customRef((track, trigger ) => ({
        get() {
          console.log('get');
          // 收集依赖
          track()
          return value
        },
        set(newVal:T) {
          console.log('set');
          value = newVal
          // 监听变化
          trigger()
        }
      }))
    }
    const cusRef = myRef<number>(2)
    const clickNum = function() {
      cusRef.value =  100
    }
    return {
      cusRef,
      clickNum
    }
  }
}
</script>
<style>
  
</style>