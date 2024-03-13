import Vue from "vue";
import AppBlogDetails from "./AppBlogDetails.vue";

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(AppBlogDetails),
}).$mount("#blog_details");
