import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import store from './store'
import VueResource from 'vue-resource'
import routes from './router/index'
import mint from 'mint-ui'
import 'mint-ui/lib/style.css'
import $ from 'jquery'
Vue.use(VueRouter)
Vue.use(mint)
Vue.use(VueResource)
const router = new VueRouter({ routes})
new Vue({  
  el: '#app',
  router,
  store,
  render: (h) => h(App)
})