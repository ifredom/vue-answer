<template>
    <section class="slidenav marginspace">
      <div class="nav-item" v-for="(item, index) in navs"  @click="activeItem" :key="index+'item'">
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
    navs: {
      type: Array,
      require: true
    },
    clickItem:{
      type:Function
    }
  },
  data() {
    return {};
  },
  methods:{
    activeItem(){
      if(this.clickItem&&this.clickItem instanceof Function){
        console.log("点击")
        this.clickItem.call(...this)
      }

    }
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
