<template>
  <div class="ta-container">
    <div class="ta-input clearfix">
    <button class="back-button" @click="back">
      <img src="../../image/common/back2.png" alt="">
    </button>
    <input type="text" class="ta-search-input" placeholder="搜索answer" ref="searchui" v-model="context" @keyup="getData($event)" @keydown="changeIndex($event)">
    </div>
    <ul class="search-content" v-show="tipsArr.length!=0">
      <li v-for="(value,index) in tipsArr" :key="'serch'+index">
        {{ value.title }}
      </li>
    </ul>
  </div>
</template>
<script type="text/ecmascript-6">
import vHeader from '@/components/common/header';
import { doubanSeach } from '@/api';
export default {
    name: 'searchdetail',
    data() {
        return {
            context: '',
            tipsArr: []
        };
    },
    methods: {
        initData() {
            var params = {
                count: 10
            };
            doubanSeach(params).then(ret => {
                console.log(ret);
                // 这里是处理正确的回调
                this.tipsArr = ret.subjects;
            });
        },
        back() {
            this.$router.go(-1);
        },
        getData(e){
          console.log(e)
        }
    },
    components: {
        vHeader
    },
    mounted() {
      this.initData()
    }
};
</script>
<style scoped>
.ta-container {
    background-color: #fff;
    box-sizing: border-box;
    padding: 10px;
}
input.ta-search-input {
    display: block;
    float: left;
    position: relative;
    margin: 0 auto;
    padding-left: 10px;
    width: 80%;
    height: 40px;
    text-align: left;
    background-color: orange;
    border-radius: 4px;
    transition: all 0.6;
}
.back-button{
  float: left;
  margin-right: 8px;
  width: 40px;
  height: 40px;
  border: none;
  background: url() no-repeat 50% 50%
}
.back-button img{
  width: 100%;
  height: 100%;

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
    content: '.';
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
.search-widget .search-box input[type='text'] {
    width: 80%;
    border: 1px solid #3a99ff;
    padding: 0 10px;
}
.search-widget .search-box input[type='submit'] {
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
.search-content {
    padding: 0.5rem;
}
.search-content li {
    line-height: 1.2rem;
    height: 1.2rem;
    padding: 0.2rem 0;
    color: orange;
}
</style>
