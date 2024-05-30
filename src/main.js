import { createApp } from 'vue'
import '@/style.css'
import 'boxicons'
import App from '@/App.vue'
// add this
import './index.css'
import '../node_modules/flowbite-vue/dist/index.css'
import router from '@/router/router'


createApp(App).use(router).mount('#app')


