import { createApp } from 'vue'
import '@/style.css'
import 'boxicons'
import App from '@/App.vue'
// add this
import './index.css'
import '../node_modules/flowbite-vue/dist/index.css'
import router from '@/router/router'


createApp(App).use(router).mount('#app')

if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('sw.js')
      .then(registration => {
        console.log('Зарегестрировали', registration.scope);
      })
      .catch(error => {
        console.log('Ошибка регистрации', error);
      });
  });
}

