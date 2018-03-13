<template>
  <div class="container">
    <div class="page-title">滑动组件</div>
    <!-- <transition-group name="cube-swipe" tag="ul"> -->
    <li class="list-item" data-type="0">
      <div class="list-box" @transitionend="onTransitionEnd" @touchstart="onTouchStart" @touchend="onTouchEnd" @touchmove="onTouchMove" @click="skip" ref="swipeItem">
        <img class="list-img" :src="list[0].imgUrl" alt="">
        <div class="list-content">
          <p class="title">{{list[0].title}}</p>
          <p class="tips">{{list[0].tips}}</p>
          <p class="time">{{list[0].time}}</p>
        </div>
      </div>
      <div class="ta-swiper-btn delete" @click="deleteItem">删除</div>
    </li>
    <!-- </transition-group> -->
  </div>
</template>

<script type="text/ecmascript-6">
import DATA from './data'
import {
  getRect,
  prefixStyle
} from '../../util/common/helpers/dom'
import { easeOutQuart, easeOutCubic } from '../../util/common/helpers/ease'
import { getNow } from '../../util/common/lang/date'

const directionLockThreshold = 5
const easingTime = 600

const DIRECTION_LEFT = 1
const DIRECTION_RIGHT = -1
const STATE_SHRINK = 0

const transform = prefixStyle('transform')
const transitionProperty = prefixStyle('transitionProperty')
const transitionDuration = prefixStyle('transitionDuration')
const transitionTimingFunction = prefixStyle('transitionTimingFunction')

export default {
  name: 'index',
  data() {
    return {
      list: []
    }
  },
  created() {
    this.list = DATA
    this.x = 0
    this.state = STATE_SHRINK
  },
  mounted() {
    this.scrollerStyle = this.$refs.swipeItem.style
    console.log(this.scrollerStyle)
  },
  methods: {
    //跳转
    skip() {
    },
    //滑动开始
    onTouchStart(e) {
      console.log("滑动开始")
      this.stop()
      this.moved = false
      this.movingDirectionX = 0
      const point = e.touches[0]
      this.pointX = point.pageX
      this.pointY = point.pageY
      this.distX = 0
      this.distY = 0
      this._transitionTime()
      this.startTime = getNow()
      this.shrinkTimer = setTimeout(() => {
        this.shrink()
      }, 300)

    },
    // 滑动中
    onTouchMove(e) {
      console.log("滑动中")
      if (this.moved) {
        clearInterval(this.shrinkTimer);
        e.stopPropagation()
      }
      e.preventDefault()
      const point = e.touches[0]
      let deltaX = point.pageX - this.pointX
      let deltaY = point.pageY - this.pointY

      this.distX += deltaX
      this.distY += deltaY

      let absDistX = Math.abs(this.distX)
      let absDistY = Math.abs(this.distY)

      let newX = this.x + deltaX
      this._translate(newX)
    },
    //滑动结束
    onTouchEnd(e) {
      console.log("滑动结束")
    },
    shrink() {
      this.stop()
      this.state = STATE_SHRINK
      this.$nextTick(() => {
        this.scrollTo(0, easingTime, easeOutQuart)
        // this._translateBtns(easingTime, easeOutQuart)
      })
    },
    scrollTo(x, time, easing) {
      this._transitionProperty()
      this._transitionTimingFunction(easing)
      this._transitionTime(time)
      this._translate(x, true)
      if (time) {
        this.isInTransition = true
      }
    },
    //删除
    deleteItem(e) {

    },
    stop() {
      console.log("停止")
      if (this.isInTransition) {
        this.isInTransition = false
        let x = this.state === STATE_SHRINK ? 0 : this._getComputedPositionX()
        this._translate(x)
      }
    },
    onTransitionEnd() {
      console.log("动画结束")
      this.isInTransition = false
      this._transitionTime()
      this._translate(this.x)
    },
    _transitionTimingFunction(property = 'easing') {
      console.log("动画屬性")
      this.scrollerStyle[transitionTimingFunction] = property
    },
    _transitionProperty(property = 'transform') {
      console.log("动画屬性")
      this.scrollerStyle[transitionProperty] = property
    },
    _transitionTime(time = 0) {
      console.log("动画时间")
      this.scrollerStyle[transitionDuration] = `${time}ms`
    },
    _translate(x, useZ) {
      console.log("偏移量")
      let translateZ = useZ ? ' translateZ(0)' : ''
      this.scrollerStyle[transform] = `translate(${x}px,0)${translateZ}`
      this.x = x
    },
  }
}
</script>

<style scoped lang="stylus">
.cube-swipe {
  overflow: hidden;
}

.cube-swipe-enter-active, .cube-swipe-leave-active {
  transition: all 0.3s;

  .cube-swipe-item-inner {
    transition: all 0.3s;
  }
}

.cube-swipe-enter, .cube-swipe-leave-to {
  .cube-swipe-item-inner {
    height: 0;
  }
}

.container {
  font-size: 50px;
  overflow: hidden;
}

.page-title {
  text-align: center;
  font-size: 17px;
  padding: 10px 15px;
  position: relative;
}

.page-title:after {
  content: ' ';
  position: absolute;
  left: 0;
  bottom: 0;
  right: 0;
  height: 1px;
  border-bottom: 1px solid #ccc;
  color: #ccc;
  -webkit-transform-origin: 0 100%;
  transform-origin: 0 100%;
  -webkit-transform: scaleY(0.5);
  transform: scaleY(0.5);
  z-index: 2;
}

.list-item {
  position: relative;
  height: 3.6rem;
  -webkit-transition: all 0.2s;
  transition: all 0.2s;
}

.list-item[data-type='0'] {
  transform: translate3d(0, 0, 0);
}

.list-item[data-type='1'] {
  transform: translate3d(-2rem, 0, 0);
}

.list-item:after {
  content: ' ';
  position: absolute;
  left: 0.2rem;
  bottom: 0;
  right: 0;
  height: 1px;
  border-bottom: 1px solid #ccc;
  color: #ccc;
  -webkit-transform-origin: 0 100%;
  transform-origin: 0 100%;
  -webkit-transform: scaleY(0.5);
  transform: scaleY(0.5);
  z-index: 2;
}

.list-box {
  padding: 0.2rem;
  background: #fff;
  display: flex;
  align-items: center;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  justify-content: flex-end;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  font-size: 0;
}

.list-item .list-img {
  display: block;
  width: 2rem;
  height: 2rem;
}

.list-item .list-content {
  padding: 0.1rem 0 0.1rem 0.2rem;
  position: relative;
  flex: 1;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  overflow: hidden;
}

.list-item .title {
  display: block;
  color: #333;
  overflow: hidden;
  font-size: 15px;
  font-weight: bold;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.list-item .tips {
  display: block;
  overflow: hidden;
  font-size: 12px;
  color: #999;
  line-height: 20px;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.list-item .time {
  display: block;
  font-size: 12px;
  position: absolute;
  right: 0;
  top: 0.1rem;
  color: #666;
}

.list-item .delete {
  width: 2rem;
  height: 3.6rem;
  line-height: 3.6rem;
  background: #ff4949;
  font-size: 17px;
  color: #fff;
  text-align: center;
  position: absolute;
  top: 0;
  right: -2rem;
}
</style>
