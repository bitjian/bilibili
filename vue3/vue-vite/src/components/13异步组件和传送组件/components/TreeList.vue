<template>
  <div class="m-10">
    <template v-for="item in data">
      <div @click.stop="clickId(item.id)">{{item.id}}</div>
      <TreeList @on-click="clickId" :data="item?.childrens ?? []">{{item}}</TreeList>
    </template>
  </div>
</template>

<script lang='ts' setup>
type TreeNode =  {
    id:string,
    childrens?:Array<TreeNode>
}
type Props = {
  data: TreeNode[]
}
const prop = defineProps<Props>()
const emit = defineEmits(['on-click'])
import { reactive, onMounted } from 'vue'
const clickId = (id:string) => {
  emit('on-click', id)
}
  onMounted(() => {

  })

</script>
<script lang='ts'>
  export default {
    name: 'TreeList'
  }
</script>
<style scoped lang='less'>
.m-10 {
  display: inline-block;
  margin-left: 10px;
}
</style>