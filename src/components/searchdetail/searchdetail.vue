<template>
    <div class="ta-container">
        <div class="ta-input clearfix">
            <button class="icon iconfont icon-fanhui1 back-button" @click="$router.go(-1)">
                <!-- <img src="../../image/common/back2.png" alt=""> -->
            </button>
            <input type="text" class="ta-search-input" placeholder="搜索answer" ref="searchui" v-model="searchKey" @keyup="getData($event)">
        </div>
        <ul class="search-content" v-show="tipsArr.length!=0">
            <p>豆瓣前50评分排名名电影</p>
            <li v-for="(value,index) in tipsArr" :key="'serch'+index">
                <span class="badge">{{index}}</span>
                <span>{{ value.title }}</span>
            </li>
        </ul>
    </div>
</template>
<script type="text/ecmascript-6">
import { ApiDoubanSeach, ApiBaiduSeach } from '@/api';
export default {
    name: 'searchdetail',
    data() {
        return {
            searchKey: '',
            searchResult: '',
            tipsArr: []
        };
    },
    methods: {
        async initData() {
            var params = {
                count: 10
            };
            var res = await ApiDoubanSeach(params);
            this.tipsArr = res.subjects;
        },
        async getData(event) {
            if (event.keyCode == 13) {
                var baiduAPi = 'https://www.baidu.com/s?ie=utf-8&f=8&rsv_bp=0&rsv_idx=1&tn=baidu&wd=';
                var res = await ApiBaiduSeach(this.searchKey);
                window.open(`${baiduAPi}${this.searchKey}`);
            }
        }
    },
    created() {
        this.initData();
    }
};
</script>
<style scoped lang="stylus">
.ta-container {
    background-color: #fff;
    box-sizing: border-box;

    .ta-input {
        padding: 10px;
        background-color: #c9c3dd;
    }
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
    background-color: #fff;
    border-radius: 4px;
    transition: all 0.6;
}

.back-button {
    float: left;
    margin-right: 8px;
    width: 40px;
    height: 40px;
    border: none;
    background: url() no-repeat 50% 50%;
    font-size:1.2rem;
}

.search-content {
    padding: 0.5rem;

    li {
        margin-bottom: 0.3rem;
        font-size: 0.64rem;
        background-color: #207D8B;
        color: white;
        line-height: 1.5rem;
        height: 1.5rem;

        .badge {
            display: inline-block;
            background-color: #807D8B;
            min-width: 20px;
            text-align: center;
            margin-right: 0.8em;
        }
    }
}
</style>
