<template>
  <div class="page">
    <swiper></swiper>
    <slidenav :slideitem="navitem" key='key1'></slidenav>
    <slidenav :slideitem="navitemother" key='key2'></slidenav>
    <router-link class="red" to="/exam">【考题系统】</router-link>

    <p class="ta-padding-space ta-margin-space ps-info">Answer始终定位为发掘更有价值的信息</p>
    <p class="ta-padding-space ta-margin-space ps-info">发现页面定位为寻找有趣内容榜单</p>
    <v-footer></v-footer>
  </div>
</template>

<script type="text/ecmascript-6">
import slidenav from "@/components/slidenav/slidenav";
import swiper from "@/components/swiper/swiper";
import vFooter from "@/components/common/footer";
export default {
  data() {
    return {
      navitem: [
        { imgpath: require('./../../image/adavator/person1.png'), title: '小众趣闻榜' },
        { imgpath: require('./../../image/adavator/person2.png'), title: '游戏热度榜' },
        { imgpath: require('./../../image/adavator/person3.png'), title: '未来科技榜' },
        { imgpath: require('./../../image/adavator/person4.png'), title: '战争狂人榜' },
      ],
      navitemother: [
        { imgpath: require('./../../image/adavator/person2.png'), title: '中国热榜' },
        { imgpath: require('./../../image/adavator/person4.png'), title: '白皮热榜' },
        { imgpath: require('./../../image/adavator/person3.png'), title: '西藏阿里' },
        { imgpath: require('./../../image/adavator/person1.png'), title: '北京东城' },
      ]
    };
  },
  components: {
    swiper,
    slidenav,
    vFooter
  }
};
</script>

<style scoped lang="stylus">
.page {
  background-color: rgba(210, 184, 151, 0.3);

  .red {
    padding 0.625rem;
  }
}
</style>
