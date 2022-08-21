<template >
  <div>
    <Sub v-if="show"></Sub>
    <button @click="() => (show = false)">消失</button>
    <button @click="() => (show = true)">显示</button>
  </div>
</template>
<script lang="ts">
import Sub from './Sub.vue'
import { ref } from 'vue'
export default {
  components: {
    Sub
  },
  setup() {
    const show = ref<boolean>(true)
    return {
      show
    }
  }
}
</script>
<style>
  
</style>