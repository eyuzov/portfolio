import Vue from "vue";
import PageAppProject from "./PageAppProject.vue";

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(PageAppProject),
}).$mount("#project");
