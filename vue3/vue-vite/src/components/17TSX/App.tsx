import { ref } from 'vue'
// tsx使用变量
const date = ref<number>(new Date().valueOf())

const flag = ref<boolean>(true)
const changeFlag = (value: boolean) => {
  flag.value = value
}

const arrNum = [1, 3, 5, 7, 9]

const str = ref<string>('132')

// 使用tsx
const renderDom = () => {
  return (
    // tsx中使用变量需要用{}
    <div>
      {/* tsx中使用事件需要on-xxx 事件传递变量需要使用 .bind */}
      <button onClick={changeFlag.bind(this, !flag.value)}>change flag</button>
      <div>我是tsx{date.value}</div>
      <div v-show={flag.value}>我是show{flag.value}</div>
      {/* tsx不支持v-if */}
      {flag.value ? <div>我是if{flag.value}</div> : null}
      {/* tsx不支持v-for */}
      {arrNum.map((item) => (
        <div data-index={item}>{item}</div>
      ))}
      {/* tsx 支持 v-model */}
      <input v-model={str.value}></input>
      <div>{str.value}</div>
    </div>
    // tsx中指令中使用变量也是{}
  )
}

export default renderDom
