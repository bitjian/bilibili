<template >
  <div id="testdiv">
    <h3>computed:</h3>
    <div>姓:{{firstName}}</div>
    <div>名：{{lastName}}</div>
    <div>姓名：{{fullName}}</div>
    <div>
      <input v-model="fullSetName" />
    </div>
    <h3>watch:</h3>
    <div @click="++watchAge">age: {{watchAge}}</div>
    <div>salary:{{watchSalary}}</div>
    <strong>ref对象：</strong>
    <div >{{watchRefObj}}</div>
    <div @click="watchRefObj.age++">只改变age会触发整个对象的watch监听</div>
    <div @click="changeRefObj">改变整个对象会触发watch监听</div>
    <strong>reactive对象:</strong>
    <div >{{watchReacObj}}</div>
    <div @click="watchReacObj.age++">只监听对象属性age</div>
    <div>salary:{{watchReacObj.job.salary}}</div>
    <input v-model="watchReacObj.job.salary"/>
    <button @click="stop">停止监听</button>
  </div>
</template>
<script lang="ts">
import { ref, computed, watch, reactive, watchEffect } from 'vue'
export default {
  setup() {
    let firstName = ref<string>('张')
    let lastName = ref<string>('子建')
    let watchAge = ref<number>(18) 
    let watchSalary = ref<number>(15)
    let watchRefObj = ref({
      name: 'zzj',
      age: 24
    })
    let watchReacObj = reactive({
      name: 'proMonkey',
      age: 30,
      job:{
        salary: 18
      }
    })
    
    // vue3的计算需要通过组合式api computed来实现
    const fullName = computed(() => {
      return firstName.value + lastName.value
    })
    // 计算属性也可以通过get,set来操作
    let fullSetName = computed({
      set(value:string) {
        const [str1, str2] = [value.substring(0,1), value.slice(1)]
        firstName.value = str1
        lastName.value = str2
      },
      get() {
        return firstName.value + lastName.value
      }
    })
    // 通过监听watch变化， watch入参可以是基本类型响应式，数组，函数
    // 1.基础值
    watch(watchAge,(newVal, oldVal) => {
      console.log('1.',newVal, oldVal);
      ++watchSalary.value
    })
    // 2.数组
    watch([watchAge, watchSalary], (newVal, oldVal) => {
      console.log('2.',newVal, oldVal);
    })
    // 3.watch监听ref对象，只能监听整个对象变化
    watch(watchRefObj.value, (newVal, oldVal) => {
      // newVal === oldVal 整个新对象
      console.log('3.',newVal, oldVal);
    })
    const changeRefObj = () => {
      watchRefObj.value = {name: 'sjj', age: 15}
    }
    // 4.watch监听reactive对象，只能监听整个对象的变化 同3
    watch(watchReacObj, (newVal, oldVal) => {
       // newVal === oldVal 整个新对象
      console.log('4.',newVal, oldVal);
    })
    // 5.通过computed函数监听reactive对象的属性
    watch(() => watchReacObj.age, (newVal, oldVal) => {
      console.log('5.',newVal, oldVal);
      ++watchReacObj.job.salary
    })
    // 6.监听深层属性，需要通过deep:true
    watch(()=> watchReacObj.job, (newVal, oldVal) => {
      // 监听的是 job对象 ， newVal === oldVal
      console.log('6.',newVal, oldVal)
    },{deep:true})
    // 7.通过computed函数监听深层属性
    watch(()=>watchReacObj.job.salary, (newVal, oldVal) => {
      console.log(newVal, oldVal)
    })
    // 8.watchEffect(), 用到谁监听谁， 默认开启 immediate， 返回值可以停止监听
    const stop = watchEffect((onInvalidator) => {
      const div = document.querySelector("#testdiv")
      // 开始执行的时候无法读取到div, 可以设置watchOption
      console.log(div, 'div');
      console.log("我一开始就执行啦!!!")
      if(watchSalary.value > 20) {
        fullSetName.value = '张子建总'
      }
      if(watchReacObj.job.salary > 20) {
        watchReacObj.name = '牛人'
      }
      // 在触发监听之前会有一个回调函数先执行
      onInvalidator(() => {
        console.log('onCleanup');
      })
    }, {
      flush:"post",
      // 可以通过onTrigger进行调试
      onTrigger: (event) => {
        console.log(event);
        debugger
      }
    })
    return {
      firstName,
      lastName,
      fullName,
      fullSetName,
      watchAge,
      watchSalary,
      watchRefObj,
      watchReacObj,
      changeRefObj,
      stop
    }
  }
}
</script>
<style >
  
</style>