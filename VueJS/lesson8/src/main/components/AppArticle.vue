<template>
    <div>
        <div class="content">
            <div class="articles">
        <div class="article-container">
          <div class="article-container_flex">
            <img src="@/assets/img/article_img1.png" alt="" />
            <h3>Let’s Get Solution For Building Construction Work</h3>
            <div class="article-container_flex__link">
              <p>26 December,2022</p>
              <img src="@/assets/img/arrow.png" alt="" />
            </div>
          </div>
          <div class="article-container_flex">
            <img src="@/assets/img/article_img2.png" alt="" />
            <h3>Let’s Get Solution For Building Construction Work</h3>
            <div class="article-container_flex__link">
              <p>26 December,2022</p>
              <img src="@/assets/img/arrow.png" alt="" />
            </div>
          </div>
          <div class="article-container_flex">
            <img src="@/assets/img/article_img3.png" alt="" />
            <h3>Let’s Get Solution For Building Construction Work</h3>
            <div class="article-container_flex__link">
              <p>26 December,2022</p>
              <img src="@/assets/img/arrow.png" alt="" />
            </div>
          </div>
        </div>
      </div></div>
    </div>
</template>

<style lang="sass" scoped>
body
    padding: 0
    margin: 0
.content
    padding: 0 calc(50% - 600px)
.article-container
    margin-top: 52px
    display: flex
    justify-content: space-between

.article-container_flex

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

</style>