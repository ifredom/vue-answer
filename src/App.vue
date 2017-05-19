<template>
        <router-view></router-view>
</template>

<script>
  import "./style/common.css"

  export default {
      data(){
      	  return{

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
//          console.log(to.path)
          next()
      },
      components:{

      }
  }
</script>

<style>
  .animtaion-fade-enter-active, .animtaion-fade-leave-active {
    transition: opacity .3s;
  }
  .animtaion-fade-enter, .animtaion-fade-leave-active {
    opacity: 0;
  }
  #app {
      font-family: 'Avenir', Helvetica, Arial, sans-serif;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      text-align: center;
      color: #2c3e50;
      font-size:15px;
  }
  .container{
    background-color: #efeff4;
  }

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
  /*.header {*/
    /*position:absolute;*/
    /*height:44px;*/
    /*background:inherit;*/
    /*width:100%*/
  /*}*/
</style>
