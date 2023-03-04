import { createApp } from 'vue'
import App from './App.vue'
import router from "./router";
import axios from 'axios'
import "bootstrap/dist/css/bootstrap.css";

axios.defaults.baseURL = 'http://la10_doc_edit.test/api/';

createApp(App).use(router).mount('#app')
import "bootstrap/dist/js/bootstrap.js";