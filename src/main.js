// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from "./store"
import Vant from 'vant';
import 'vant/lib/index.css';
import "./data/prolist"
import "nprogress/nprogress.css"
import 'lib-flexible/flexible'
import vueTap from "v-tap"
import Share from 'vue-social-share'
import 'vue-social-share/dist/client.css';
Vue.config.productionTip = false
Vue.use(Share)
Vue.use(Vant);
Vue.use(vueTap)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
