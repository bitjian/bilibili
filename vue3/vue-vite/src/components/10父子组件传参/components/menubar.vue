<template >
  <div class="menubar">
    <div class="menubar-content">
      <div >菜单内容sadf</div>
      <div>传递：{{title}}</div>
      <div>menuList：{{menuList}}</div>
      <button @click="postMsg1(1)">点击发送消息1</button>
      <button @click="postMsg2(2)">点击发送消息2</button>
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref } from 'vue'
type Prop = {
  title?: string;
  menuList?: string[]
};
// 1.传递参数需要使用defineProps声明一下
// ts用法
// 2.defineProps<Prop>();
// ts 使用默认值
withDefaults(defineProps<Prop>(), {
  title: '123',
  menuList: () => {
    return ['1','2','34']
  }
})
// js用法
// defineProps({
//   title: {
//     type:String,
//     default: '123'
//   },
//   menuList: {
//     type: Array,
//     default: () => ['1','2','3']
//   }
// })
// 3.父子通信
// 3.1通过事件监听
const emit = defineEmits(['clickMessage', 'clickMessage2'])
const message = ref<string>('你好呀')
const postMsg1 = function<T>(num:T) {
    emit("clickMessage", `${message.value}${num}`)
}
const postMsg2 = function(num:number) {
    emit("clickMessage2", `${message.value}${num}`)
}
</script>
<style lang="less" scoped>
.menubar {
  width: 200px !important;
  border-right: 1px solid #ccc;
  &-content {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    flex-wrap: wrap;
    height: 100%;
  }
}
</style>

