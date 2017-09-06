<template>
    <section>
        <search></search>
        <!-- <swiper></swiper> -->
        <section class="container">
            <section class="card" v-for="(item,index) in cardList" :key="'card'+index">
                <figure class="card-title">
                    <div class="left">
                        <img src="./../../image/adavator/person1.png" width="32" height="32" />
                        <p>{{item.user}}</p>
                    </div>
                    <div class="right">...</div>
                </figure>
                <div class="card-content">
                    <span class="content-title">{{item.conver}}</span>
                    <span class="content-detail">{{item.content}}
                    </span>
                </div>
            </section>
        </section>
        <v-footer></v-footer>
    </section>
</template>

<script>
import axios from 'axios'
import { mapGetters, mapActions } from 'vuex'
import vFooter from '@/components/common/footer'
import search from '@/components/search/search'
import swiper from '@/components/swiper/swiper'
import {Login} from '@/api'

export default {
    data() {
        return {
            cardList:[
                {user:'诺兰死忠',conver:'#敦刻尔克#',content:'1940年5月25日，英法联军防线在德国机械化部队的快速攻势下崩溃之后，英军在敦刻尔克这个位于法国东北部、靠近比利时边境的港口小城进行了当时历史上最大规模的军事撤退行动。'},
                {user:'忧伤的提莫',conver:'#蔡英文被讽“关狗笼”#',content:'据台湾“中时电子报”4日报道，蔡英文号称台当局“最会沟通”，但昨日主持秋祭典礼时，当地警方却为了避免抗议团体扰乱秩序，在现场搭起约3米高的栅栏，上面贴着“意见表达区”字样，遭现场媒体戏称为“猛兽动物区”。'}
            ]
        }
    },
    computed:{
        ...mapGetters([
			'logonState'
		])
    },
    components: {
        search,
        swiper,
        vFooter
    },
    methods: {

    },
    mounted() {
        console.log(this.$store.state.logonState)
    }

}
</script>

<style scoped>
    .container{
        padding:0.5rem;
    }
    .card{
        margin-bottom:0.5rem;
        background-color:#FFEC8B
    }
    .card .card-title{
        display:flex;
        justify-content:space-between;
        text-align:center;
        background-color:#FFFFE0; 
    }
    .card .card-content{
         background-color:#FFFAF0; 
    }
    .card .card-title .left{
        display:flex;
        justify-content:space-between;
        text-align:center;
        align-items: center;
    }
    .card .card-title img{
        display:block;
        margin-right:0.2rem;
    }
    .card .card-title p{
        font-size:0.853rem;
    }

    .card .card-content .content-title{
        font-size:0.853rem;
        color:green;
    }
    .card .card-content .content-detail{
        font-size:0.853rem;
        color:#333;
    }
</style>