<template>
  <div class="content">
    <h3>{{ textHead }}</h3>
    <p>{{ textDescr }}</p>
    <img src="@/assets/img/project_details_img.png" alt="kitchen" />
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  computed: {
    ...mapState(["textHead", "textDescr"]),
  },
};
</script>

<style lang="sass" scoped>
body
    padding: 0
    margin: 0
.content
    padding: 0 calc(50% - 600px)
    h3
        color: rgb(41, 47, 54)
        font-family: DM Serif Display
        font-size: 50px
        font-weight: 400
        line-height: 125%
        letter-spacing: 2%
        text-align: left
        margin-top: 200px
        margin-left: 271px
    p
        margin-top: 11px
        margin-left: 271px
        margin-right: 271px
        color: rgb(77, 80, 83)
        font-family: Jost
        font-size: 22px
        font-weight: 400
        line-height: 150%
        letter-spacing: 1%
        text-align: left
    img
        margin-top: 100px
</style>
