<template >
  <div>
    <table width="800px" align="center" border="1px">
      <thead >
        <tr>
          <th>名称</th>
          <th>数量</th>
          <th>总价</th>
          <th>操作</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item,index) in shopList" :key="item.name">
          <td>{{item.name}}</td>
            <td><button @click="changeNum(item, false)">-</button> {{item.number}} <button @click="changeNum(item, true)">+</button></td>
          <td> {{item.price * item.number}} </td>
          <td><button @click="delShop(index)">删除</button></td>
        
        </tr>
      </tbody>
      <tfoot>
        <tr>
          <th></th>
          <th></th>
          <th></th>
          <th>总价：{{_total}}</th>
        </tr>
      </tfoot>
    </table>
  </div>
</template>
<script lang="ts">
import { reactive,toRef, ref, computed  } from 'vue'
type ShopType = {
  name:string,
  number: number,
  price: number
}
export default {
  setup() {
    let _total = ref<number>(0)
    const shopList = reactive<Array<ShopType>>([
      {
        name: '上衣',
        number: 1,
        price:100
      },
      {
        name: '裤子',
        number: 1,
        price:200
      },{
        name: '鞋子',
        number: 1,
        price:300
      }
    ])
    // 删除商品
    const delShop = function(index:number):void {
      shopList.splice(index, 1)
      // 每个方法都需要调用
      // calTotal()
    }
    // 改变数量
    const changeNum= function(item:ShopType, isAdd:boolean):void {
      let number = toRef(item, 'number')
      if(number.value > 1 && !isAdd) {
        --number.value
      }
      if(number.value < 99 && isAdd) {
        ++number.value
      }
      // 每个方法都需要调用
      // calTotal()
    }

    // 计算总价，使用函数
    // const calTotal = function():void {
    //   _total.value = shopList.reduce((pre:number, curr:ShopType) => {
    //       return pre + curr.price * curr.number
    //   }, 0)
    // }
    // 通过计算属性计算, 监听依赖的属性是否有改动而去运行
    _total = computed(() => {
      return shopList.reduce((pre:number, curr:ShopType) => {
           return pre + curr.price * curr.number
      }, 0)
    })
    // 每个方法都需要调用
    // calTotal()
    return {
      shopList,
      delShop,
      changeNum,
      _total
    }
  }
}
</script>
<style >
  
</style>