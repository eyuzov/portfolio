<template>
  <div id="app">
    <!-- <AppHeader /> -->
    <AppBanner />
    <AppProject />
    <AppKitchens />
    <AppCounter />
    <AppProject2 />
    <AppArticle />
    <AppFooter />
  </div>
</template>

<script src="https://cdn.jsdelivr.net/npm/vue@2/dist/vue.js"></script>
<script src="item.js"></script>
<script>
const app = new Vue({
  el: "#app",
  methods: {},
  data: {
    articleArr: [
      {
        imgUrl: "img/article_img1.png",
        title: "1 Let’s Get Solution For Building Construction Work",
        date: "26 December,2022",
        tag: "kitchen",
      },
      {
        imgUrl: "img/article_img2.png",
        title: "2 Let’s Get Solution For Building Construction Work",
        date: "26 December,2022",
        tag: "bedroom",
      },
      {
        imgUrl: "img/article_img3.png",
        title: "3 Let’s Get Solution For Building Construction Work",
        date: "26 December,2022",
        tag: "kitchen",
      },
      {
        imgUrl: "img/article_img1.png",
        title: "4 Let’s Get Solution For Building Construction Work",
        date: "26 December,2022",
        tag: "building",
      },
      {
        imgUrl: "img/article_img2.png",
        title: "5 Let’s Get Solution For Building Construction Work",
        date: "26 December,2022",
        tag: "architecture",
      },
      {
        imgUrl: "img/article_img3.png",
        title: "6 Let’s Get Solution For Building Construction Work",
        date: "26 December,2022",
        tag: "kitchen_planning",
      },
      {
        imgUrl: "img/article_img1.png",
        title: "7 Let’s Get Solution For Building Construction Work",
        date: "26 December,2022",
        tag: "kitchen_planning",
      },
    ],
    tag: "*",
  },

  computed: {
    article() {
      return this.articleArr.filter((element) => {
        if (element.tag === this.tag) {
          return element;
        } else if (this.tag === "*") {
          return element;
        }
      });
    },
  },
});

const app_buttons = new Vue({
  el: "#app_buttons",
  data: {},
  methods: {
    sort(tag) {
      app.$data.tag = tag;
    },
  },
});
</script>
<script>
// import AppHeader from "./components/AppHeader.vue";
import AppBanner from "./components/AppBanner.vue";
import AppProject from "./components/AppProject.vue";
import AppKitchens from "./components/AppKitchens.vue";
import AppCounter from "./components/AppCounter.vue";
import AppProject2 from "./components/AppProject2.vue";
import AppArticle from "./components/AppArticle.vue";
import AppFooter from "./components/AppFooter.vue";

export default {
  name: "app",
  components: {
    // AppHeader,
    AppBanner,
    AppProject,
    AppKitchens,
    AppCounter,
    AppProject2,
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
