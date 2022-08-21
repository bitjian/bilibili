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
      <div class="right-com">
        <component :is="curCom.comment"></component>
      </div>
    </div>
  </div>
</template>

<script lang='ts'>
import { reactive, onMounted, markRaw } from 'vue'
import TreeList from './components/TreeList.vue'
import A from './components/A.vue'
import B from './components/B.vue'
import C from './components/C.vue'
type TreeNode = {
  id: string,
  childrens?: Array<TreeNode>
}

type Component = {
  comment: any,
  subscribe: string
}
type CurCom = Pick<Component, 'comment'>
export default {
  components: { TreeList, A, B, C },
  setup() {
    onMounted(() => {
    });
    const data: TreeNode[] = [
      {
        id: '1',
        childrens: [{
          id: '1-1'
        },
        {
          id: '1-2',
          childrens: [{
            id: '1-2-1',
          }]
        }]
      },
      {
        id: '2',
        childrens: [{
          id: '2-1'
        },
        {
          id: '2-2',
        }]
      },
      {
        id: '3',
      }
    ]
    const clickId = (id: string) => {
      alert(id)
    }
    const coms = reactive<Component[]>([
      {
        subscribe: '我是组件A',
        comment:markRaw(A) 
      },
      {
        subscribe: '我是组件B',
        comment: markRaw(B) 
      },
      {
        subscribe: '我是组件C',
        comment: markRaw(C) 
      }
    ])
    let curCom = reactive<CurCom>({
      comment: coms[0]?.comment || null
    })
    const tabClick = (item:Component) => {
        curCom.comment = item.comment
    }
    return {
      data,
      clickId,
      coms,
      curCom,
      tabClick
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
      height: 500px;
      margin: 0 auto;
      line-height: 500px;
    }
  }
}
</style>