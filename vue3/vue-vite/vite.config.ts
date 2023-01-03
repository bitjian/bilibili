import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import {fileURLToPath, URL} from "url"

import vueJsx from '@vitejs/plugin-vue-jsx';
import postcsspxtoviewport from 'postcss-px-to-viewport' // 将px转换为vw vh
// unocss
import unocss from 'unocss/vite'
import { presetUno, presetAttributify, presetIcons } from 'unocss'



// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueJsx(),
    AutoImport({
      resolvers: [ElementPlusResolver()],
    }),
    Components({
      resolvers: [ElementPlusResolver()],
    }),
    unocss({
      rules: [
        ['flex', {display: "flex"}],
        ['red', {color: 'red'}],
        [/^p-(\d+)$/, ([, d]) => ({ padding: `${Number(d) * 10}px`})]
      ],
      shortcuts: {
        "flex-red":"flex red"
      },
      presets: [
        presetUno(),
        presetAttributify(),
        presetIcons()],
    })
  ],
  css: {
    postcss: {
      plugins: [
        postcsspxtoviewport({
          unitToConvert: 'px', // 要转化的单位
          viewportWidth: 320, // UI设计稿 的宽度
        })
      ],
    }
  },
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url))
    }
  }
})
