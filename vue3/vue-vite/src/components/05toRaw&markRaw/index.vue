<template >
  <div>
    <div>{{names}}</div>
    <div @click="addAge">点击增加年龄</div>
    <div @click="addSalary">点击增加toRow处理后的数据</div>
    <div @click="addGirlFriend">点击增加对象</div>
    <div @click="addFriendAge">点击增加对象年龄(markRaw 处理了 没有响应式)</div>
  </div>
</template>
<script lang="ts">
import { reactive, toRaw, markRaw } from 'vue'
// toRow 将响应式对象转换为
export default {
  setup(){
    let names = reactive<any>({
      name: 'zzj',
      age: 24,
      job:{
        salary: 3500
      }
    })
    const addAge = function() {
      ++names.age
    }
    function addSalary() {
      let transRow = toRaw(names)
      transRow.age++
      transRow.job.salary++
    }
    function addGirlFriend() {
      let girlfriend = {sex:'女', age: 24}
      // markRaw声明的为普通对象，没有响应式
      names.girlfriend = markRaw(girlfriend) 
    }
    function addFriendAge () {
      names.girlfriend.age++
    }
    return {
      names,
      addAge,
      addSalary,
      addGirlFriend,
      addFriendAge
    }
  }
  
}
</script>
<style >
  
</style>