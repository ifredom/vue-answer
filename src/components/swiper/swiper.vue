<template>
    <div class="banner">

        <mt-swipe :auto="4000">
          <mt-swipe-item>
            <img src="./../../image/banner/pic1.png" alt="轮播图">
          </mt-swipe-item>
          <mt-swipe-item>
            <img src="./../../image/banner/pic2.png" alt="轮播图">
          </mt-swipe-item>
          <mt-swipe-item>
            <img src="./../../image/banner/pic3.png" alt="轮播图">
          </mt-swipe-item>
          <mt-swipe-item>
            <img src="./../../image/banner/pic4.png" alt="轮播图">
          </mt-swipe-item>
        </mt-swipe>
    </div>
</template>
<script type="text/javascript">
import { Swipe, SwipeItem } from 'mint-ui';
export default{
    data() {
        return {

        }
    },
    components:{
      Swipe,
      SwipeItem
    }
}
</script>

<style scoped>
.banner{
  width: 100%;
  height: 120px;
}
.banner img{width: inherit}

</style>
