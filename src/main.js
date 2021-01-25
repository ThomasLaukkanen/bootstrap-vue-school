import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './main.scss'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
const axios = require('axios').default

Vue.use(axios)
Vue.use(BootstrapVue)
Vue.use(IconsPlugin)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app')
