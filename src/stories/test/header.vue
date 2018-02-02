<template>
    <header class="ta-header" :class="{ 'ta-fixed': fixed,'otherStyle':otherStyle }">
        <div class="is-left" :class="positionClass">
            <span class="left-back1" @click="$router.back()" v-if=" back && (!otherStyle) "></span>
            <span class="left-back2" @click="$router.back()" v-else-if=" back && otherStyle "></span>
            <span class="left-back2" @click="closePage" v-else-if=" close && otherStyle "></span>
            <slot name="left" v-else></slot>
        </div>
        <div class="ta-header-text is-center">{{title}}</div>

        <div class="ta-right is-right">
            <slot name="right"></slot>
        </div>
    </header>
</template>
 <script>
import { MessageBox } from 'mint-ui';

export default {
  name: 'ta-header',
  props: {
    title: {
      default: '顶部标题',
      type: String
    },
    path: {
      type: String
    },
    position: {
      default: 'left',
      type: String
    },
    fixed: Boolean,
    back: Boolean,
    close: Boolean,
    otherStyle: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    positionClass() {
      return 'ta-' + this.position;
    }
  },
  methods: {
    closePage() {
      MessageBox.confirm('是否放弃当前操作?')
        .then(action => {
          if (action === 'confirm') {
            this.$router.go(-1);
          }
        })
        .catch(err => {});
    }
  }
};
</script>

<style scoped lang="stylus">
    a.ta-header
      display block;
      width inherit;
      height inherit;

    .ta-header
      position relative
      height 45px;
      width 100%;
      background-color #4976c9;
      box-shadow 0 0 0 0 #b2b2b2;
      text-align center;
      color #fff;
      -webkit-box-align  center;
      align-items  center;
      font-family PingFangSC-Light;


    .ta-header
      .is-right
        font-size: 0.853rem;
        color:#fff;
        text-align:right;
        align-items: center;

    .ta-header
      .ta-header-text
        font-size 1.066rem
        line-height 45px

    .ta-header.ta-fixed {
        top: 0;
        right: 0;
        left: 0;
        position: fixed;
        z-index: 1;
    }
    .ta-header.ta-fixed+* {
        padding-top: 2.4rem;
    }

    .ta-header .ta-header-button{
        position: absolute;
        padding: 0.3125rem;
        width: 1.3125rem;
        height: 1.3125rem;
        transition: opacity 0.3s;
        -webkit-transition: opacity 0.3s;
    }
    .ta-header .ta-header-button .icon{
        font-size: 1.2rem;
        line-height: 1.3125rem;
    }
    .ta-header .ta-left {
        position: absolute;
        bottom: 22.5px;
        left: .6875rem;
        transform: translate(0,50%);

    }
    .ta-header .ta-right {
        position: absolute;
        bottom: 22.5px;
        right: .6875rem;
        transform: translate(0,50%);
    }
    .ta-header .ta-back {
        position: absolute;
        bottom: 22.5px;
        left: .6875rem;
        transform: translate(0,50%);
        width: 1.1rem;
    }
    .ta-header .ta-left img,
    .ta-header .ta-right img,
    .ta-header .ta-back img{
        margin-top: -3px;
        width: 1.1rem;
        height: 100%;
        vertical-align: middle;

    }
    .ta-header .ta-left span{
        display: inline-block
        margin-top: -3px;
        width: 1.1rem;
        height: 1.1rem;
        vertical-align: middle;
    }
    .ta-header .ta-left span.left-back1{
        background: url('./../../image/common/back.png') no-repeat center;
        background-size: 1.1rem;
    }
    .ta-header .ta-left span.left-back2{
        background: url('./../../image/common/back2.png') no-repeat center;
        background-size: 1.1rem;
    }

    .ta-header.otherStyle{
        background-color: #fff;
        color:#333
    }
    .ta-header .is-right{
        color:#4976c9;
    }
</style>
