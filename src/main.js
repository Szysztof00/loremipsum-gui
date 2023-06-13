import { createApp } from 'vue/dist/vue.esm-bundler';
import App from './App.vue';
import router from './router';
import i18n from './i18n';
import './style.css';
import axios from "axios";
import VueAxios from 'vue-axios'

const axiosIstance = axios.create({
    withCredentials: false,
})

createApp(App).use(router).use(i18n).use(VueAxios,axiosIstance).mount('#app');