<template>
  <div class="dialog" v-if="modelValue">
    <div class="head">
      <div>{{ title }}</div>
      <div class="close" @click="close">X</div>
    </div>
    <div class="content">{{ content }}</div>
  </div>
</template>

<script lang='ts' setup>
import { reactive, onMounted } from 'vue'
type Prop = {
  modelValue?: boolean,
  title?: string
  content: string
}

const emit = defineEmits(['update:modelValue', 'update:title'])

const close = () => {
  emit('update:modelValue', false)
  emit('update:title', '我是标题')
}
withDefaults(defineProps<Prop>(), {
  title: '我是标题',
  content: '我是内容'

})
onMounted(() => {

})

</script>
<style scoped lang='less'>
.dialog {
  width: 500px;
  font-size: 16px;
  margin: 50px auto;
  border: 1px solid #ccc;
  overflow: hidden;
  .head {
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid #ccc;
    height: 20px;
    line-height: 20px;
    .close {
      padding: 5px;
    }
  }

  .content {
    height: 200px;
  }
}
</style>