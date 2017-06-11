<template>
    <header class="ta-header" :class="{ 'ta-fixed': fixed }">
        <slot name="left">
        </slot>
        <span>{{titles}}</span>
        <slot name="right">
        </slot>
        <slot name="back">

        </slot>
    </header>
</template>
<script type="text/javascript">

  export default{
    props:{
      titles:{
          default: "答案",
          type: String
      },
      path:'',
      position:{
        default: "left",
        type: String
      },
      fixed: Boolean
    },
    computed:{
      positionClass(){
        return "ta-"+this.position
      },
      toPath(){
        return {
          path:this.path
        }
      }
    },
    mounted(){
//    	console.log(this.path)
    }
  }
</script>

<style>
  a.ta-header{display: block;width: inherit;height: inherit}
  .ta-header{
    position: relative;
    height: 2.8125rem;
    line-height: 2.8125rem;
    background-color: #8B814C;
    text-align: center;
    color:#fff;
  }
  .ta-header.ta-fixed {
    top: 0;
    right: 0;
    left: 0;
    position: fixed;
    z-index: 1;
  }
  .ta-header.ta-fixed+* {
    margin-top: 2.8125rem;
  }
  .ta-header-button{
    position: absolute;
    padding: 0.3125rem;
    width: 1.3125rem;
    height: 1.3125rem;
    transition: opacity 0.3s;
    -webkit-transition: opacity 0.3s;
  }
  .ta-header-button img{
    width: 1.5rem;
    width: 100%;
  }
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
