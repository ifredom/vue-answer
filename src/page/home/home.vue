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
import { MockHomeList } from '@/api';
import taFooter from '@/components/common/footer';
import taSearch from '@/components/search/search';
import taTimecountdown from '@/components/timecountdown/timecountdown';
import loading from '@/components/common/loading';


export default {
    data() {
        return {
            showLoading: true,
            cardList: []
        };
    },
    computed: {
        ...mapState(['allTime', 'useTime', 'loginState'])
    },
    mounted() {
        MockHomeList({}).then(res => {
            console.log(res)
            this.cardList = res.data
        })
        console.log(this.allTime - this.useTime);
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
