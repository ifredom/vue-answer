<template>
  <div class="ta-container">
    <vHead fixed titles="搜索答案">
      <div class="ta-left" slot="back" @click="back">
        <span class="icon iconfont icon-back" ></span>
      </div>
    </vHead>
    <input type="text" class="ta-search-input" placeholder="搜索answer"  ref="searchui" v-model="searchVal" @focus="focusUI" @blur="blurUI">
  </div>
</template>
<script type="text/ecmascript-6">
  import vHead from '@/components/common/header'
    export default {
        data() {
            return  {
              searchVal:''
            }
        },
        methods:{
            back(){
                this.$router.go(-1)
            },
            focusUI(){
                this.$refs.searchui.style.width="80%"
            },
            blurUI(){
              this.$refs.searchui.style.width="100%"
            }
        },
        components:{
          vHead
        }

    }
</script>
<style>
  body{background-color: #fff;box-sizing: border-box;}
  input.ta-search-input{
    display: block;
    position: relative;
    margin: 0 auto;
    padding-left: 10px;
    width: 100%;
    height: 42px;
    text-align: left;
    background-color: #fff;
    border-radius: 4px;
  }
</style>
