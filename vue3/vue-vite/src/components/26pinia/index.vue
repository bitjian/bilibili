<template>
  <div>
    <div> count: {{Test.count}}</div>
    <div> user: {{Test.user}}</div>
    <div> 具有响应式的解构</div>
    <div> count: {{countNew}}</div>
    <div> user: {{userNew}}</div>
    <div> 不具有响应式的解构</div>
    <div> count: {{countOld}}</div>
    <div> user: {{userOld}}</div>
    <div>{{Test.userInfo}}</div>
    <button  @click="change">修改</button>
  </div>
</template>

<script lang='ts' setup>
// 引入store
import { useTestStore, } from './store'
import { reactive, onMounted, toRefs } from 'vue'
// 引入 storeToRefs使store解构具有响应式
import { storeToRefs } from 'pinia'
  // 使用store
  const Test = useTestStore()
  // 普通解构会失去响应式
  let {count: countOld, user: userOld} = Test
  // 具有响应式的解构
  let {count: countNew, user: userNew} = storeToRefs(Test)
  // store解构
  onMounted(() => {

  })
  // 修改Store的方式
  const change = () => {
    const newUser = {name: 'rpf', age: 27}
    // 1. 直接修改Test
      // Test.count++
    // 2.通过$patch 参数是一个对象
      // const newUser = {name: 'rpf', age: 27}
      // Test.$patch({
      //   user: newUser
      // })
    // 3.通过$patch 参数是内置函数
    // const newUser = {name: 'sjj', age: 25}
    //   Test.$patch((state) =>{
    //     state.user = newUser
    //   })
    // 4.通过action的方法修改
    // Test.changeUser()
    // 5.处理解构后的值
      userOld = newUser
      userNew.value = newUser
      countNew.value++
      countOld++
  }

</script>
<style scoped lang='less'>

</style>