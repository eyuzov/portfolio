<template>
  <div class="content">
    <div class="menu">
      <a href="#" @click="sort('bathroom')">Bathroom</a>
      <a href="#" @click="sort('bedroom')">Bed Room</a>
      <a href="#" @click="sort('kitchen')">Kitchan</a>
      <a href="#" @click="sort('living_area')">Living Area</a>
    </div>
    <div class="article-container">
      <div v-for="item in article" :key="item" class="article-container_flex__section">
        <figure>
          <router-link to="/project_details"
            ><a href="project_details"><img :src="item.imgUrl" alt="room image" /></a
          ></router-link>
          <div class="article-container_flex__link">
            <figcaption class="article-container_flex__link-text">
              <h3>{{ item.title }}</h3>
              <p>{{ item.chapter }}</p>
            </figcaption>
            <img src="@/assets/img/arrow.png" alt="" />
          </div>
        </figure>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      articleArr: [
        {
          imgUrl: require("@/assets/img/project_image1.png"),
          title: "Minimal Bedroom",
          chapter: "Decor / Artchitecture",
          tag: "kitchen",
        },
        {
          imgUrl: require("@/assets/img/project_image5.png"),
          title: "Minimal Bedroom",
          chapter: "Decor / Artchitecture",
          tag: "kitchen",
        },
        {
          imgUrl: require("@/assets/img/project_image2.png"),
          title: "Minimal Bedroom",
          chapter: "Decor / Artchitecture",
          tag: "living_area",
        },
        {
          imgUrl: require("@/assets/img/project_image4.png"),
          title: "Minimal Bedroom",
          chapter: "Decor / Artchitecture",
          tag: "bedroom",
        },
        {
          imgUrl: require("@/assets/img/project_image3.png"),
          title: "Minimal Bedroom",
          chapter: "Decor / Artchitecture",
          tag: "living_area",
        },
        {
          imgUrl: require("@/assets/img/project_image6.png"),
          title: "Minimal Bedroom",
          chapter: "Decor / Artchitecture",
          tag: "bathroom",
        },
        {
          imgUrl: require("@/assets/img/project_image7.png"),
          title: "Minimal Bedroom",
          chapter: "Decor / Artchitecture",
          tag: "bathroom",
        },
        {
          imgUrl: require("@/assets/img/project_image8.png"),
          title: "Minimal Bedroom",
          chapter: "Decor / Artchitecture",
          tag: "living_area",
        },
      ],
      tag: "*",
    };
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
  methods: {
    sort(tag) {
      console.log(tag);
      this.$data.tag = tag;
    },
  },
};
</script>

<style lang="sass" scoped>
body
    padding: 0
    margin: 0
.content
    padding: 0 calc(50% - 600px)
.menu
    margin-top: 200px
    a
        color: rgb(41, 47, 54)
        font-family: Jost
        font-size: 18px
        font-weight: 600
        line-height: 125%
        letter-spacing: 2%
        text-align: center
        border: 1px solid rgb(205, 162, 116)
        border-radius: 18px
        text-decoration: none
        padding: 26px 66px 26px 66px
    a:hover
        background: rgb(205, 162, 116)
article
    margin-top: 200px
    h1
        color: rgb(41, 47, 54)
        font-family: DM Serif Display
        font-size: 50px
        font-weight: 400
        line-height: 125%
        letter-spacing: 2%
        text-align: left
.article-container
    column-count: 2
    margin-top: 61px
.article-container_flex__link
        display: flex
        justify-content: space-between
        align-items: center
        margin-top: 41px
        color: rgb(77, 80, 83)
        font-family: Jost
        font-size: 16px
        font-weight: 400
        line-height: 150%
        letter-spacing: 1%
        text-align: left
        text-transform: capitalize
.article-container_flex__section
    figure
        break-inside: avoid

    width: min-content
    padding: 21px
    p
        color: rgb(77, 80, 83)
        font-family: Jost
        font-size: 22px
        font-weight: 400
        line-height: 150%
        letter-spacing: 1%
        text-align: left
    .article-container_flex__link
        display: flex
        justify-content: space-between
        align-items: center
        margin-top: 41px
        color: rgb(77, 80, 83)
        font-family: Jost
        font-size: 16px
        font-weight: 400
        line-height: 150%
        letter-spacing: 1%
        text-align: left
        text-transform: capitalize
    .article-container_flex__link-text
        h3
            color: rgb(41, 47, 54)
            font-family: DM Serif Display
            font-size: 25px
            font-weight: 400
            line-height: 125%
            letter-spacing: 2%
            text-align: left
            margin: 0
            padding: 0
            padding-top: 28px
        p
            color: rgb(77, 80, 83)
            font-family: Jost
            font-size: 22px
            font-weight: 400
            line-height: 150%
            letter-spacing: 1%
            text-align: left
</style>
