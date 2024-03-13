<template>
    <div>
        <div class="content">
            <footer>
        <div class="footer_title">
          <div class="footer_title-wrap">
            <img src="../../assets/img/Logo.svg" alt="logo" />
            <h2>Interno</h2>
          </div>
          <p>
            It is a long established fact that a reader will be distracted
            lookings.
          </p>
        </div>
        <div class="footer_menu">
          <h3>Pages</h3>
          <ul>
            <li>Home</li>
            <li>Projects</li>
            <li>Blog</li>
          </ul>
        </div>
        <div class="footer_contacts">
          <h3>Contact</h3>
          <p>
            55 East Birchwood Ave. Brooklyn, New York 11201 contact@interno.com
            (123) 456 - 7890
          </p>
        </div>
      </footer></div>
    </div>
</template>

<style lang="sass" scoped>
body
    padding: 0
    margin: 0
.content
    padding: 0 calc(50% - 600px)


footer
    margin-top: 96px
    display: flex
    justify-content: space-between
    gap: 300px
    .footer_title
        margin-top: -20px
    h2
        color: rgb(41, 47, 54)
        font-family: DM Serif Display
        font-size: 40px
        font-weight: 400
        line-height: 125%
        letter-spacing: 0%
        text-align: left
    h3
        color: rgb(41, 47, 54)
        font-family: DM Serif Display
        font-size: 25px
        font-weight: 400
        line-height: 125%
        letter-spacing: 0%
        text-align: left
    p
        color: rgb(77, 80, 83)
        font-family: Jost
        font-size: 22px
        font-weight: 400
        line-height: 300%
        letter-spacing: 1%
        text-align: left
    .footer_title-wrap
        display: flex
    .footer_menu
        ul
            padding-left: 0px
        li
            list-style-type: none
            color: rgb(77, 80, 83)
            font-family: Jost
            font-size: 22px
            font-weight: 400
            line-height: 300%
            letter-spacing: 1%
            text-align: left

</style>