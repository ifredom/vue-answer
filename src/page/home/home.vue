<template>
    <section>
        <ta-search></ta-search>
        <section class="container">
            <section class="card" v-for="(item,index) in cardList" :key="'card'+index">
                <figure class="card-title">
                    <div class="left">
                        <p>{{item.username}}</p>
                    </div>
                    <div class="center">
                        <img src="./../../image/adavator/person2.png" width="24" height="24" />
                        <img src="./../../image/adavator/person3.png" width="24" height="24" />
                        <img src="./../../image/adavator/person4.png" width="24" height="24" />
                        <img src="./../../image/adavator/person3.png" width="24" height="24" />
                    </div>
                    <ta-timecountdown ref="timerbtn" autoplay :seconds="allTime-useTime"></ta-timecountdown>
                    <div class="right">...</div>
                </figure>
                <div class="card-content">
                    <div class="content-title"><img src="./../../image/books/type1.jpg" width="60" height="80" /></div>
                    <div class="content-detail">
                        <span class="content-value">#{{item.conver}}</span>{{item.content}}</div>
                </div>

                <figure class="card-option">
                    <div class="option-section option-section-left">
                        <i class="icon iconfont icon-dianzan">
                            <em>{{item.zan}}</em>
                        </i>
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
        <transition name="loading">
            <loading v-show="showLoading"></loading>
        </transition>
        <ta-footer></ta-footer>
    </section>
</template>

<script>
import { mapState } from 'vuex';
import taFooter from '@/components/common/footer';
import taSearch from '@/components/search/search';
import taTimecountdown from '@/components/timecountdown/timecountdown';
import loading from '@/components/common/loading';


export default {
    data() {
        return {
            showLoading: true,
            cardList: [
                {
                    username: '知乎',
                    lang: 'PHP',
                    conver: '最受关注',
                    zan: 101,
                    content:
                        '我来过，我很乖。有一个小女孩，她的名字叫佘艳，她有一双亮晶晶的大眼睛和一颗透亮的童心。她是一个孤儿，她在这个世界上只活了8年'
                },
                {
                    username: '简书',
                    lang: 'javascript',
                    conver: '最多阅读',
                    zan: 6,
                    content:
                        '每个人都有一道伤口，或深或浅，盖上布，以为不存在。我把最殷红的鲜血涂在那里。你不懂我，我不怪你。'
                },
                {
                    username: 'github',
                    lang: 'java',
                    conver: '最具价值',
                    zan: 161,
                    content:
                        '每个人都有一场爱恋，用心、用情、用力，感动也感伤。我把最炙热的心情藏在那里。你不懂我，我不怪你。每个人都有一行眼泪，'
                },
                {
                    username: '掘金',
                    lang: 'java',
                    conver: '发掘潜力',
                    zan: 132,
                    content:
                        '喝下的冰冷的水，酝酿成的热泪。我把最心酸的委屈汇在那里。你不懂我，我不怪你。每个人都有一段告白，忐忑、不安，却饱含真心和勇气。我把最抒情'
                },
                {
                    username: 'Twitter',
                    lang: 'java',
                    conver: '发掘潜力',
                    zan: 145,
                    content: '且看下回分解了~~'
                },
                {
                    username: '世界的另一面',
                    lang: 'java',
                    conver: '发掘潜力',
                    zan: 1,
                    content: '且看下回分解了~~'
                }
            ]
        };
    },
    computed: {
        // ...mapGetters(['getCount', 'loginState']),
        ...mapState(['allTime', 'useTime', 'loginState'])
    },
    mounted() {
        console.log(this.allTime-this.useTime);
        console.log(this.loginState);
    },
    components: {
        taSearch,
        taFooter,
        taTimecountdown,
        loading
    }
};
</script>

<style scoped>
.container {
    padding: 0.5rem;
    margin-top: 52px;
    margin-bottom: 55px;
}

.card {
    margin-bottom: 0.5rem;
    padding: 0.2rem 0.2rem 0.2rem 0.4rem;
    border-radius: 0.6rem;
    border-left: thick solid #dedede;
    /* border-top:thick solid #dedede; */
    /* border-bottom:thick solid #dedede; */
}

.card .card-title {
    display: flex;
    justify-content: space-between;
    text-align: center;
    align-self: center;
}

.card .card-title .left {
    display: flex;
    justify-content: space-between;
    text-align: center;
    align-items: center;
}
.card .card-title .center {
    display: flex;
    justify-content: space-between;
    overflow: hidden;
    text-overflow: ellipsis;
}
.card .card-title img {
    display: block;
    margin-right: 0.2rem;
}

.card .card-title p {
    font-size: 1rem;
    color: #5cacee;
    font-weight: bold;
}

.card .content-lang {
    font-size: 0.853rem;
}

.card .card-content {
    display: flex;
    justify-content: flex-start;
    margin-top: 0.4rem;
    margin-bottom: 0.4rem;
}
.card .card-content .content-title {
    width: 25%;
    margin-right: 0.4rem;
    font-size: 0.92rem;
}
.card .card-content .content-title img {
    width: 100%;
    height: 100%;
}
.card .card-content .content-detail {
    width: 75%;
    font-size: 0.853rem;
    letter-spacing: 1px;
}
.card .card-content .content-value {
    color: #ff6347;
}
.card .card-option {
    display: flex;
    align-items: center;
    justify-content: space-between;
}
.card .card-option .icon {
    padding-left: 0.3rem;
    padding-right: 0.3rem;
    font-size: 1.1rem;
}
.card .card-option .icon em {
    margin-left: 0.2rem;
    font-style: normal;
    font-size: 0.8rem;
}
.card .option-section-left {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 20%;
}
</style>
