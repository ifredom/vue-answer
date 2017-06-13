<template>
  <div>
        <!--转场动画，打开即可-->
          <transition :name="transitionName">
            <router-view class="child-view"></router-view>
          </transition>
          <comFoot></comFoot>
  </div>
</template>

<script>
  import comFoot from "@/components/common/footer"

  export default {
    data () {
      return {
        transitionName: 'slide-left',
        toPath:'',
        formPath:''
      }
    },
    beforeRouteUpdate (to, from, next) {
      let isBack = this.$router.isBack
      if (isBack) {
        this.transitionName = 'slide-right'
      } else {
        this.transitionName = 'slide-left'
      }
      this.$router.isBack = false
      this.toPath = to.path
      this.formPath = from.path
      next()
    },
    components:{
      comFoot
    }
  }
</script>

<style scoped>
  .child-view {
    position: absolute;
    width:100%;
    transition: all .8s cubic-bezier(.55,0,.1,1);
  }
  .slide-left-enter, .slide-right-leave-active {
    opacity: 0;
    -webkit-transform: translate(50px, 0);
    transform: translate(50px, 0);
  }
  .slide-left-leave-active, .slide-right-enter {
    opacity: 0;
    -webkit-transform: translate(-50px, 0);
    transform: translate(-50px, 0);
  }
</style>
