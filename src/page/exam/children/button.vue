<template>
  <div class="com-button">
    <div class="button-left" :class="leftButtonStyle" v-text="leftText" @click="prev"></div>
    <div class="button-right" :class="rightButtonStyle" v-text="rightText" @click="next"></div>
  </div>
</template>
<script type="text/javascript">
/**
 * @class @augments left,right
 * @param {string} @augments buttonStyle
 * @param {string} class_left_apart left,right
 * @param {string} class_right_apart  gray, deepblue,lowblue
 * @param {string} class_center_line  centerLine
 * @example  <v- class="left-gray right-lowblue" ></v->
 */
export default {
  name: 'ta-com-button',
  props: {
    leftText: {
      default: '上一题'
    },
    rightText: {
      default: '下一题'
    },
    centerLine: {
      type: Boolean
    },
    leftButtonStyle: {
      default: 'gray'
    },
    rightButtonStyle: {
      default: 'lowblue'
    },
    leftButtonClick: {
      type: Function
    },
    rightButtonClick: {
      type: Function
    },
    currentAnswer: {
      type: Array,
      default() {
        return []
      }
    }
  },
  data() {
    return {}
  },
  methods: {
    prev() {
      if (this.leftButtonClick && this.leftButtonClick instanceof Function) {
        this.leftButtonClick(...this);
      }
    },
    next() {
      if (this.rightButtonClick && this.rightButtonClick instanceof Function) {
        this.rightButtonClick(...this);
      }
    }
  }
};
</script>

<style scoped lang="stylus">
deepBlueColor = #8e6b4c;
lowBlueColor = #434b40;
grayColor = #bcaa91;

.com-button {
  display: flex;
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  align-item: center;
  color: #fff;

  .button-left {
    display: flex;
    justify-content: center;
    flex: 1;
    height: 2.5rem;
    line-height: 2.5rem;
  }

  .button-right {
    display: flex;
    justify-content: center;
    flex: 1;
    height: 2.5rem;
    line-height: 2.5rem;
  }
}

.com-button {
  .gray {
    background-color: grayColor;
  }

  .deepblue {
    background-color: deepBlueColor;
  }

  .lowblue {
    background-color: lowBlueColor;
  }

  .centerLine {
    border-right: 1px solid #fff;
  }
}
</style>
