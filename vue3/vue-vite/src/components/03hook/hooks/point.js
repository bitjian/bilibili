import { reactive, onMounted, onBeforeUnmount } from 'vue'

export default function() {
  const point = reactive({
    x: 0,
    y:0
  })
  // 点击鼠标获取鼠标位置
  const savePoint = function(event) {
    point.x = event.pageX
    point.y = event.pageY
    console.log(event.pageX, event.pageY);
  }
  // mounted生命周期，注意逻辑实现是写在回调函数里
  onMounted(()=>{
    window.addEventListener("click", savePoint)
  })
  // 销毁的时候移除事件
  onBeforeUnmount(() => {
    window.removeEventListener("click")
  })

  return point
}