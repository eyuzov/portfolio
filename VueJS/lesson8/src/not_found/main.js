import Vue from "vue";
import AppNotFound from "./AppNotFound.vue";

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(AppNotFound),
}).$mount("#not_found");
