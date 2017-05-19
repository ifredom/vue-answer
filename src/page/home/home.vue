
<template>
    <section>
        <headBar titles="早读课" path="['/addperson']" >
          <headitem  slot="left" path="/addperson"  position="left"></headitem>
          <headitem  slot="right" path="/message"  position="right"></headitem>
        </headBar>

          <swiper></swiper>

          <div class="view-cell">
            <a class="navigate-right"><img src="../../image/adavator/person1.png">关注</a>
          </div>

          <ul class="ta-list count">
            <li class="ta-row" >
              <div class="ta-row-body">
                <div class="title">关心我：<span v-text="hc_all"></span></div>
                <div class="info">
                  <div class="normal"><span v-text="hc_zc"></span><span>获赞</span></div>
                  <div class="notice"><span v-text="hc_gz"></span><span>被关注</span></div>
                </div>
              </div>
            </li>
            <li class="ta-row">
              <div class="ta-row-body">
                <div class="title">7日近况：<span v-text="hc7_all"></span></div>
                <div class="info">
                  <div class="normal"><span v-text="hc7_zc"></span><span>获赞</span></div>
                  <div class="notice"><span v-text="hc7_gz"></span><span>被关注</span></div>
                </div>
              </div>
            </li>
          </ul>

          <section class="infolist">
            <p>最新动态</p>
            <div class="getresult noresult">
              暂无记录  [页面登录了-{{count}}次]
            </div>
          </section>

        <vFoot></vFoot>

    </section>
</template>

<script>
  import { mapState,mapActions } from 'vuex'

import headBar from "@/components/common/header"
import headitem from "@/components/common/headeritem"
import vFoot from "@/components/common/footer"
import swiper from '@/components/swiper'


    export default {
        data() {
            return {
                isIndex : true,
                hc_gz:0,
                hc_zc:0,
                hc_all:0,
                hc7_gz:0,
                hc7_zc:0,
                hc7_all:0,
                earliestResult:false
            }
        },
        computed:mapState({
            count: state=> state.count,
            selfcount () {
              return this.$store.state.count
            }
        }),
        components:{
            swiper,
            headBar,
            headitem,
             vFoot
        },
        methods:{

        },
        mounted(){
            console.log(this.$store.state.count)
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
  .getresult{padding: 15px;}

</style>
