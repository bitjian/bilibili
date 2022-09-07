<template>
  <div>
    <div><button @click="changeFlag">切换</button></div>
    <div><input v-model="background" /></div>
    <Dialog v-if="flag" v-move-2:bg.zijian="{background:background || 'red'}"></Dialog>
  </div>
</template>

<script lang='ts' setup>
import { reactive, onMounted, Directive, DirectiveBinding, ref } from 'vue'
import Dialog from './components/Dialog.vue'
// vue2自定义指令声明周期 bind, inserted update 等
// vue3 自定义指令声明周期 created beforeMount mounted  beforeUnmount unmounted updated beforeUpdate
// vue3指令 需要以v开头 最好以 Directive结尾

type VMove = {
  background: string
}

const flag = ref<boolean>(true)
const background = ref<string>('red')
const changeFlag = () => {
  flag.value = !flag.value
}
// const vMove: Directive = {
//   created(el:HTMLElement, bind:DirectiveBinding) {
//     // 初始化的时候
//     console.log('===========>created',el, bind);
//   },
//   beforeMount() {
//     // 指令绑定到元素上的时候
//     console.log('===========>beforeMount');
//   },
//   mounted(el:HTMLElement, bind:DirectiveBinding<VMove>) {
//     // 挂载到父节点的时候
//     console.log('===========>mounted');
//     el.style.backgroundColor = bind.value.background
//   },
//   beforeUpdate() {
//     console.log('===========>beforeUpdate');
//   },
//   updated(el:HTMLElement, bind:DirectiveBinding<VMove>) {
//     console.log('===========>updated');
//     el.style.backgroundColor = bind.value.background
//   },
//   beforeUnmount() {
//     console.log('===========>beforeUnmount');
//   },
//   unmounted() {
//     console.log('===========>unmounted');
//   },
// }

// 以函数的形式
const vMove2:Directive = (el:HTMLElement, bind:DirectiveBinding) => {
  el.style.backgroundColor = bind.value.background
}

</script>
<style scoped lang='less'>
</style>