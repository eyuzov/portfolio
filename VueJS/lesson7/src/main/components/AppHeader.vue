<template>
    <div>
        <div class="content">
            <header>
        <div class="header-left">
          <img src="@/assets/img/Logo.svg" alt="" /><span>Interno</span>
        </div>
        <div class="header-right">
          <ul class="header-right__menu">
            <a href="index.html"><li>Home</li></a>
            <a href="project.html"><li>Project</li></a>
            <a href="blog.html"><li>Blog</li></a>
          </ul>
        </div>
      </header> </div>
    </div>
</template>
<style  scoped lang="sass">
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