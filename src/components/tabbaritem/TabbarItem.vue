<template>
  <div class="tabbar-box">
    <router-link class="tabbar-item" :to="{path:path }" >
      <!--<img class="icon" :class="iconClass" :src="iconImgUrl">    &lt;!&ndash;正常了&ndash;&gt;-->
      <!--<img class="icon" :class="iconClass" src="./../../image/home.png"> &lt;!&ndash;正常&ndash;&gt;-->
      <!--使用字体图标 ：before-->
      <span class="icon iconfont" :class="iconClass"></span>
      <span slot="back" @click="back">{{label}}</span>
    </router-link>
  </div>
</template>
<script type="text/ecmascript-6">
  let imgUrl = require('./../../image/home.png')
  export default {
    props:{
      path:'',
      icon:'',
      label:''
    },
    computed: {
      iconClass () {
        return "icon-"+this.icon
      },
      iconImgUrl(){//使用JS生成资源路径
      	return "static/"+this.icon+".png"
      }
    }

  }
</script>
<style>
  .ta-left {
    position: absolute;
    bottom: 50%;
    left: .6875rem;
    transform: translate(0,50%);
  }
  .ta-right {
    position: absolute;
    bottom: 50%;
    right: .6875rem;
    transform: translate(0,50%);
  }
  .ta-back {
    position: absolute;
    bottom: 50%;
    left: .6875rem;
    transform: translate(0,50%);
  }
</style>
