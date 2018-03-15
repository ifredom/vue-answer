<template>
    <header class="ta-header" :class="{ 'ta-fixed': fixed}">
        <div class="is-left" :class="positionClass">
            <span class="icon iconfont icon-fanhui1 backimg left-back" @click="$router.back()" v-if="!selfcallback"></span>
            <span class="icon iconfont icon-fanhui1 backimg left-back" @click="_callback" v-else></span>
            <slot name="left"></slot>
        </div>
        <div class="ta-header-text is-center">
            {{title}}
            <slot name="center"></slot>
        </div>
        <div class="ta-right is-right">
            <slot name="right"></slot>
        </div>
    </header>
</template>
 <script type="text/javascript">
import { MessageBox } from 'mint-ui';

export default {
    name: 'ta-header',
    props: {
        title: {
            default: 'Answer',
            type: String
        },
        selfcallback: {
            type: Function
        },
        position: {
            default: 'left',
            type: String
        },
        fixed: Boolean,
        back: Boolean
    },
    computed: {
        positionClass() {
            return 'ta-' + this.position;
        }
    },
    methods: {
        _callback() {
            if (this.selfcallback && this.selfcallback instanceof Function) {
                this.selfcallback(...this);
            }
        }
    }
};
</script>

<style scoped lang="stylus">
headerHeight = 2.8125rem;
imgheight = 1.125rem;
imgbottom = 1.40625rem;

[w-188-246] {
    background-color: red;
}

.ta-header {
    position: relative;
    height: headerHeight;
    width: 100%;
    background-color: #8470FF;
    box-shadow: 0 0 0 0 #b2b2b2;
    text-align: center;
    color: #fff;
    -webkit-box-align: center;
    align-items: center;
    font-family: PingFangSC-Light;
}

.ta-header .is-right {
    font-size: imgheight;
    color: #fff;
    text-align: right;
    align-items: center;
}

.ta-header .ta-header-text {
    font-size: imgheight;
    line-height: headerHeight;
    max-width: 78%;
    margin: 0 auto;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}

.ta-header.ta-fixed {
    top: 0;
    right: 0;
    left: 0;
    position: fixed;
    z-index: 1;
}

.ta-header.ta-fixed+* {
    padding-top: 36px;
}

.ta-header .icon {
    font-size: imgheight;
    line-height: imgheight;
}

.ta-header .ta-left {
    position: absolute;
    bottom: imgbottom;
    left: 0.9375rem;
    transform: translate(0, 50%);
}

.ta-header .ta-right {
    position: absolute;
    bottom: imgbottom;
    right: 0.9375rem;
    transform: translate(0, 50%);
}

.ta-header .ta-back {
    position: absolute;
    bottom: imgbottom;
    left: 0.9375rem;
    transform: translate(0, 50%);
    width: headerHeight;
}
</style>