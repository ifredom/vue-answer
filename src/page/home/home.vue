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
                    <div class="content-title">
                        <img src="./../../image/books/type1.jpg" width="60" height="80" />
                    </div>
                    <div class="content-detail">
                        <span class="content-value">#{{item.conver}}</span>{{item.content}}</div>
                </div>

                <figure class="card-option">
                    <div class="option-section option-section-left">
                        <i class="heart" :class="dianzanClass" @click="dianzan($event,index)">
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
        <div class="heart" id="like3" rel="like"></div>
        <transition name="loading">
            <loading v-show="showLoading"></loading>
        </transition>
        <ta-footer></ta-footer>
    </section>
</template>

<script>
    import {
        mapState,
        mapActions
    } from 'vuex';
    import {
        MockHomeList
    } from '@/api';
    import taFooter from '@/components/common/footer';
    import taSearch from '@/components/search/search';
    import taTimecountdown from '@/components/timecountdown/timecountdown';
    import loading from '@/components/common/loading';

    export default {
        data() {
            return {
                showLoading: true,
                cardList: [],
                dianzanClass: ''
            };
        },
        computed: {
            ...mapState(['allTime', 'useTime', 'loginState'])
        },
        created() {
            MockHomeList({}).then(res => {
                console.log(res)
                this.cardList = res.data
                this.record_home_list(res.data)
            })
        },
        methods: {
            ...mapActions(['record_home_list', 'add_zan_num']),
            dianzan(event, index) {
                this.add_zan_num(index)
                console.log(event.target)
                var self = event.target
                $(self).css("background-position", "")
                var D = $(self).attr("rel");
                var self = $(self)
				if (D === 'like') {
					$(self).addClass("heartAnimation").attr("rel", "unlike");

				} else {
					$(self).removeClass("heartAnimation").attr("rel", "like");
					$(self).css("background-position", "left");
				}

            }
        },
        components: {
            taSearch,
            taFooter,
            taTimecountdown,
            loading
        }
    };
</script>

<style scoped lang="stylus">
    .container {
        padding: 0.5rem;
        margin-top: 52px;
        margin-bottom: 55px;
        .card {
            margin-bottom: 0.5rem;
            padding: 0.2rem 0.2rem 0.2rem 0.4rem;
            border-radius: 0.6rem;
            border-left: thick solid #dedede;
            /* border-top:thick solid #dedede; */
            /* border-bottom:thick solid #dedede; */
        }
        .card-title {
            display: flex;
            justify-content: space-between;
            text-align: center;
            align-self: center;
            .left {
                display: flex;
                justify-content: space-between;
                text-align: center;
                align-items: center;
            }
            .center {
                display: flex;
                justify-content: space-between;
                overflow: hidden;
                text-overflow: ellipsis;
            }

            img {
                display: block;
                margin-right: 0.2rem;
            }
            p {
                font-size: 1rem;
                color: #5cacee;
                font-weight: bold;
            }
        }
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
        &.icon-dianzan {
            color: #FF7256;
        }
    }
    .card-option .icon-shoucang{
        margin-left:2.5rem;
    }
    .card .card-option .icon em {
        margin-left: 0.2rem;
        font-style: normal;
        font-size: 0.8rem;
    }

    .card .option-section-left {
        position: relative;
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 20%;
    }

    .add-num {
        display: inline;
    }

    .add-animation {
        color: #FF7256;
        position: absolute;
        top: -15px;
        left: 10px;
        font-size: 15px;
        opacity: 1;
        filter: Alpha(opacity=0);
        -moz-opacity: 0;
        animation: mypraise 0.5s;
        -moz-animation: mypraise 0.5s;
        -webkit-animation: mypraise 0.5s;
        -o-animation: mypraise 0.5s;
        font-style: normal;
    }
    .heart {
	    background: url(../../image/common/heart_animation.png);
	    background-position: left;
	    background-repeat: no-repeat;
	    height: 4rem;
	    width: 4rem;
	    cursor: pointer;
	    position: absolute;
	    left:-1.25rem;
        background-size:2900%;

        em{
            position absolute;
            left 2.5rem;
            top:1.8rem;
            font-size 0.5rem;
        }
    }

    .heart:hover, .heart:focus{
        background-position: right;
	}

    @-webkit-keyframes heartBlast {
        0% {
            background-position: left;
        }
        100% {
            background-position: right;
        }
	}

	@keyframes heartBlast {
	    0% {
            background-position: left;
        }
        100% {
            background-position: right;
        }
	}

	.heartAnimation {
        display: inline-block;
        -webkit-animation-name: heartBlast;
        animation-name: heartBlast;
        -webkit-animation-duration: .8s;
        animation-duration: .8s;
        -webkit-animation-iteration-count: 1;
        animation-iteration-count: 1;
        -webkit-animation-timing-function: steps(28);
        animation-timing-function: steps(28);
        background-position: right;
    }

</style>