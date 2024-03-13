<template>
    <div>
        <div class="banner">
      <div class="content">
        <div class="banner-text">
          <h2>Articles & News</h2>
          <p>Home / Blog</p>
        </div>
      </div>
    </div>
    </div>
</template>


<style lang="sass" scoped>
body
    padding: 0
    margin: 0
.content
    padding: 0 calc(50% - 600px)
.banner
    background: url("@/assets/img/banner_project_page.png")
    background-size: cover
    height: 356px
    margin-top: 45px
    .banner-text
        background-color: white
        top: 178px
        position: relative
        padding: 41px
        display: flex
        flex-direction: column
        width: -moz-fit-content
        width: fit-content
        left: 349px
        align-items: center
        border-radius: 37px 37px 0px 0px
        background: rgb(255, 255, 255)
        h2
            color: rgb(41, 47, 54)
            font-family: DM Serif Display
            font-size: 50px
            font-weight: 400
            line-height: 125%
            letter-spacing: 0%
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
</style>