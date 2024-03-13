<template>
    <div>
        <section class="counter">
      <div class="counter-flex">
        <h1>12</h1>
        <p>Years Of Experiance</p>
      </div>
      <div class="counter-flex">
        <h1>85</h1>
        <p>Success Project</p>
      </div>
      <div class="counter-flex">
        <h1>15</h1>
        <p>Active Project</p>
      </div>
      <div class="counter-flex">
        <h1>95</h1>
        <p>Happy CUstomers</p>
      </div>
    </section>
    </div>
</template>

<style lang="sass" scoped>
body
    padding: 0
    margin: 0
.content
    padding: 0 calc(50% - 600px)
.counter
    display: flex
    align-items: center
    text-align: center
    justify-content: center
    gap: 100px
    padding: 151px 0
    background: rgb(244, 240, 236)
    .counter-flex
        display: flex
        flex-direction: column
        align-items: center
    h1
        margin: 0
        color: rgb(205, 162, 116)
        font-family: DM Serif Display
        font-size: 85px
        font-weight: 400
        line-height: 125%
        letter-spacing: 2%
        text-align: left
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