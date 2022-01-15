import { createApp } from 'vue'
import App from './App.vue'
import store from './store'
import './assets/css/index.css'
import VueFeather from 'vue-feather'

createApp(App).component('fi', VueFeather).use(store).mount('#app')
