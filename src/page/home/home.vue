
<template>
    <section>
        <search></search>
        <swiper></swiper>

          <ul class="ta-list count">
            <li class="ta-row" >
              <div class="ta-row-body">
                <div class="title">关心我：<span v-text="countLis.careCount"></span></div>
                <div class="info">
                  <div class="normal"><span v-text="countLis.praiseCount"></span><span>获赞</span></div>
                  <div class="notice"><span v-text="countLis.confessionCount"></span><span>被表白</span></div>
                </div>
              </div>
            </li>
            <li class="ta-row">
              <div class="ta-row-body">
                <div class="title">讨厌我：<span v-text="countLis.hateCount"></span></div>
                <div class="info">
                  <div class="normal"><span v-text="countLis.knockHammerCount"></span><span>敲一榔头</span></div>
                  <div class="notice"><span v-text="countLis.hitfaceCount"></span><span>摔屎砸脸</span></div>
                </div>
              </div>
            </li>
          </ul>

          <section class="infolist">
            <p>大家都在搜什么？</p>
            <div class="getresult noresult">
              <ul>
                <li>一念成沧海，一念化桑田。一念斩千魔，一念诛万仙。唯我念……永恒?  [已阅读次数{{loginCount}}次]</li>
                <li>在破败中崛起，在寂灭中复苏。沧海成尘，雷电枯竭，那一缕幽雾又一次临近大地，世间的枷锁被打开了，一个全新的世界就此揭开神秘的一角……</li>
                <li>荣耀新开的第十区重新投入了游戏，带着对往昔的回忆，和一把未完成的自制武器，开始了重返巅峰之路。</li>
              </ul>
            </div>
          </section>
    </section>
</template>

<script>
  import { mapState,mapActions } from 'vuex'

  import headBar from "@/components/common/header"
  import headitem from "@/components/common/headeritem"
  import search from '@/components/search/search'
  import swiper from '@/components/swiper'

      export default {
          data() {
              return {
                  isIndex : true,
                  countLis:{
                    careCount:0,
                    praiseCount:2,
                    confessionCount:3,
                    hitfaceCount:4,
                    knockHammerCount:0,
                    hateCount:0,
                  },

                  earliestResult:false
              }
          },
          computed:mapState({
              loginCount: state=> state.loginCount,
              loginTitle: state=> state.title,
          }),
          components:{
              search,
              swiper,
              headBar,
              headitem
          },
          methods:{

          },
          mounted(){
              console.log(this.$store.state.loginCount)
          }

      }
</script>

<style>
    .view-cell{background-color: #fff;}
    .view-cell{
        margin-top:10px;
        margin-bottom:10px;
        text-align: left;
    }
    .view-cell a{
        height: 3.75rem;
        line-height: 3.75rem;
    }
    .view-cell a img{
        display: inline-block;
        width: 2.5em;
        vertical-align: middle;
        margin-right: 0.875rem;
        margin-left: 0.75rem;
    }
    .count{width:100%;background:#fff;padding: 0}
    .count .ta-row{width:49.2%;display:inline-block;}
    .count .mui-table-view:after{background-color:#d9d9d9;}
    .count .mui-table-view{
      margin-before: 0;
      -webkit-margin-before: 0;
      margin-after: 0;
      -webkit-margin-after: 0;
    }
    .count .ta-row:after{background-color: inherit;}
    .count .ta-row-body{margin:auto;padding: 1em .4em;}
    .count .ta-row-body .title{margin-bottom:1.46rem;text-align: center;}
    .count .ta-row-body .info:after{display:block;content:'';clear:both;}
    .count .ta-row-body .info span{display:block;}
    .count .ta-row-body .info .normal{float:left;text-align: center;width:49.5%;color:#43b5b4;}
    .count .ta-row-body .info .notice{float:left;text-align: center;width:49.5%;color:#ff8a00;}

    .infolist {
      background-color: #fff;
      margin-top: 0.67rem;
      overflow-y: auto;
    }
    .infolist>p {
      margin-bottom: 0;
      padding: 0.5rem 0 0.5rem 0.67rem;
      text-align: left;
      font-size: 15px;
      color: #343434;
    }
    .infolist .noresult{
      padding-bottom: 15px;
    }
    .infolist ul li{
      margin-bottom:3px;
    }
    .infolist ul li:nth-of-type(2n+1){
      color: orange;
    }
    .infolist ul li:nth-of-type(2n){
      color: pink;
    }
    .getresult{padding: 15px;}

</style>
