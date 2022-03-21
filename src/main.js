import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// import './util/pxtorem'

import axios from './axios/services'
import server from './axios/services';

// 引入echarts
let echarts = require('echarts')
// import echarts from 'echarts'
Vue.prototype.$echarts = echarts

Vue.prototype.$axios = axios
Vue.prototype.$server = server;

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
