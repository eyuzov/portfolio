
<template>
    <div>
        <div class="content">
            <article>
        <h1>Latest Post</h1>
        <div class="article-container_flex">
          <img src="../../assets/img/article_banner.png" alt="kitchen" />
          <div class="article-container_flex__wrap">
            <div class="article-container_flex__text">
              <h3>Low Cost Latest Invented Interior Designing Ideas</h3>
              <p>
                Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae
                turpis dignissim maximus.posuere in. Contrary to popular belief.
                Lorem Ipsum is not simply random text. It has roots in a piece
                of classica.
              </p>
            </div>
            <div class="article-container_flex__link">
              <p>26 December,2022</p>
              <img src="../../assets/img/arrow.png" alt="" />
                </div>
          </div>
        </div>
        <section>
          <h1>Articles & News</h1>
          <div id="app">
            <div>
              <AppArticleItem />
            </div>
          </div>
        </section>
        <div class="pagination">
          <a href="#">01</a>
          <a href="#">02</a>
          <a href="#">03</a>
          <a href="#">></a>
        </div>
      </article></div>
    </div>
</template>

<script>
import AppArticleItem from "./AppArticleItem.vue"

export default {
  name: 'AppArticle',
  components: {
    AppArticleItem
  }
}
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
.pagination
    margin-top: 50px
    margin-bottom: 200px
    display: flex
    justify-content: center
    gap: 20px
    a
        color: rgb(41, 47, 54)
        font-family: Jost
        font-size: 16px
        font-weight: 500
        line-height: 150%
        letter-spacing: 0%
        text-align: left
        text-transform: capitalize
        box-sizing: border-box
        border: 1px solid rgb(205, 162, 116)
        border-radius: 50%
        padding: 14px
        text-decoration: none
</style>