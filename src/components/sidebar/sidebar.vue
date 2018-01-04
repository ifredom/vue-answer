<template>
  <transition :name="tansitionName">
    <div class="sidebar" v-show="showSidebar">
      <section class="sidebar-content">
        <section class="head">
          <div class="avatar">
            <img src="https://dn-mhke0kuv.qbox.me/51ec2dae1418f9c88443.png?imageView2/1/w/100/h/100/q/85/interlace/1"
                 alt="">
            <div class="rzstatus" @click="toPage">
              <img src="../../image/adavator/person1.png" alt="">
            </div>
          </div>
          <div class="username">糖果名：{{username}}</div>
        </section>

        <ul class="menu">
          <mt-cell  @click="hideSidebar" title="我"  to="">
            <img slot="icon" src="../../image/adavator/person1.png" width="24" height="24">
          </mt-cell>
          <mt-cell  @click="hideSidebar" title="缘由边界" to="">
            <img slot="icon" src="../../image/adavator/person2.png" width="24" height="24">
          </mt-cell>
          <mt-cell  @click="hideSidebar" title="爱的深呼吸" to="">
            <img slot="icon" src="../../image/adavator/person3.png" width="24" height="24">
          </mt-cell>
          <mt-cell  @click="hideSidebar" title="定制" to="">
            <img slot="icon" src="../../image/adavator/person4.png" width="24" height="24">
          </mt-cell>
          <mt-cell  @click="signout" title="退出登录" to="">
            <img slot="icon" src="../../image/adavator/person5.png" width="24" height="24">
          </mt-cell>
        </ul>
      </section>

      <section class="sidebar_mask"
         v-show="hideSidebar"
         @click="hideSidebar">
      </section>

    </div>
  </transition>
</template>

<script>

import { mapGetters } from 'vuex'
import { Popup,Cell } from 'mint-ui';

export default {
  props:{
    tansitionName:{
      type:String,
      default:'fade'
    }
  },
  data() {
    return {
      bianhao:'100001',
      username:'ifredom'
    }
  },
  methods: {
    hideSidebar() {
      this.$store.dispatch('setShowSidebar', false)
    },
    toPage(){
      this.$router.push({path:'/xxxx'})
    },
    signout(){
      this.$router.push({path:'/login'})
    }
  },
  computed: {
    ...mapGetters([
      'showSidebar'
    ]),
  },
  components:{
    'mt-cell': Cell
  }
}
</script>

<style scoped lang="stylus">
  // .fade-enter-active, .fade-leave-active
  //   transition: opacity .5s;
  // .fade-enter, .fade-leave-active
  //   opacity: 0;

  .fade-enter-active,
  .fade-leave-active {
    transition: all 0.5s;
  }
  .fade-enter,
  .fade-leave-active {
    transform: translate3d(-100%, 0, 0);
  }

  .sidebar
    position :absolute;
    left:0;
    top:0;
    width :100%;
    height :100%;
    overflow :hidden;
    z-index :100;
    .sidebar-content
      position: fixed;
      background: #fff;
      top: 0;
      left: 0;
      width: 85%;
      height :100%;
      background-color: #fff;
      color: #000;
      .head
        padding-bottom : 1.12rem;
        text-align :center
        font-family:PingFangSC-Regular;
        font-size:14px;
        color:#333333;
        letter-spacing:0;
        .avatar
          position :relative;
          margin: 2.13rem auto 0.48rem auto;
          background:#f2e9d6;
          border:1px solid #e2e2e2;
          width:4.213rem;
          height:4.213rem;
          border-radius:100%;
          >img
            width:100%;
            height :100%;
          .rzstatus
            position :absolute;
            bottom:0;
            right:-0.693rem;
            width :3.2rem;
            height:1.12rem;
            transform :translate(100%,0)
            img
              height :100%;
        .username
          font-size :0.64rem;
      .mint-cell:last-child
        background-image :none;
    .sidebar_mask
      position: fixed;
      top: 0;
      right: 0;
      width: 15%;
      height: 100%;
      margin: 0 auto;
      z-index: 100;
      background-color: rgba(0, 0, 0, .5);
    .menu
      .mint-cell-title
        img
          width :1.06rem;
          height :1.06rem;
          margin-left : 0.8rem;
          margin-right : 0.746rem;


</style>
