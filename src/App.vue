<template>
  <div>
    <transition :name="transitionName">
        <router-view  class="child-view"></router-view>
    </transition>
    <comFoot v-if="isShowFooter"></comFoot>
  </div>
</template>

<script>
  import comFoot from "@/components/common/footer"
  export default {
      data(){
      	  return{
            transitionName: 'slide-left',
            isShowFooter:false
          }
      },
      beforeRouteUpdate (to, from, next) {
          let isBack = this.$router.isBack

          if(to.path=="/search"||to.path=="/login"){
          	this.isShowFooter = false
          }else{
            this.isShowFooter = true
          }

          if (isBack) {
              this.transitionName = 'slide-right'
          } else {
              this.transitionName = 'slide-left'
          }
          this.$router.isBack = false
          next()
      },
      components:{
        comFoot
      }
  }
</script>

<style>
  .child-view {
    position: absolute;
    width:100%;
    height: 100%;
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
