import { onMounted } from 'vue'
type Options = {
  el: string
}
type Return = {
  url: string | null
}
export default function (options: Options): Promise<Return> {
  return new Promise((resolve) => {
    onMounted(() => {
      const { el } = options
      // 获取元素
      const img: HTMLImageElement = document.querySelector(
        el
      ) as HTMLImageElement
      img.onload = (): void => {
        resolve({
          url: base64(img),
        })
      }
    })

    const base64 = (el: HTMLImageElement): string => {
      const canvas: HTMLCanvasElement = document.createElement('canvas')
      const ctx = canvas.getContext('2d') as CanvasRenderingContext2D
      canvas.width = el.width
      canvas.height = el.height
      ctx.drawImage(el, 0, 0, canvas.width, canvas.height)
      return canvas.toDataURL('image/png')
    }
  })
}
