<template>
  <div>
        <!--转场动画，打开即可-->
          <transition :name="transitionName">
            <router-view class="child-view"></router-view>
          </transition>
  </div>
</template>

<script>
  import vHead from '../components/common/header'
  import vHeaditem from '../components/common/headeritem'
  import vFoot from "@/components/common/footer"

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
//      console.log(to.path)
      this.toPath = to.path
      this.formPath = from.path
      next()
    },
    computed:{
      _title(){
        let to ='';
        switch(this.toPath){
          case'/':
            to = '实名盾管理版';
            break;
          case'/home':
            to = '实名盾管理版';
            break;
          case'/person':
            to = '人员';
            break;
          case'/my':
            to = '我的';
            break;
          default:
            to = '实名盾管理版';
            break;
        }
        return  to
      }
    },
    components:{
      vHead,
      vHeaditem,
      vFoot
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
  .header {
    position:absolute;
    height:44px;
    background:inherit;
    width:100%
  }
</style>
