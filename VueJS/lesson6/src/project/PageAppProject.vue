<template>
  <div id="app">
    <AppHeader />
    <AppBanner />
    <AppArticleItem />
    <AppPagination />
    <AppFooter />
  </div>
</template>

<script>
import AppHeader from "@/main/components/AppHeader.vue";
import AppBanner from "@/project/components/AppBanner.vue";
import AppArticleItem from "@/project/components/AppArticleItem.vue";
import AppPagination from "@/main/components/AppPagination.vue";
import AppFooter from "@/main/components/AppFooter.vue";

export default {
  name: "PageAppProject",
  components: {
    AppHeader,
    AppBanner,
    AppArticleItem,
    AppPagination,
    AppFooter,
  },
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
