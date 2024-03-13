import Vue from "vue";
import AppProjectDetails from "./AppProjectDetails.vue";
import store from "./store";

Vue.config.productionTip = false;

new Vue({
  store,
  render: (h) => h(AppProjectDetails),
}).$mount("#project_details");
