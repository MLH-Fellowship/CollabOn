import Vue from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'
import vuetify from './plugins/vuetify';

Vue.config.productionTip = false

const http = axios.create({
  baseURL: 'http://35.188.137.58:3000/api',
});

Vue.prototype.$http = http;

new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')
