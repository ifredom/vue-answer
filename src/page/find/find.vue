<template>
  <div class="page">
    <swiper></swiper>
    <slidenav :navs="nav" :clickItem="clickItem" key='key1'></slidenav>
    <slidenav :navs="other_nav" :clickItem="clickOtherItem" key='key2'></slidenav>
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
      nav: [
        { imgpath: require('./../../image/adavator/person1.png'), title: '魅力城市榜' },
        { imgpath: require('./../../image/adavator/person2.png'), title: '游戏热度榜' },
        { imgpath: require('./../../image/adavator/person3.png'), title: '未来科技榜' },
        { imgpath: require('./../../image/adavator/person4.png'), title: '战争狂人榜' },
      ],
      other_nav: [
        { imgpath: require('./../../image/adavator/person2.png'), title: '中国热榜' },
        { imgpath: require('./../../image/adavator/person4.png'), title: '白皮热榜' },
        { imgpath: require('./../../image/adavator/person3.png'), title: '西藏阿里' },
        { imgpath: require('./../../image/adavator/person1.png'), title: '北京东城' },
      ]
    };
  },
  methods: {
    clickItem() {
      console.log('click itme')
    },
    clickOtherItem() {
      console.log('click other itme')
    }
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
    padding: 0.625rem;
  }

  .ta-padding-space {
    padding: 6px;
  }

  .ta-margin-space {
    margin: 6px;
  }
}
</style>
