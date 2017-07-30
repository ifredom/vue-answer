<template>
    <section>
        <search></search>
        <!--<swiper></swiper>-->
        <ul class="content">
            <li>掃一掃</li>
            <li>分享</li>
            <li></li>
        </ul>
        <v-footer></v-footer>
    </section>
</template>

<script>
  import { mapState,mapActions } from 'vuex'
  import Footer from '@/components/common/footer'
  import search from '@/components/search/search'
  import swiper from '@/components/swiper/swiper'

  import Scan from '@/apicloud/scan'

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
              loginCount: state=> state.loginCount
          }),
          components:{
              search,
              swiper,
              'v-footer' : Footer
          },
          methods:{

          },
          mounted(){
              console.log(this.$store.state.loginCount)
          }

      }
</script>

<style>
    .content{
        display:flex;
        justify-content: space-between;
        align-items: center;
    }
    .content li {
        width: 32%;
        height: 2.67rem;
        line-height: 2.67rem;
        background-color:#d1d1d1;
        align-items: center;
        text-align: center;
    }
</style>