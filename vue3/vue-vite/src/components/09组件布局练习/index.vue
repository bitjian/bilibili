<template>
  <div class="main-content">
    <Menubar></Menubar>
    <div class="main-content-right">
      <Navbar></Navbar>
      <Content></Content>
    </div>
  </div>
</template>

<script lang='ts'>
import { reactive, onMounted } from 'vue'
import Menubar from './components/menubar.vue'
import Navbar from './components/navbar.vue'
import Content from './components/content.vue'
export default {
    components: { Menubar, Navbar, Content },
    setup() {
        onMounted(() => {
        });
        return {};
    },
}
</script>
<style scoped lang='less'>
.main-content {
  display: flex;
  overflow: hidden;
  height: 100%;
  &-right {
    display: flex;
    flex-direction: column;
    flex:1;
    overflow: hidden;
  }
}
</style>