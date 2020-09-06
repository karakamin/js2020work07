import Vue from 'vue';
import axios from 'axios';
import VueAxios from 'vue-axios';
import jquery from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './bus';
// Import component
import Loading from 'vue-loading-overlay';
// Import stylesheet
import 'vue-loading-overlay/dist/vue-loading.css';
import App from './App.vue';
import router from './router';

window.$ = jquery;

Vue.config.productionTip = false;
// 全域註冊方法，另外還可以使用將元件加入到 Vue 的藍圖內
Vue.component('Loading', Loading);

// 套件加入 Vue 的藍圖內，較正確的說法是加入原型內
Vue.use(VueAxios, axios);

new Vue({
  router,
  render: (h) => h(App),
}).$mount('#app');
