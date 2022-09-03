<template>
  <div class="main-content">
    <div class="left">
      <Card title="今日头条" subTitle="热点" content="134679"></Card>
      <TreeList @on-click="clickId" :data="data"></TreeList>
    </div>
    <div class="right">
      <div class="right-head">
        <div v-for="item in coms" class="right-item" @click="tabClick(item)">
          {{ item.subscribe }}
        </div>

      </div>
      <!-- 异步组件 -->
      <div class="right-com">
        <!-- 需要通过Suspense内置组件加载异步插件 -->
        <Suspense>
          <!-- default插槽 加载异步组件 -->
          <template #default>
            <AsyncCom></AsyncCom>
          </template>
          <!-- fallback插槽组件未完成的时候显示的东东 -->
          <template #fallback>
            <div>loadding</div>
          </template>
        </Suspense>
      </div>
      <div class="right-tele" v-if="true">
        <!-- 传送组件使用leteport, 可以让传送组件不受父元素样式影响，注意 v-if的优先级比传送组件搞 -->
        <!-- to可以是id也可以是类选择器 -->
        <!-- 传送走了 样式需要去传送位置定义 -->
        <teleport to=".model">
          <div class="teleport">13464564988\9</div>
        </teleport>
      </div>
    </div>
  </div>
</template>

<script lang='ts'>
import { reactive, onMounted, markRaw, defineAsyncComponent } from 'vue'
import TreeList from './components/TreeList.vue'
import Sub from '../08生命周期/Sub.vue'
type TreeNode = {
  id: string,
  childrens?: Array<TreeNode>
}
const AsyncCom = defineAsyncComponent(() => import('./components/AsyncCom.vue'))

type Component = {
  comment: any,
  subscribe: string
}
type CurCom = Pick<Component, 'comment'>
export default {
  components: { TreeList, AsyncCom },
  setup() {
    onMounted(() => {
    });
    const data: TreeNode[] = []
    const clickId = (id: string) => {
      alert(id)
    }
    // 异步组件引入，需要通过defineAsyncComponent进行引入
    return {
      data,
      clickId,
    };
  },
}
</script>
<style scoped lang='less'>
.main-content {
  // overflow: hidden;

  .left {
    width: 500px;
    float: left;

  }

  .right {
    border: 1px solid #ccc;
    // display: flex;
    overflow: hidden;

    &-head {
      display: flex;
      align-items: center;
      justify-content: flex-start;
    }

    &-item {
      border: 1px solid #ccc;
      margin-left: 10px;
      width: 80px;
      height: 20px;
      line-height: 20px;
    }

    &-com {
      width: 500px;
      margin: 0 auto;
    }

    &-tele {
      position: relative;
      background-color: aqua;
      height: 100px;

      .teleport {
        position: absolute;
        left: 50px;
        top: 50px;
        background-color: darkgoldenrod;
        height: 50px;
        width: 100px;
        text-align: center;
        line-height: 50px;
        z-index: 999;
      }
    }
  }
}
</style>