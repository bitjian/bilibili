<template >
  <div>
    <div>
      <strong>x:{{x}}</strong>
      <strong>y:{{y}}</strong>
    </div>
  </div>
</template>
<script lang="ts">
import { toRef, toRefs } from 'vue'
import usePoint from './hooks/point.js'
export default {
  setup() {
    const point:{x:number|null, y: number|null} = usePoint()

    // return {
    //   x: toRef(point, 'x'),
    //   y: toRef(point, 'y')
    // }
    return {
      ...toRefs(point)
    }
  }
}
</script>
<style>
  
</style>