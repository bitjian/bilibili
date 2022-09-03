<template>
  <div>

    <div class="button">
      <button @click="push">增加</button>
      <button @click="pop">弹出</button>
    </div>
    <!-- 如果需要使一组元素具有相同的童话可以通过 transition-group -->
    <!-- 也可以使用 transition对应的自定义出入动画 -->
    <transition-group enter-active-class="animate__animated animate__wobble"
      leave-active-class="animate__animated animate__hinge" tag="div" class="wrap">
      <div v-for="(item, index) in list" class="item" :key="index">
        {{ item }}
      </div>
    </transition-group>
    <!-- 打乱元素 -->
    <div class="button">
      <button @click="random">打乱</button>
    </div>
    <!-- 通过move-class 进入元素移除过渡 -->
    <transition-group class="random" tag="ul" move-class="mmm-move" key="trans">
      <li class="item" v-for="(item, index) in randomList" :key="`r-${item.id}`">{{ item.number }}</li>
    </transition-group>
  </div>
</template>

<script lang='ts' setup>
import { reactive, onMounted, ref } from 'vue'
const list = reactive<number[]>([1, 2, 3, 4, 5, 6, 7])
// 这里map返回的是一个对象
let randomList = ref(new Array(81).fill(undefined).map((item, index) => ({
  id: index,
  number: index % 9 + 1
}) ))
console.log(randomList);

const random = () => {
  const list = []
  while (randomList.value.length) {
    const len = randomList.value.length
    const index = Math.floor(Math.random() * randomList.value.length)
    list.push(randomList.value[index])
    randomList.value.splice(index, 1)
  }
  randomList.value = list
}
// const randomList2 = ref(Array.apply(null, {length:81} as number[]).map((item,index) => index % 9 + 1))
const pop = () => {
  list.pop()
}
const push = () => {
  list.push(list.length + 1)
}
onMounted(() => {

})

</script>
<style scoped lang='less'>
.button {
  margin: 10px;
}

.wrap {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin: 10px;

  .item {
    display: flex;
    width: 25px;
    height: 25px;
    border: 1px solid #ccc;
    justify-content: center;
    align-items: center;
  }
}

.random {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin: 10px;
  width: calc(25*10px + 9px);
  flex-wrap: wrap;

  .item {
    display: flex;
    width: 25px;
    height: 25px;
    border: 1px solid #ccc;
    justify-content: center;
    align-items: center;
  }
}

/* 1. 声明过渡效果 */
.mmm-move {
  transition: all 0.5s cubic-bezier(0.55, 0, 0.1, 1);
}
</style>