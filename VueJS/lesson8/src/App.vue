<template>
  <div id="app">
    <AppHeader />
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
import AppHeader from "@/main/components/AppHeader.vue";

export default {
  name: "app",
  components: {
    AppHeader,
  },
};
</script>

<style scoped lang="sass">
body
    padding: 0
    margin: 0
.content
    padding: 0 calc(50% - 600px)

header
    display: flex
    justify-content: space-between
.header-left
    margin-top: 60px
    span
        color: rgb(41, 47, 54)
        font-family: DM Serif Display
        font-size: 40px
        font-weight: 400
        line-height: 125%
        letter-spacing: 0%
        text-align: left
        margin-left: 10px
.header-right
    margin-top: 60px

.header-right__menu
    display: flex
    gap: 50px
    a
        text-decoration: none
    li
        display: inline
        color: rgb(41, 47, 54)
        font-family: Jost
        font-size: 20px
        font-weight: 400
        line-height: 125%
        letter-spacing: 0%
        text-align: center
</style>

