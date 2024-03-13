<template>
  <div id="app">
    <!-- <AppHeader /> -->
    <AppArticle />

    <AppFooter />
  </div>
</template>

<script>
// import AppHeader from "@/main/components/AppHeader.vue";
import AppArticle from "./components/AppArticle.vue";
import AppFooter from "@/main/components/AppFooter.vue";

export default {
  name: "AppNotFound",
  components: {
    // AppHeader,
    AppArticle,
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
