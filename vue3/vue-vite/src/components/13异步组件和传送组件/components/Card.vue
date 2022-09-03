<template>
  <div class="card">
    <div class="card-head">
      <div class="card-title">{{title}}</div>
      <div class="card-subTitle">{{subTitle}}</div>
    </div>
    <div class="card-content">
      <div>{{content}}</div>
    </div>
  </div>
</template>

<script lang='ts' setup>
import { reactive, onMounted } from 'vue'
type Props = {
  title: string,
  subTitle?: string,
  content: string,
}
withDefaults(defineProps<Props>(), {
  title: '标题',
  subTitle: '副标题',
  content: '内容'
})

</script>
<style scoped lang='less'>
  .card {
    margin: 10px;
    border: 1px solid #ccc;
    &-head {
      display: flex;
      justify-content: space-between;
      border-bottom: 1px solid #ccc;
    }
    &-content {

    }

  }
</style>