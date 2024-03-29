import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./project_details/store";

Vue.config.productionTip = false;

new Vue({
  store,
  router,
  render: (h) => h(App),
}).$mount("#app");
