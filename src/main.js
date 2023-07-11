import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import { loadFonts } from './plugins/webfontloader'
import './assets/styles/main.scss'
import './assets/styles/sidebar.scss'
import { Vue3Mq } from "vue3-mq";

loadFonts()

createApp(App)
  .use(router)
  .use(store)
  .use(vuetify)
  .use(Vue3Mq, {
    mobile: 550
  })
  .mount('#app')
