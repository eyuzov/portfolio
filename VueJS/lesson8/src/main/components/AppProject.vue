<template>
    <div>
        <div class="content">
            <div class="project">
        <h1 class="project-title">Follow Our Projects</h1>
        <p class="project-descr">
          It is a long established fact that a reader will be distracted by the
          of readable content of page lookings at its layouts points.
        </p>
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
.project
    display: flex
    flex-direction: column

    .project-title
        margin-top: 96px
        color: rgb(41, 47, 54)
        font-family: DM Serif Display
        font-size: 50px
        font-weight: 400
        line-height: 125%
        letter-spacing: 2%
        text-align: center
        padding-left: 345px
        padding-right: 345px
    .project-descr
        margin-top: 8px
        color: rgb(77, 80, 83)
        font-family: Jost
        font-size: 22px
        font-weight: 400
        line-height: 150%
        letter-spacing: 1%
        text-align: center
        padding-left: 164px
        padding-right: 164px
</style>