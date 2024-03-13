<template>
<div id="app">
            <!-- <AppHeader /> -->
            <AppBanner />
            <AppArticle />
            <AppFooter />

    </div>
</template>

<script>


// import AppHeader from "@/main/components/AppHeader.vue"
import AppFooter from "@/main/components/AppFooter.vue"
import AppBanner from "./components/AppBanner.vue"
import AppArticle from "./components/AppArticle.vue"


export default {
  name: 'AppBlog',
  components: {
    // AppHeader,
    AppBanner,
    AppArticle,
    AppFooter,
  }
}




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
