import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'amfe-flexible'
import Vant from 'vant'
import 'vant/lib/index.css'

Vue.use(Vant)
/*
后面在配置为按需引入(减少代码打包体积)
*/
// import {
//   Button,
//   Tabbar,
//   TabbarItem
// } from 'vant'

// Vue
//   .use(Button)
//   .use(Tabbar)
//   .use(TabbarItem)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
