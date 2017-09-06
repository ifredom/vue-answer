<template>
    <header class="ta-header" :class="{ 'ta-fixed': fixed,'otherStyle':otherStyle }">
        <div class="is-left" :class="positionClass" @click="$router.back()">
            <slot name="back"></slot>
            <slot name="left"></slot>
        </div>
        <div class="ta-header-text is-center">{{title}}</div>

        <div class="ta-right is-right" @click="goto">
            <slot name="right"></slot>
        </div>

    </header>
</template>
<script type="text/javascript">
import {statusbarappearance} from '@/apicloud/statusbarappearance'
export default {
    props: {
        title: {
            default: 'Answer',
            type: String
        },
        path: {
            type: String
        },
        position: {
            default: 'left',
            type: String
        },
        fixed: Boolean,
        otherStyle: {
            type: Boolean
        },
        specialmethod: Boolean // 专用于头部右侧文字，点击有特殊用途
    },
    computed: {
      positionClass() {
        const className = `'ta-' + ${this.position}`
        return className
      }
    },
    methods: {
        goto() {
            if (!this.specialmethod) {
                this.$router.push({path: this.path})
            }
        }
    },
    mounted() {
        /* eslint-disable */
        NODE_ENV === 'production' ? statusbarappearance() : ''

    }
}
</script>

<style scoped lang="stylus">
  a.ta-header{display: block;width: inherit;height: inherit}
  .ta-header{
    position: relative;
    height: 45px;
    background-color: #104e97;
    box-shadow:0 0 0 0 #b2b2b2;
    text-align: center;
    color:#fff;
    -webkit-box-align: center;
    align-items: center;
    font-family:PingFangSC-Light;
    
  }
  .ta-header .is-right{
    font-size: 0.853rem;
    color:#fff;
    text-align:right;
    align-items: center;
  }
  .ta-header .ta-header-text{
    font-size: 1.066rem;
    line-height: 45px;
  }
  .ta-header.ta-fixed {
    top: 0;
    right: 0;
    left: 0;
    position: fixed;
    z-index: 1;
  }
  .ta-header.ta-fixed+* {
    padding-top: 2.4rem;
  }

  .ta-header .ta-header-button{
    position: absolute;
    padding: 0.3125rem;
    width: 1.3125rem;
    height: 1.3125rem;
    transition: opacity 0.3s;
    -webkit-transition: opacity 0.3s;
  }
  .ta-header .ta-header-button .icon{
    font-size: 1.2rem;
    line-height: 1.3125rem;
  }
  .ta-header .ta-left {
    position: absolute;
    bottom: 50%;
    left: .6875rem;
    transform: translate(0,50%);
    width: 1.1rem;
  }
  .ta-header .ta-right {
    position: absolute;
    bottom: 50%;
    right: .6875rem;
    transform: translate(0,50%);
  }
  .ta-header .ta-back {
    position: absolute;
    bottom: 50%;
    left: .6875rem;
    transform: translate(0,50%);
    width: 1.1rem;
  }
  .ta-header .ta-left img,
  .ta-header .ta-right img,
  .ta-header .ta-back img{
    margin-top: -3px;
    width: 100%;
    height: 100%;
    vertical-align: middle;
  }


  .ta-header
    &.otherStyle
      background-color: #fff;
      color:#333
      .is-right
        color:#104e97;

</style>
