<template>
    <section>
        <search></search>
        <!--<swiper></swiper>-->
        <ul class="content">
            <li @click="scan">
                掃二維碼
            </li>
            <li>分享</li>
            <li>占位中</li>
        </ul>
        <div v-text="scanResult"></div>
        <div @click="testAxios">testAxios</div>
        <v-footer></v-footer>
    </section>
</template>

<script>
import axios from 'axios'
import { mapState, mapActions } from 'vuex'
import Footer from '@/components/common/footer'
import search from '@/components/search/search'
import swiper from '@/components/swiper/swiper'

import Scan from '@/apicloud/scan'

export default {
    data() {
        return {
            scanResult: '22222'
        }
    },
    computed: mapState({
        loginCount: state => state.loginCount
    }),
    components: {
        search,
        swiper,
        'v-footer': Footer
    },
    methods: {
        testAxios() {
            axios.get('http://www.easy-mock.com/mock/59a8d6c14006183e48ef9caa/example/user')
                .then(function(response) {
                    console.log(response);
                })
                .catch(function(error) {
                    console.log(error);
                });
        },
        scan() {
            let self = this;
            console.log("開始調用手機 掃描二維碼")
            if (NODE_ENV == "development") {
                alert("掃描功能，衹能build之後通過手機調用")
            } else {
                Scan().then((ret) => {
                    if (ret) {
                        alert("ret.content")
                        self.scanResult = ret.content
                    }
                })
            }

        }
    },
    mounted() {
        console.log(this.$store.state.loginCount)
    }

}
</script>

<style>
.content {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0.64rem;
}

.content li {
    width: 32%;
    height: 2.67rem;
    line-height: 2.67rem;
    background-color: #d1d1d1;
    border-radius: 4px;
    align-items: center;
    text-align: center;
}
</style>