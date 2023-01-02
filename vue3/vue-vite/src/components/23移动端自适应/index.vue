<template>
  <div class="wraps">
    <div class="head">
      <div>left</div>
      <div>中间</div>
      <div>right</div>
    </div>
    <div class="main">
      <div class="main-item" v-for="item in 100">
        <div class="item-img"></div>
        <div class="item-content">
          <div class="item-title">姓名{{ item }}</div>
          <div class="item-desc">简介{{ item }}简介{{ item }}简介{{ item }}简介{{ item }}简介{{ item }}简介{{ item }}简介{{ item
}}简介{{ item }}简介{{ item }}简介{{ item }}简介{{ item }}简介{{ item }}简介{{ item }}简介{{ item }}简介{{ item }}简介简介{{
    item
}}简介{{ item }}简介{{ item }}</div>
        </div>
      </div>
    </div>
    <div class="foot">
      <div class="foot-item" v-for="item in 4">
        <div class="foot-top">{{ item }}</div>
        <div class="foot-bottom">项目-{{ item }}</div>
      </div>
    </div>
  </div>
</template>

<script lang='ts' setup>
import { ref, reactive, toRefs, onBeforeMount, onMounted, watchEffect, computed } from 'vue';
/**
* 路由对象
*/
/**
* 路由实例
*/
//console.log('1-开始创建组件-setup')
/**
* 数据部分
*/
const data = reactive({})
onBeforeMount(() => {
  //console.log('2.组件挂载页面之前执行----onBeforeMount')
})
onMounted(() => {
  //console.log('3.-组件挂载到页面之后执行-------onMounted')
})
watchEffect(() => {
})
// 使用toRefs解构
// let { } = { ...toRefs(data) } 
defineExpose({
  ...toRefs(data)
})

</script>
<style lang="less">
html,
body,
#app {
  height: 100%;
  overflow: hidden;
  font-size: 14px;
}
</style>
<style scoped lang='less'>
.wraps {
  padding: 0px;
  margin: 0px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  height: inherit;
}

.head {
  display: flex;
  align-items: center;
  justify-content: space-around;
  background: pink;
  border-bottom: 1px solid #eee;

  div {
    padding: 10px;
  }
}

.main {
  height: 100%;
  overflow: auto;

  .main-item {
    display: flex;
    border-bottom: 1px solid #eee;
    padding: 10px;
    .item-img {
      width: 150px;
      height: 50px;
      border-radius: 50%;
      background-color: pink;
      margin-right: 10px;
    }

    .item-content {
      display: flex;
      flex-direction: column;
      justify-content: center;
    }

    .item-title {
      font-weight: 600;
    }

    .item-desc {
      margin: 5px 0;
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
    }
  }
}

.foot {
  border-top: 1px solid #eee;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  background: pink;
  padding: 10px;
  &-item {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-left: 10px;
    background: #eee;
  }
}
</style>