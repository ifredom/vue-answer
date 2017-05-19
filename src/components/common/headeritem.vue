<template>
  <div class="header-button" >
    <router-link class="ta-header-button" :class="positionClass" :to="toPath" >
      <img :src="imgUrl" alt="" />
    </router-link>
  </div>
</template>

<script type="text/javascript">

  export default {
    props:{
      path:'',
      position:'',
      titles:''
    },
    computed:{
      positionClass(){
      	return "ta-"+this.position
      },
      toPath(){
      	return {
      		path:this.path
        }
      },
      imgUrl(){//使用JS生成资源路径
        return "./static"+this.path+".png"
      }
    },
    methods:{
      back(){
        this.$router.go(-1)
      }
    },
    mounted:function(){
//    	console.log(this.path)
    }
  }
</script>

<style>


</style>
