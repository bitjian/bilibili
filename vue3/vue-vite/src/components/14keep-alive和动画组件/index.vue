<template>
  <div>
    <button @click="flag = !flag">点击</button>
    <!-- keep alive 用来缓存组件 有exclude  include max三个变量 -->
    <!-- max支持设置最大缓存数量 lru 优先淘汰算法 -->
    <!-- 有声明周期 onActivated onDeactivated -->
    <keep-alive  max="1">
      <A v-if="flag"></A>
      <B v-else></B>
    </keep-alive>

    <!-- 通过name 来设置动画过渡名称 -->
    <!-- 也可以自定义出入动画的类名 配合第三方库实现动画效果 enter-from-class enter-active-class enter-to-class leave-from-class leave-active-class leave-to-class-->
    <!-- 可以通过duration设置动画时间 string/object -->
    <transition :duration="{ enter: 500, leave: 800 }" enter-active-class="animate__animated animate__bounce" leave-active-class="animate__animated animate__wobble">
      <div v-if="flag" class="box"></div>
    </transition>
  </div>
</template>

<script lang='ts' setup>
import A from './components/A.vue'
import B from './components/B.vue'
import { reactive, onMounted, ref } from 'vue'
let flag = ref<Boolean>(true)

onMounted(() => {

})

</script>
<style scoped lang='less'>
  .box {
    width: 200px;
    height: 200px;
    background-color: red;
  }
  .fade-enter-from,
  .fade-leave-to {
    width: 0px;
    height: 0px;
  }
  .fade-enter-active,
  .fade-leave-active {
    transition:all  1.5s ease;
  }

  .fade-enter-to,
  .fade-leave-from {
    width: 200px;
    height: 200px;
  }
</style>