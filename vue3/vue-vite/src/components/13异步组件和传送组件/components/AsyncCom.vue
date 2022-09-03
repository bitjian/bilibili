<template>
  <div>
    <div v-for="(item,index) in data">
      {{index}}---{{item.name}}
    </div>
  </div>
</template>

<script lang='ts' setup>
import axios from '../utils/axios'
const data = await axios('./data.json')
console.log(data);

import { reactive, onMounted } from 'vue'
  onMounted(() => {

  })

</script>
<style scoped lang='less'>

</style>