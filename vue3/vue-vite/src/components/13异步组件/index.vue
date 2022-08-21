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
      <!-- 插槽 -->
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
  overflow: hidden;

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
  }
}
</style>