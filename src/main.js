import Vue from 'vue'
import App from './App.vue'
import router from './router'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
// 全局css
import './assets/css/Global.css'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
Vue.use(BootstrapVue)

import Vant from 'vant';
import 'vant/lib/index.css';

Vue.use(Vant);

// 导入axios
import axios from 'axios'

import './plugins/element.js'
// // 配置axios
axios.defaults.baseURL = 'http://192.168.0.142:8086/zhuoya-sheet/'
// axios请求拦截器
axios.interceptors.request.use(function (config) {
  NProgress.start()
  config.headers.Authorization = window.sessionStorage.getItem('orderNo')
  return config
}, function (error) {
  console.log(error);
})
// axios响应拦截器
axios.interceptors.response.use(function (config) {
  if (config.status != 200) return this.$message.error('请重新登录')
  NProgress.done()
  return config;
}, function (error) {
  console.log(error)
})
// 全局挂载axios this.$http调用即可
Vue.prototype.$http = axios

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')