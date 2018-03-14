<template>
  <div class="container">
    <div class="page-title">滑动组件</div>
    <!-- 滑动加载  https://juejin.im/post/5aa4b688518825557f008aa1 -->
    <div class="content">
      <!-- <transition-group name="swipe" tag="ul"> -->
        <li class="ta-scroll-wrapper" >
          <div class="ta-swipe-item" @transitionend="onTransitionEnd" @touchstart="onTouchStart" @touchend="onTouchEnd" @touchmove="onTouchMove" ref="swipeItem">
            <div class="ta-swipe-inner" @click="skip">
              <img class="list-img" :src="list[0].imgUrl" alt="">
              <div class="list-content">
                <p class="title">{{list[0].title}}</p>
                <p class="tips">{{list[0].tips}}</p>
                <p class="time">{{list[0].time}}</p>
              </div>
            </div>
            <ul class="ta-swipe-btns">
              <li class="ta-swipe-btn" v-for="btn in btns" :style="genBtnStyl(btn)" @click="deleteItem" ref="btns" v-text="btn.text" :key="btn.action"></li>
              <!-- <li class="ta-swipe-btn  delete" @click="deleteItem" ref="btns">删除</li>
              <li class="ta-swipe-btn  delete" @click="deleteItem" ref="btns">删除</li> -->
            </ul>
          </div>
        </li>
      <!-- </transition-group> -->
    </div>
    <ta-pacman></ta-pacman>
  </div>
</template>

<script type="text/ecmascript-6">
import DATA from './data'
import taPacman from '@/components/loadinganimation/pacman'
import {
  getRect,
  prefixStyle
} from '../../util/common/helpers/dom'
import { easeOutQuart, easeOutCubic } from '../../util/common/helpers/ease'
import { getNow } from '../../util/common/lang/date'

const COMPONENT_NAME = 'ta-swipe-item'
const DIRECTION_LEFT = 1
const DIRECTION_RIGHT = -1
const STATE_SHRINK = 0
const STATE_GROW = 1
const easingTime = 600
const momentumLimitTime = 300
const momentumLimitDistance = 15
const directionLockThreshold = 5
const transform = prefixStyle('transform')
const transitionProperty = prefixStyle('transitionProperty')
const transitionDuration = prefixStyle('transitionDuration')
const transitionTimingFunction = prefixStyle('transitionTimingFunction')

export default {
  name: COMPONENT_NAME,
  props: {
    autoShrink: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      list: [],
      btns: [
        {
          action: 'clear',
          text: '不再关注',
          color: '#c8c7cd'
        },
        {
          action: 'delete',
          text: '删除',
          color: '#ff3a32'
        }
      ]
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
    this.$nextTick(() => {
      this.refresh()
    })
  },
  components: {
    taPacman
  },
  methods: {
    //跳转
    skip() {
    },
    refresh() {
      this._initCachedBtns()
      this._calculateBtnsWidth()
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
      this.startX = this.x
      this._transitionTime()
      this.startTime = getNow()
      if (this.state === STATE_GROW && !this._isInBtns(e.target)) {
        this.shrinkTimer = setTimeout(() => {
          this.shrink()
        }, 300)
      }
    },
    // 滑动中
    onTouchMove(e) {
      console.log("滑动中")
      if (this.moved) {
        console.log("清楚定时器")
        clearInterval(this.shrinkTimer);
        e.stopPropagation()
      }
      /* istanbul ignore if */
      if (this.isInTransition) {
        return
      }
      e.preventDefault()
      const point = e.touches[0]
      let deltaX = point.pageX - this.pointX
      let deltaY = point.pageY - this.pointY

      this.distX += deltaX
      this.distY += deltaY

      let absDistX = Math.abs(this.distX)
      let absDistY = Math.abs(this.distY)

      if (absDistX + directionLockThreshold <= absDistY) {
        return
      }

      let timestamp = getNow()
      if (timestamp - this.endTime > momentumLimitTime && absDistX < momentumLimitDistance) {
        return
      }

      this.movingDirectionX = deltaX > 0 ? DIRECTION_RIGHT : deltaX < 0 ? DIRECTION_LEFT : 0

      let newX = this.x + deltaX

      if (newX > 0) {
        newX = 0
      }
      if (newX < this.maxScrollX) {
        newX = this.x + deltaX / 3
      }
      if (!this.moved) {
        this.moved = true
      }
      console.log(newX)
      this._translate(newX, true)

      if (timestamp - this.startTime > momentumLimitTime) {
        this.startTime = timestamp
        this.startX = this.x
      }
    },
    //滑动结束
    onTouchEnd(e) {
      console.log("滑动结束")
      if (!this.moved) {
        return
      }
      if (this.movingDirectionX === DIRECTION_RIGHT) {
        this.shrink()
        return
      }
      this.endTime = getNow()
      let duration = this.endTime - this.startTime
      let absDistX = Math.abs(this.x - this.startX)

      if (duration < momentumLimitTime && absDistX > momentumLimitDistance || this.x < this.maxScrollX / 2) {
        this.grow()
      } else {
        this.shrink()
      }

    },
    shrink() {
      this.stop()
      this.state = STATE_SHRINK
      this.$nextTick(() => {
        this.scrollTo(0, easingTime, easeOutQuart)
        // this._translateBtns(easingTime, easeOutQuart)
      })
    },
    grow() {
      this.state = STATE_GROW
      const extend = this.x < this.maxScrollX
      let easing = easeOutCubic
      this.scrollTo(this.maxScrollX, easingTime, easing)
      // this._translateBtns(easingTime, easing, extend)
    },
    scrollTo(x, time, easing) {
      console.log("scroll滚动")
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
    _isInBtns(target) {
      let parent = target
      let flag = false
      while (parent && parent.className.indexOf('ta-swipe-item') < 0) {
        if (parent.className.indexOf('ta-swipe-btn') >= 0) {
          flag = true
          break
        }
        parent = parent.parentNode
      }
      return flag
    },
    stop() {
      console.log("停止")
      if (this.isInTransition) {
        console.log("正在动画")
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
    _getComputedPositionX() {
      let matrix = window.getComputedStyle(this.$refs.swipeItem, null)
      console.log(matrix[transform])
      matrix = matrix[transform].split(')')[0].split(', ')
      let x = +(matrix[12] || matrix[4])
      return x
    },
    _initCachedBtns() {
      this.cachedBtns = []
      console.log(this.$refs.btns)
      for (let i = 0; i < this.$refs.btns.length; i++) {
        this.cachedBtns.push(
          getRect(this.$refs.btns[i]).width
        )
      }
      console.log(this.cachedBtns)
    },
    _calculateBtnsWidth() {
      let width = 0
      width = getRect(this.$refs.btns).width
      this.maxScrollX = -width
      console.log("初始maxScrollX: ", this.maxScrollX)
    },
    _transitionTimingFunction(property = 'easing') {
      console.log("动画属性")
      this.scrollerStyle[transitionTimingFunction] = property
    },
    _transitionProperty(property = 'transform') {
      console.log("动画属性")
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
    genBtnStyl(btn) {
      return `background: ${btn.color}`
    }
  },
  watch: {
    btns() {
      this.$nextTick(() => {
        this.refresh()
      })
    }
  }
}
</script>

<style scoped lang="stylus">
.ta-scroll-wrapper {
  &.swipe-enter-active, &.swipe-leave-active {
    transition: all 0.3s;

    .item-inner {
      transition: all 0.3s;
    }
  }

  &.swipe-enter, &.swipe-leave-to {
    .item-inner {
      height: 0;
    }
  }
}

.container {
  padding: 0 0.9375rem;
  overflow: hidden;
}

.page-title {
  text-align: center;
  font-size: 1rem;
  padding: 0.625 0.9375rem;
  position: relative;
}

.page-title:after {
  content: ' ';
  position: absolute;
  left: 0;
  bottom: 0;
  right: 0;
  height: 0.0625rem;
  border-bottom: 1px solid #ccc;
  color: #ccc;
  -webkit-transform-origin: 0 100%;
  transform-origin: 0 100%;
  -webkit-transform: scaleY(0.5);
  transform: scaleY(0.5);
  z-index: 2;
}

// 容器样式开始
.ta-scroll-wrapper {
  overflow: hidden;
}

.ta-swipe-item {
  position: relative;
  // transition: all 0.2s;
}

.ta-swipe-inner {
  background: #fff;
  display: flex;
  box-sizing: border-box;
  -webkit-box-align: center;
  align-items: center;
  height: 4rem;
}

.ta-swipe-item .ta-swipe-btn {
  width: 3.8rem;
  height: 100%;
  line-height: 4rem;
  font-size: 0.9375rem;
  color: #fff;
  text-align: center;
  position: absolute;
  top: 0;
  left: 100%;
}

// 容器结束
.content .list-img {
  display: block;
  width: 2rem;
  height: 2rem;
}

.content .list-content {
  padding: 0.1rem 0 0.1rem 0.2rem;
  position: relative;
  flex: 1;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  overflow: hidden;
}

.content .title {
  display: block;
  color: #666;
  overflow: hidden;
  font-size: 0.8rem;
  font-weight: bold;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.content .tips {
  display: block;
  overflow: hidden;
  font-size: 0.64rem;
  color: #999;
  line-height: 1.25rem;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.content .time {
  display: block;
  font-size: 0.64rem;
  position: absolute;
  right: 1rem;
  top: 0.1rem;
  color: #666;
}

.content .no-focus {
  width: 6.5rem;
  background-color: rgb(200, 199, 205);
}

.content .delete {
  background-color: #ff4949;
  // transform: translate(6.5rem, 0);
}
</style>
