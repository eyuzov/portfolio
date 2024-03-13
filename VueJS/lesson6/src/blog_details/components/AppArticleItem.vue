<template>
    <div>
        <div class="article-container">
              <div v-for="item in article" :key="item" class="article-container_flex__section">
                <a href="blog_details.html"><img :src="item.imgUrl" alt="room image"/></a>
                <h3>{{ item.title }}</h3>
                <div class="article-container_flex__link">
                  <p>{{ item.date }}</p>
                  <img src="../../assets/img/arrow.png" alt="" />
                </div>
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
              imgUrl: "img/article_img1.png",
              title: "7 Let’s Get Solution For Building Construction Work",
              date: "26 December,2022",
              tag: "kitchen_planning",
            },
          ],
          tag: "*"
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
}
};
</script>

<style lang="sass" scoped>
body
    padding: 0
    margin: 0
.content
    padding: 0 calc(50% - 600px)

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
    display: flex
    justify-content: space-between
    gap: 20px
    flex-wrap: wrap

.article-container_flex__section:hover
    background-color: #f4f0ec
    
.article-container_flex

    box-sizing: border-box
    border: 1px solid rgb(231, 231, 231)
    border-radius: 62px
    box-shadow: 0px 10px 30px 0px rgba(255, 255, 255, 0.25)
    display: flex
    padding: 21px
    .article-container_flex__wrap
        margin: 52px 34px 52px 65px
    .article-container_flex__text
        display: flex
        flex-direction: column
        h3
            color: rgb(41, 47, 54)
            font-family: DM Serif Display
            font-size: 25px
            font-weight: 400
            line-height: 125%
            letter-spacing: 2%
            text-align: left
            margin: 0
        p
            color: rgb(77, 80, 83)
            font-family: Jost
            font-size: 22px
            font-weight: 400
            line-height: 150%
            letter-spacing: 1%
            text-align: left
            margin: 0
            margin-top: 22px
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
    box-sizing: border-box
    border: 1px solid rgb(231, 231, 231)
    border-radius: 62px
    box-shadow: 0px 10px 30px 0px rgba(255, 255, 255, 0.25)

    width: min-content
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
</style>