class Btn extends HTMLElement {
  constructor() {
    super()
    // 1.创建标签的写法
    // const p = this.h('p')
    // p.innerText = 'webComponent-1'
    // p.setAttribute('style', 'height:200px;width:200px;border:1px solid #ccc;')
    // const shadow = this.attachShadow({mode:'open'})
    // console.log(p, shadow)
    // shadow.appendChild(p)
    // 2.template写法
    const template = this.h('template')
    template.innerHTML = `
      <style>
        .btn {
          height: 200px;
          width: 200px;
          border: 1px solid #ccc;
          background-color: pink;
        }
      </style>
      <div class="btn"> custom btn by template</div>
    `
    const shadow = this.attachShadow({mode:'open'})
    shadow.append(template.content.cloneNode(true))
  }
  h(el) {
    return document.createElement(el)

  }
}
window.customElements.define('cus-btn', Btn)