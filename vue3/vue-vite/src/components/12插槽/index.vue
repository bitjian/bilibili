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
        <Dialog>
          <!-- #插槽的缩写  -->
          <template #top>我被插入了上面好刺激！！！</template>
          <!-- 作用域插槽，可以将子组件的变量传到父组件 -->
          <template v-slot="{ data, index }">
            {{ index }}---{{ data?.name }}---{{ data?.age }}
          </template>
          <template #bottom> 我被插入了下面，好刺激</template>
        </Dialog>
      </div>
    </div>
  </div>
</template>

<script lang='ts'>
import { reactive, onMounted, markRaw } from 'vue'
import TreeList from './components/TreeList.vue'
import Dialog from './components/Dialog.vue'
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
  components: { TreeList, Dialog },
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