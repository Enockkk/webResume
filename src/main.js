import Vue from "vue";
import App from "./App.vue";
import router from "./router/";
import ElementUI from "element-ui";
import axios from "axios";
import qs from "qs";
import Vuex from "vuex";
import store from "./store";
// import store from "./store";
// import http from './api/api'

import "element-ui/lib/theme-chalk/index.css";
import VueRouter from "vue-router";

Vue.use(ElementUI);
// Vue.use(axios);
Vue.use(qs);
Vue.use(VueRouter);
Vue.use(Vuex)

// Vue.prototype.$ajax = axios
Vue.config.productionTip = false;
Vue.prototype.$axios = axios;
Vue.prototype.$qs = qs;

//
// Vue.http.options.emulateJSON = true;
// Vue.http.options.emulateHTTP = true;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");

