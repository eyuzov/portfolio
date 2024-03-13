<template>
  <div>
    <div class="content">
      <section class="article_aside">
        <article>
          <h1 class="article_title">Let’s Get Solution for Building Construction Work</h1>
          <img src="../../assets/img/kitchen_article.png" alt="kitchen photo" />
          <div class="date_nav">
            <div class="date">26 December,2022</div>
            <nav>
              <a href="#">Interior</a> / <a href="#">Home</a> /
              <a href="#">Decore</a>
            </nav>
          </div>
          <p>
            Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae
            turpmaximus.posuere in.Contrary to popular belief.There are many variations of
            passages of Lorem Ipsum available, but the majority have suffered alteration
            in some form, by injecthumour, or randomised words which don't look even
            slightly believable. Embarrassing hidden in the middle of text. All the Lorem
            Ipsum generators on the Internet tend to repeat predefined chunks as
            necessary.
          </p>
          <div id="app">
            <div>
              <div class="article-container">
                <div
                  v-for="item in article"
                  :key="item"
                  class="article-container_flex__section"
                >
                  <router-link to="blog_details">
                    <a href="blog_details"><img :src="item.imgUrl" alt="room image" /></a>
                  </router-link>
                  <h3>{{ item.title }}</h3>
                  <div class="article-container_flex__link">
                    <p>{{ item.date }}</p>
                    <img src="../../assets/img/arrow.png" alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </article>

        <aside>
          <h1 class="aside_title">Tags</h1>
          <div id="app_buttons">
            <button class="sort-button" @click="sort('kitchen')">Kitchen</button>
            <button class="sort-button" @click="sort('bedroom')">Bedroom</button>
            <button class="sort-button" @click="sort('building')">Building</button>
            <button class="sort-button" @click="sort('architecture')">
              Architecture
            </button>
            <button class="sort-button" @click="sort('kitchen_planning')">
              Kitchen Planning
            </button>
            <button class="sort-button" @click="sort('bedroom')">Bedroom</button>
            <button class="sort-button" @click="sort('*')">ALL</button>
          </div>
        </aside>
      </section>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      articleArr: [
        {
          imgUrl: require("@/assets/img/article_img1.png"),
          title: "1 Let’s Get Solution For Building Construction Work",
          date: "26 December,2022",
          tag: "kitchen",
        },
        {
          imgUrl: require("@/assets/img/article_img2.png"),
          title: "2 Let’s Get Solution For Building Construction Work",
          date: "26 December,2022",
          tag: "bedroom",
        },
        {
          imgUrl: require("@/assets/img/article_img3.png"),
          title: "3 Let’s Get Solution For Building Construction Work",
          date: "26 December,2022",
          tag: "kitchen",
        },
        {
          imgUrl: require("@/assets/img/article_img1.png"),
          title: "4 Let’s Get Solution For Building Construction Work",
          date: "26 December,2022",
          tag: "building",
        },
        {
          imgUrl: require("@/assets/img/article_img2.png"),
          title: "5 Let’s Get Solution For Building Construction Work",
          date: "26 December,2022",
          tag: "architecture",
        },
        {
          imgUrl: require("@/assets/img/article_img3.png"),
          title: "6 Let’s Get Solution For Building Construction Work",
          date: "26 December,2022",
          tag: "kitchen_planning",
        },
        {
          imgUrl: require("@/assets/img/article_img1.png"),
          title: "7 Let’s Get Solution For Building Construction Work",
          date: "26 December,2022",
          tag: "kitchen_planning",
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
.article_aside
    margin-top: 200px
    display: flex

.article_title
    color: rgb(41, 47, 54)
    font-family: DM Serif Display
    font-size: 50px
    font-weight: 400
    line-height: 125%
    letter-spacing: 2%
    text-align: left
    margin: 0
article
    img
        margin-top: 21px
    p
        display: flex
        width: 800px
        margin: 0
        margin-top: 48px
        color: rgb(77, 80, 83)
        font-family: Jost
        font-size: 22px
        font-weight: 400
        line-height: 150%
        letter-spacing: 1%
        text-align: left
.date_nav
    display: flex
    justify-content: space-between
    margin-top: 46px
    width: 800px
    .date
        color: rgb(77, 80, 83)
        font-family: Jost
        font-size: 16px
        font-weight: 400
        line-height: 150%
        letter-spacing: 1%
        text-align: left
        text-transform: capitalize
    nav
        a
            color: rgb(77, 80, 83)
            font-family: Jost
            font-size: 16px
            font-weight: 400
            line-height: 150%
            letter-spacing: 1%
            text-align: left
            text-transform: capitalize
            text-decoration: none

article
    img
        margin: 0
    p
        margin: 0

    h1
        color: rgb(41, 47, 54)
        font-family: DM Serif Display
        font-size: 50px
        font-weight: 400
        line-height: 125%
        letter-spacing: 2%
        text-align: left

.article-container
    display: flex
    justify-content: space-between
    gap: 20px
    flex-wrap: wrap
    width: 800px
    margin-top: 50px
.article-container_flex__section:hover
    background-color: #f4f0ec

.article-container_flex__section
    box-sizing: border-box
    border: 1px solid rgb(231, 231, 231)
    border-radius: 62px
    box-shadow: 0px 10px 30px 0px rgba(255, 255, 255, 0.25)

    width: 48%
    padding: 21px

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
    .article-container_flex

        box-sizing: border-box
        border: 1px solid rgb(231, 231, 231)
        border-radius: 62px
        box-shadow: 0px 10px 30px 0px rgba(255, 255, 255, 0.25)
        display: flex
        padding: 21px
aside
    margin-left: 52px
.aside_title
    color: rgb(41, 47, 54)
    font-family: DM Serif Display
    font-size: 25px
    font-weight: 400
    line-height: 125%
    letter-spacing: 2%
    text-align: left
    margin: 0
    margin-bottom: 24px

.sort-button
    padding: 9px 30px
    margin: 5px
    color: rgb(41, 47, 54)
    font-family: Jost
    font-size: 18px
    font-weight: 400
    line-height: 125%
    letter-spacing: 2%
    text-align: center
    border-radius: 10px
    background: rgb(244, 240, 236)
</style>
