<template>
    <section>
        <search></search>
        <!-- <swiper></swiper> -->
        <section class="container">
            <section class="card" v-for="(item,index) in cardList" :key="'card'+index">
                <figure class="card-title">
                    <div class="left">
                        <img src="./../../image/adavator/person1.png" width="32" height="32" />
                        <p>{{item.username}}</p>
                    </div>
                    <div class="right">...</div>
                </figure>
                <div class="card-content">
                    <span class="content-title"> {{item.conver}} </span>
                    <span class="content-detail">{{item.content}}
                    </span>
                </div>
                <figure class="card-option">
                    <div class="option-section option-section-left">   
                        <i class="icon iconfont icon-dianzan"></i>
                        <i class="icon iconfont icon-shoucang"></i>
                    </div>
                    <div class="option-section option-section-center">
                        <i class="icon iconfont icon-yaowan"></i>
                    </div>
                    <div class="option-section option-section-right">
                        <i class="icon iconfont icon-fenxiang"></i>
                    </div>
                </figure>
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
import { Login } from '@/api'

export default {
    data() {
        return {
            cardList: [
                { username: '傲慢的php', lang: 'PHP', conver: 'php为什么是世界上最好的语言？', content: '1995年6月8日，机智的小伙儿拉斯姆斯·勒多夫将PHP/FI公开发布，这位说：世界是PHP的.' },
                { username: '热闹的fd', lang: 'javascript', conver: '灵活又矫健的javascipt？', content: '1995年，当时在网景公司就职的布兰登·艾克花了10天时间写了这个编程语言，此时web开发者的内心是...' },
                { username: '冷静的java', lang: 'java', conver: '尔统统是rb', content: '且看下回分解了~~' },
            ]
        }
    },
    computed: {
        ...mapGetters([
            'logonState'
        ])
    },
    components: {
        search,
        swiper,
        vFooter
    }
}
</script>

<style scoped>
.container {
    padding: 0.5rem;
}

.card {
    margin-bottom: 0.5rem;
    padding: 0.2rem;
    border-radius: 0.6rem;
    border-left:thick solid #dedede;
    border-right:thick solid #dedede;
    /* border-bottom:thick solid #dedede; */
}

.card .card-title {
    display: flex;
    justify-content: space-between;
    text-align: center;
}

.card .card-title .left {
    display: flex;
    justify-content: space-between;
    text-align: center;
    align-items: center;
}

.card .card-title img {
    display: block;
    margin-right: 0.2rem;
}

.card .card-title p {
    font-size: 0.853rem;
    font-weight: bold;
    color: #333;
}

.card .content-lang {
    font-size: 0.853rem;
    color: red;
}

.card .content-title {
    font-size: 0.92rem;
    color: green;
}

.card .content-detail {
    font-size: 0.853rem;
    color: #222;
}
.card .card-option{
    display: flex;
    align-items: center;
    justify-content: space-between;

}
.card .card-option .icon{
    padding-left: 0.3rem;
    padding-right: 0.3rem;
    font-size: 1.1rem;
}
.card .option-section-left{
    display: flex;
    align-items: center;
    justify-content: space-between;
    width:20%;
}
</style>