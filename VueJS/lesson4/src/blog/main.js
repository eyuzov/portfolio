import Vue from "vue";
import AppBlog from "./AppBlog.vue";

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(AppBlog),
}).$mount("#blog");
