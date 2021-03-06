import Vue from "vue";
import Antd from "ant-design-vue";
import "ant-design-vue/dist/antd.less";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";

Vue.config.productionTip = false;
Vue.use(Antd)
new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
