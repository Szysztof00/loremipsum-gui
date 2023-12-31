import { fileURLToPath, URL} from 'node:url'
import { resolve, dirname } from 'node:path'
import VueI18nPlugin from '@intlify/unplugin-vue-i18n/vite'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    VueI18nPlugin({
      inlude: resolve(dirname(fileURLToPath(import.meta.url))),
    })
  ],
  resolve : {
    alias: {
      '@': fileURLToPath(new URL('./src',import.meta.url))
    }
  },
  base: '/loremIpsum/',
})