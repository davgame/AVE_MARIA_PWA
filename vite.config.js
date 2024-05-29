import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'
import { VitePWA } from 'vite-plugin-pwa'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    VitePWA({ 
      registerType: 'autoUpdate', 
      manifest:{
        "icons": [
          {
            "src": "favicon-32x32.png",
            "sizes": "32x32",
            "type": "image/png"
          },
          {
            "src": "download.png",
            "sizes": "144x144",
            "type": "image/png",
            "purpose":"any maskable"
          },
          {
            "src": "apple-touch-icon.png",
            "sizes": "180x180",
            "type": "image/png"
          },
          {
            "src": "android-chrome.png",
            "sizes": "192x192",
            "type": "image/png"
          }, 
          {
            "src": "android-chrome-256.png",
            "sizes": "256x256",
            "type": "image/png"
          },
          {
            "src": "favicon-512-512.png",
            "sizes": "512x512",
            "type": "image/png"
          }
        ]
      }
    })
  ],
  resolve:{
    alias:{
      '@':path.resolve(__dirname, './src')
    }
  }
})
