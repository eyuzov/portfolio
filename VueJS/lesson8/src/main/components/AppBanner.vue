<template>
    <div>
        <div class="content">
            <div class="banner">
        <h1 class="banner-title">Let Your Home Be Unique</h1>
        <p class="banner-descr">
          There are many variations of the passages of lorem Ipsum
          fromavailable, majority.
        </p>
        <a href="#">Get Started</a>
      </div></div>
    </div>
</template>

<style lang="sass" scoped>
body
    padding: 0
    margin: 0
.content
    padding: 0 calc(50% - 600px)
.banner
    background-image: url("@/assets/img/banner.png")
    height: 757px
    margin-top: 53px

    .banner-title
        padding-top: 208px
        padding-left: 52px
        width: 500px
        color: rgb(41, 47, 54)
        font-family: DM Serif Display
        font-size: 65px
        font-weight: 400
        line-height: 125%
        letter-spacing: 0%
        text-align: left
    .banner-descr
        width: 500px
        margin-top: 20px
        margin-bottom: 20px
        padding-left: 52px
        color: rgb(77, 80, 83)
        font-family: Jost
        font-size: 22px
        font-weight: 400
        line-height: 150%
        letter-spacing: 1%
        text-align: left
    a
        display: flex
        width: fit-content
        margin-top: 20px
        margin-left: 52px
        padding: 26px 49px
        border-radius: 18px
        box-shadow: 0px 10px 20px 0px rgba(192, 192, 192, 0.35)
        background: rgb(41, 47, 54)
        color: rgb(255, 255, 255)
        font-family: Jost
        font-size: 18px
        font-weight: 600
        line-height: 125%
        letter-spacing: 2%
        text-align: center
        text-decoration: none
</style>