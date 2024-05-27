import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'
import { VitePWA } from 'vite-plugin-pwa'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    VitePWA({ registerType: 'autoUpdate' })
  ],
  resolve:{
    alias:{
      '@':path.resolve(__dirname, './src')
    }
  }
})
