<template>
  <div class="content">
    <template v-for="item in 100" :key="item">
      <div class="content-item">{{item}}</div>
    </template>
  </div>
</template>

<script lang='ts'>
import { reactive, onMounted } from 'vue'
export default {
  setup() {
    onMounted(() => {

    })
    return {

    }
  },
}

</script>
<style scoped lang='less'>
.content {
  flex: 1;
    margin: 20px;
    overflow: auto;
  &-item {
    height: 40px;
    line-height: 40px;
    border: 1px solid #ccc;
  }
}
</style>