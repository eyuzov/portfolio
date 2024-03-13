Vue.component("shop-item", {
  props: [],
  data() {
    return {};
  },
  template: `
  <div class="article-container">
  <div
    v-for="item in $parent.article"
    :key="index"
    class="article-container_flex__section"
  >
    <img :src="item.imgUrl" alt="room image" />
    <h3>{{ item.title }}</h3>
    <div class="article-container_flex__link">
      <p>{{ item.date }}</p>
      <img src="img/arrow.png" alt="" />
    </div>
  </div>
</div>
                `,
});
