import Vue from "vue";
import Router from "vue-router";

import AppMain from "@/main/AppMain.vue";
import AppBlog from "@/blog/AppBlog.vue";
import AppBlogDetails from "@/blog_details/AppBlogDetails.vue";
import PageAppProject from "@/project/PageAppProject.vue";
import AppProjectDetails from "@/project_details/AppProjectDetails.vue";
import AppNotFound from "@/not_found/AppNotFound.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/index",
      name: "index",
      component: AppMain,
    },
    {
      path: "/project",
      name: "project",
      component: PageAppProject,
    },
    {
      path: "/blog",
      name: "blog",
      component: AppBlog,
    },
    {
      path: "/blog_details",
      name: "blog_details",
      component: AppBlogDetails,
    },
    {
      path: "/project_details",
      name: "project_details",
      component: AppProjectDetails,
    },
    {
      path: "/404",
      name: "NotFound",
      component: AppNotFound,
    },
    {
      path: "*",
      redirect: "/404",
    },
  ],
});
