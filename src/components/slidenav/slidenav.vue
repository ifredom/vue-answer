<template>
    <section class="slidenav marginspace">
      <div class="nav-item" v-for="(item, index) in slideitem" :key="index+'item'">
        <a href="">
          <img :src="item.imgpath" width="36" height="36" />
          <span v-text="item.title">小众趣闻榜</span>
        </a>
      </div>
    </section>
</template>
<script type="text/javascript">

export default {
  props: {
    slideitem: {
      type: Array,
      require: true
    }
  },
  data() {
    return {};
  }
};
</script>

<style scoped>
.slidenav {
  display: flex;
  justify-content: space-around;
}
.slidenav.marginspace {
  margin-top: 0.8rem;
  margin-bottom: 0.8rem;
}
.slidenav .nav-item a {
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 0.8rem;
  font-style: normal;
}
.slidenav .nav-item a img {
  margin-bottom: 0.3rem;
}
</style>
