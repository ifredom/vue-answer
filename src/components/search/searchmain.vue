<template>
  <div class="ta-container">
    <vHead fixed titles="搜索答案">
      <div class="ta-left" slot="back" @click="back">
        <span class="icon iconfont icon-back" ></span>
      </div>
    </vHead>
    <input type="text" class="ta-search-input" placeholder="搜索answer"  ref="searchui" v-model="context" @keyup="getData($event)" @keydown="changeIndex($event)" @focus="focusUI" @blur="blurUI">
    <ul v-show="tipsArr.length!=0">
      <li v-for="(value,index) in tipsArr">
        {{ value.title }}
      </li>
    </ul>
  </div>
</template>
<script type="text/ecmascript-6">
  import vHead from '@/components/common/header'

      export default {
          data() {
              return  {
                context:'',
                tipsArr:[]
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
          },
          mounted(){
              this.$http.jsonp('https://api.douban.com/v2/movie/top250?count=10', {}, {
                headers: {
                },
                emulateJSON: true
              }).then(function(response) {
                // 这里是处理正确的回调
                this.tipsArr = response.data.subjects
                console.log(response.data.subjects)

              },
              function(response) {
                // 这里是处理错误的回调
                console.log(response)
              });
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
    height: 40px;
    text-align: left;
    background-color: #fff;
    border-radius: 4px;
  }
  /*search*/
  .search-widget {
    font-size: 13px;
    width: 550px;
    margin: 10px 10px;
  }
  .search-widget * {
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  .search-widget .search-box {
    width: 100%;
    background: pink;
  }
  .search-widget .search-box:after {
    content: ".";
    display: block;
    height: 0;
    clear: both;
    visibility: hidden;
  }
  .search-widget .search-box input {
    outline: none;
    float: left;
    height: 35px;
  }
  .search-widget .search-box input[type="text"] {
    width: 80%;
    border: 1px solid #3a99ff;
    padding: 0 10px;
  }
  .search-widget .search-box input[type="submit"] {
    width: 20%;
    background: #3a99ff;
    color: white;
    border: none;
    cursor: pointer;
  }
  .search-widget ul {
    display: block;
    width: 80%;
    border: 1px solid #e6e6e6;
    border-top: none;
  }
  .search-widget ul li {
    display: block;
    padding: 0 10px;
    color: #666;
    line-height: 26px;
    cursor: pointer;
  }
  .search-widget p {
    color: #999;
    font-size: 15px;
    margin-top: 10px;
  }

</style>
