<template >
  <div>
    <div>{{name}}</div>
    <div>{{age}}</div>
    <div>{{codeMonkey}}</div>
    <div>{{proMonkey}}</div>
    <div>{{monkeyArr}}</div>
    <div @click="changeClick">点击改变</div>

  </div>
</template>
<script  lang="ts">
import { ref, Ref, reactive } from 'vue'
export default {
  name:'testRef',
  setup() {
    // 非响应式
    let name:string = 'zzj'
    // 响应式
    let age:Ref<number> = ref(24)
    // ref 处理对象
    let codeMonkey = ref({
      salary: '15k',
      name: 'code Monkey',
      age: 30
    })
    // reactive 处理对象
    let proMonkey = reactive({
      salary: '25k',
      name: 'proMonkey',
      age: 35
    })
    let monkeyArr = reactive<Array<number>>([])
    // ref处理基本数据响应式是通过defineProperty, ref和reactive处理对象的时候 是通过 proxy
    const changeClick = () => {
      // ref 响应式需要通过 xx.value 访问对应值， xx是RefImpl响应式对象
      console.log(name,age, age.value)
      age.value = 25
      // name不是响应式的，所以在视图层不会改变
      name = 'zds'
      console.log(name,age, age.value)

      console.log(codeMonkey)
      // 在ref里使用对象响应式，会自动用reactive进行转换， 但访问对象属性得通过 xx.value.aa
      codeMonkey.value.age  = 35
      codeMonkey.value.salary  = '18k'
      console.log(codeMonkey)
      // 通过reactive处理对象，可以直接访问对象属性， xx.aa
      console.log(proMonkey)
      proMonkey.age = 40
      proMonkey.salary = '30k'
      console.log(proMonkey)
      // vue3数组操作同样具有响应式
      let arr = [1,2,3]
      monkeyArr.push(...arr)
    }
    // 
    return {
      name,
      age,
      codeMonkey,
      proMonkey,
      monkeyArr,
      changeClick
    }
  }
  /**
   * 总结
   * ref主要用来定义基础类型，也可以定义复杂类型，但是操作的时候不方便，需要带上.value
   * reactive主要用来操作数组和对象
   * ref里的响应式是使用object.defineProperty的get和set来实现数据劫持，在操作复杂类型的时候 会自动使用reactive
   * reactive响应式是使用 reactive通过proxy和reflect来实现数据劫持
   * 
   */
}
</script>
<style >
  
</style>