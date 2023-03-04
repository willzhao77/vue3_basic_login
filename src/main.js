import { createApp } from 'vue'
import App from './App.vue'
import router from "./router";
import axios from 'axios'


axios.defaults.baseURL = 'http://la10vue3_2.test/api/';

createApp(App).use(router).mount('#app')
