import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'
import swal from 'sweetalert'

axios.defaults.baseURL = 'http://localhost:3000/'

createApp(App).use(router).mount('#app')
