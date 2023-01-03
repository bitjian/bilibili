<template>
  <div>
    <Btn @on-click="getBtnText" text="我是小满的帽子">
      <template #default>哈哈哈</template>
    </Btn>
  </div>
</template>

<script lang='ts' setup>
import { reactive, onMounted, h } from 'vue'
  onMounted(() => {

  })
  type Props = {
    text?: string
  }
  const getBtnText = (str:string) => {
    console.log(str)
  }
  const Btn = (props: Props, ctx: any) => {
    return h("div", {
      class: "bg-green-600 rounded-lg p-2.5 text-white shadow-lg w-200 text-center m-1 text-center",
      onClick: () => {
        ctx.emit("on-click", '我是一个按钮')
      }
    }, 
    [props.text,
    ctx.slots.default()]
    )
  }

</script>
<style scoped lang='less'>

</style>