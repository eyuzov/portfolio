<template>
  <div id="app">
    <AppHeader />
    <AppBanner />
    <AppProjectDetailsPage />
    <AppFooter />
  </div>
</template>

<script>
import AppHeader from "@/main/components/AppHeader.vue";
import AppBanner from "@/project_details/components/AppBanner.vue";
import AppProjectDetailsPage from "@/project_details/components/AppProjectDetailsPage.vue";
import AppFooter from "@/main/components/AppFooter.vue";

export default {
  name: "PageAppProject",
  components: {
    AppHeader,
    AppBanner,
    AppProjectDetailsPage,
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
