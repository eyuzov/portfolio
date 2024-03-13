
<template>
    <div>
        <div class="content">
        <h1>Page Not Found</h1>
        <h1>404</h1>
        </div>
    </div>
</template>

<script>



export default {
  name: 'AppArticle',
  components: {

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

</style>