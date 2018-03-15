<template>
  <div class="container">
    <ta-header title="滑动组件"></ta-header>
    <!-- 滑动加载  https://juejin.im/post/5aa4b688518825557f008aa1 -->
    <div class="content">
      <ul class="ta-scroll-wrapper">
        <li class="ta-swipe-item" @transitionend="onTransitionEnd" @touchstart="onTouchStart" @touchend="onTouchEnd" @touchmove="onTouchMove" @active="onItemActive(0)" ref="swipeItem">
          <div class="ta-swipe-inner" @click="skip">
            <img class="list-img" :src="list[0].imgUrl" alt="">
            <div class="list-content">
              <p class="title">{{list[0].title}}</p>
              <p class="tips">{{list[0].tips}}</p>
              <p class="time">{{list[0].time}}</p>
            </div>
          </div>
          <ul class="ta-swipe-btns">
            <li class="ta-swipe-btn" v-for="btn in btns" :style="genBtnStyl(btn)" @click="deleteItem" ref="btns" v-text="btn.text"></li>
          </ul>
        </li>
      </ul>
    </div>
    <ta-pacman class="pos-bottom"></ta-pacman>
  </div>
</template>

<script type="text/ecmascript-6">
import DATA from './data';
import taPacman from '@/components/loadinganimation/pacman';
import { getRect, prefixStyle } from '../../util/common/helpers/dom';
import { easeOutQuart, easeOutCubic } from '../../util/common/helpers/ease';
import { getNow } from '../../util/common/lang/date';
import taHeader from '@/components/common/header';

const COMPONENT_NAME = 'ta-swipe-item';
const DIRECTION_LEFT = 1;
const DIRECTION_RIGHT = -1;
const STATE_SHRINK = 0;
const STATE_GROW = 1;
const easingTime = 600;
const momentumLimitTime = 300;
const momentumLimitDistance = 15;
const directionLockThreshold = 5;
const transform = prefixStyle('transform');
const transitionProperty = prefixStyle('transitionProperty');
const transitionDuration = prefixStyle('transitionDuration');
const transitionTimingFunction = prefixStyle('transitionTimingFunction');

export default {
    name: COMPONENT_NAME,
    props: {
        autoShrink: {
            type: Boolean,
            default: false
        },
        index: {
            type: Number,
            index: -1
        },
        btns: {
            type: Array,
            default() {
                return [
                    {
                        action: 'clear',
                        text: '不再关注',
                        bgColor: '#8B7B8B'
                    },
                    {
                        action: 'delete',
                        text: '删除',
                        bgColor: '#FF4500'
                    }
                ];
            }
        }
    },
    data() {
        return {
            list: [], // 数据
            startPoint: {}
        };
    },
    created() {
        this.list = DATA;

        this.x = 0;
        this.state = STATE_SHRINK;

        this.activeIndex = -1; // 当前激活的item列表index
    },
    mounted() {
        this.scrollerStyle = this.$refs.swipeItem.style;
        this.$nextTick(() => {
            this.refresh();
        });
    },
    components: {
        taPacman,
        taHeader
    },
    methods: {
        onItemActive(index) {
            if (index === this.activeIndex) {
                return;
            }
            if (this.activeIndex !== -1) {
                const activeItem = this.$refs.swipeItem;
                console.log(activeItem);
                activeItem.shrink();
            }
            this.activeIndex = index;
        },
        //跳转
        skip() {},
        refresh() {
            if (this.btns.length > 0) {
                this._initCachedBtns();
                this._calculateBtnsWidth();
            }
            this.endTime = 0;
        },
        //滑动开始
        onTouchStart(e) {
            const test_activeIndex = 0;
            this.onItemActive(test_activeIndex);

            this.stop();
            this.moved = false;
            this.movingDirectionX = 0;
            const point = e.touches[0];
            this.startPoint['x'] = point.pageX;
            this.startPoint['y'] = point.pageY;
            this.distX = 0;
            this.distY = 0;
            this.startX = this.x;
            this._transitionTime();
            this.startTime = getNow();
            if (this.state === STATE_GROW && !this._isInBtns(e.target)) {
                this.shrinkTimer = setTimeout(() => {
                    this.shrink();
                }, 300);
            }
        },
        // 滑动中
        onTouchMove(e) {
            // console.log("滑动中")
            if (this.moved) {
                clearInterval(this.shrinkTimer);
                e.stopPropagation();
            }
            if (this.isInTransition) {
                return;
            }
            e.preventDefault();
            const point = e.touches[0];
            let deltaX = point.pageX - this.startPoint.x;
            let deltaY = point.pageY - this.startPoint.y;

            this.startPoint.x = point.pageX;
            this.startPoint.y = point.pageY;

            this.distX += deltaX;
            this.distY += deltaY;

            let absDistX = Math.abs(this.distX);
            let absDistY = Math.abs(this.distY);

            if (absDistX + directionLockThreshold <= absDistY) {
                return;
            }

            let timestamp = getNow();
            if (timestamp - this.endTime > momentumLimitTime && absDistX < momentumLimitDistance) {
                return;
            }

            this.movingDirectionX = deltaX > 0 ? DIRECTION_RIGHT : deltaX < 0 ? DIRECTION_LEFT : 0;
            let newX = this.x + deltaX;
            if (newX > 0) {
                newX = 0;
            }
            if (newX < this.maxScrollX) {
                newX = this.x + deltaX / 3;
            }
            if (!this.moved) {
                this.moved = true;
            }
            this._translate(newX, true);

            if (timestamp - this.startTime > momentumLimitTime) {
                this.startTime = timestamp;
                this.startX = this.x;
            }
        },
        //滑动结束
        onTouchEnd(e) {
            // console.log("滑动结束")
            if (!this.moved) {
                return;
            }
            if (this.movingDirectionX === DIRECTION_RIGHT) {
                this.shrink();
                return;
            }
            this.endTime = getNow();
            let duration = this.endTime - this.startTime;
            let absDistX = Math.abs(this.x - this.startX);
            if ((duration < momentumLimitTime && absDistX > momentumLimitDistance) || this.x < this.maxScrollX / 2) {
                this.grow();
            } else {
                this.shrink();
            }
        },
        shrink() {
            this.stop();
            this.state = STATE_SHRINK;
            this.$nextTick(() => {
                this.scrollTo(0, easingTime, easeOutQuart);
                this._translateBtns(easingTime, easeOutQuart);
            });
        },
        grow() {
            this.state = STATE_GROW;
            const extend = this.x < this.maxScrollX;
            let easing = easeOutCubic;
            this.scrollTo(this.maxScrollX, easingTime, easing);
            this._translateBtns(easingTime, easing, extend);
        },
        scrollTo(x, time, easing) {
            // console.log("scroll滚动")
            this._transitionProperty();
            this._transitionTimingFunction(easing);
            this._transitionTime(time);
            this._translate(x, true);
            if (time) {
                this.isInTransition = true;
            }
        },
        //删除
        deleteItem(e) {},
        _isInBtns(target) {
            let parent = target;
            let flag = false;
            while (parent && parent.className.indexOf('ta-swipe-item') < 0) {
                if (parent.className.indexOf('ta-swipe-btn') >= 0) {
                    flag = true;
                    break;
                }
                parent = parent.parentNode;
            }
            return flag;
        },
        stop() {
            // console.log("停止")
            if (this.isInTransition) {
                // console.log("正在动画")
                this.isInTransition = false;
                let x = this.state === STATE_SHRINK ? 0 : this._getComputedPositionX();
                this._translate(x);
            }
        },
        onTransitionEnd() {
            // console.log("动画结束")
            this.isInTransition = false;
            this._transitionTime();
            this._translate(this.x);
        },
        _getComputedPositionX() {
            let matrix = window.getComputedStyle(this.$refs.swipeItem, null);
            matrix = matrix[transform].split(')')[0].split(', ');
            let x = +(matrix[12] || matrix[4]);
            return x;
        },
        _translateBtns(time, easing, extend) {
            if (this.btns.length === 0) {
                return;
            }
            const len = this.$refs.btns.length;
            let delta = 0;
            let translate = 0;
            for (let i = 0; i < len; i++) {
                const btn = this.$refs.btns[i];
                if (this.state === STATE_GROW) {
                    translate = delta;
                } else {
                    translate = 0;
                }
                delta += this.cachedBtns[i].width;

                btn.style[transform] = `translate(${translate}px,0) translateZ(0)`;
                btn.style[transitionProperty] = `all`;
                btn.style[transitionTimingFunction] = easing;
                btn.style[transitionDuration] = `${time}ms`;
                if (extend) {
                    btn.style.width = `${this.cachedBtns[i].width}px`;
                }
            }
        },
        _initCachedBtns() {
            this.cachedBtns = [];
            const len = this.$refs.btns.length;
            for (let i = 0; i < len; i++) {
                this.cachedBtns.push({
                    width: getRect(this.$refs.btns[i]).width
                });
            }
        },
        _calculateBtnsWidth() {
            let width = 0;
            for (let i = 0; i < this.cachedBtns.length; i++) {
                width += this.cachedBtns[i].width;
            }
            this.maxScrollX = -width;
        },
        _transitionTimingFunction(property = 'easing') {
            this.scrollerStyle[transitionTimingFunction] = property;
        },
        _transitionProperty(property = 'transform') {
            this.scrollerStyle[transitionProperty] = property;
        },
        _transitionTime(time = 0) {
            this.scrollerStyle[transitionDuration] = `${time}ms`;
        },
        _translate(x, useZ) {
            let translateZ = useZ ? ' translateZ(0)' : '';
            this.scrollerStyle[transform] = `translate(${x}px,0)${translateZ}`;
            this.x = x;
        },
        genBtnStyl(btn) {
            return `background: ${btn.bgColor}`;
        }
    },
    watch: {
        btns() {
            this.$nextTick(() => {
                console.log('观察btns');
                this.refresh();
            });
        }
    }
};
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
  overflow: hidden;
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
  font-size: 0.74rem;
  color: #fff;
  text-align: center;
  position: absolute;
  top: 0;
  left: 100%;
}

// 容器结束
.content {
  padding: 0 0.9375rem;

  .list-img {
    display: block;
    width: 2rem;
    height: 2rem;
  }

  .list-content {
    padding: 0.1rem 0 0.1rem 0.2rem;
    position: relative;
    flex: 1;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    overflow: hidden;
  }

  .title {
    display: block;
    color: #666;
    overflow: hidden;
    font-size: 0.8rem;
    font-weight: bold;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  .tips {
    display: block;
    overflow: hidden;
    font-size: 0.64rem;
    color: #999;
    line-height: 1.25rem;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  .time {
    display: block;
    font-size: 0.64rem;
    position: absolute;
    right: 1rem;
    top: 0.1rem;
    color: #666;
  }

  .no-focus {
    width: 6.5rem;
    background-color: rgb(200, 199, 205);
  }

  .delete {
    background-color: #ff4949;
  }
}

.pos-bottom {
  position: absolute !important;
  bottom: 0.4rem;
  left: 50%;
  transform: translate(-70%, 0);
}
</style>
