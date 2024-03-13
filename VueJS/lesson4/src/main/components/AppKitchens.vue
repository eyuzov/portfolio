<template>
    <div>
        <div class="content">
            <section class="kitchens">
        <div class="kitchen-block">
          <img src="@/assets/img/kitchen1.png" alt="kitchen photo" />
          <div class="kitchen-block_text-button">
            <div class="kitchen-block_text-button__text">
              <h3>Modern Kitchan</h3>
              <h6>Decor / Artchitecture</h6>
            </div>
            <div class="kitchen-block_text-button__button">
              <a href="#"><img src="@/assets/img/arrow.png" alt="link" /></a>
            </div>
          </div>
        </div>
        <div class="kitchen-block">
          <img src="@/assets/img/kitchen2.png" alt="kitchen photo" />
          <div class="kitchen-block_text-button">
            <div class="kitchen-block_text-button__text">
              <h3>Modern Kitchan</h3>
              <h6>Decor / Artchitecture</h6>
            </div>
            <div class="kitchen-block_text-button__button">
              <a href="#"><img src="@/assets/img/arrow.png" alt="link" /></a>
            </div>
          </div>
        </div>
        <div class="kitchen-block">
          <img src="@/assets/img/kitchen3.png" alt="kitchen photo" />
          <div class="kitchen-block_text-button">
            <div class="kitchen-block_text-button__text">
              <h3>Modern Kitchan</h3>
              <h6>Decor / Artchitecture</h6>
            </div>
            <div class="kitchen-block_text-button__button">
              <a href="#"><img src="@/assets/img/arrow.png" alt="link" /></a>
            </div>
          </div>
        </div>
        <div class="kitchen-block">
          <img src="@/assets/img/kitchen4.png" alt="kitchen photo" />
          <div class="kitchen-block_text-button">
            <div class="kitchen-block_text-button__text">
              <h3>Modern Kitchan</h3>
              <h6>Decor / Artchitecture</h6>
            </div>
            <div class="kitchen-block_text-button__button">
              <a href="#"><img src="@/assets/img/arrow.png" alt="link" /></a>
            </div>
          </div>
        </div>
      </section></div>
    </div>
</template>
<style lang="sass" scoped>
body
    padding: 0
    margin: 0
.content
    padding: 0 calc(50% - 600px)
.kitchens
    margin-top: 93px
    display: flex
    flex-wrap: wrap
    justify-content: space-between
    .kitchen-block
        width: fit-content

    .kitchen-block_text-button
        margin-top: 24px
        display: flex
        justify-content: space-between
        .kitchen-block_text-button__text
            h3
                margin: 0
                color: rgb(41, 47, 54)
                font-family: DM Serif Display
                font-size: 25px
                font-weight: 400
                line-height: 125%
                letter-spacing: 2%
                text-align: left
            h6
                margin-top: 5px
                margin-bottom: 95px
                color: rgb(77, 80, 83)
                font-family: Jost
                font-size: 22px
                font-weight: 400
                line-height: 150%
                letter-spacing: 1%
                text-align: left
</style>