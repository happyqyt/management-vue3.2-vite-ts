import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'

import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'

import VueSetupExtend from 'vite-plugin-vue-setup-extend'

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src')
    }
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: 
        `
          @use "@/assets/styles/theme.scss" as *;
          @use "@/assets/styles/variable.scss" as *;
        `
      }
    }
  },
  plugins: [
    vue(),
    AutoImport({
      resolvers: [ElementPlusResolver()],
      imports: ['vue']
    }),
    Components({
      resolvers: [ElementPlusResolver({importStyle: "sass"})],
    }),
    VueSetupExtend()
  ],
  server: {
    host: '0.0.0.0'
  }
})
