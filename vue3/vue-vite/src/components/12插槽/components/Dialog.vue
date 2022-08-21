<template>
  <div>
    <div class="top">
      <slot name="top"></slot>
    </div>
    <div class="center">
      <template v-for="(item, index) in data">
        <div>
          <slot :data="item" :index="index"></slot>
        </div>
      </template>
    </div>
    <div class="bottom">
      <slot name="bottom"></slot>
    </div>
  </div>
</template>

<script lang='ts' setup>
// 作用域插槽
type Person = {
  name: string,
  age: number
}

const data = reactive<Person[]>([
  {
    name: 'zzj-1',
    age: 251
  },
  {
    name: 'zzj-2',
    age: 252
  },
  {
    name: 'zzj-3',
    age: 253
  }
])
import { reactive, onMounted } from 'vue'
onMounted(() => {

})

</script>
<style scoped lang='less'>
.top {
  height: 200px;
  background-color: orange;
}

.center {
  height: 200px;
  background-color: aqua;
}

.bottom {
  height: 200px;
  background-color: bisque;
}
</style>