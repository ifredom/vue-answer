<template>
  <section class="head">
    <div class="avatar">
      <img src="../../assets/image/common/advator.jpg" alt="">
      <div class="rzstatus" @click="clickAdvator">
        <img src="../../assets/image/adavator/person1.png" alt="">
      </div>
    </div>
    <div class="username">糖果名：{{username}}</div>
  </section>
</template>
<script>
export default {
  props: {
    username: {
      type: String,
      default: 'ifredom'
    },
    advatorHandle: {
      default: Function
    }
  },
  data() {
    return {


    }
  },
  methods: {
    clickAdvator() {
      if (this.advatorHandle && this.advatorHandle instanceof Function) {
        this.advatorHandle(...this)
      }
    }
  },
  components: {

  }
}
</script>
<style scoped lang="stylus">
.head {
  padding-bottom: 1.12rem;
  text-align: center;
  font-family: PingFangSC-Regular;
  font-size: 14px;
  color: #333333;
  letter-spacing: 0;

  .avatar {
    position: relative;
    margin: 2.13rem auto 0.48rem auto;
    background: #f2e9d6;
    border: 1px solid #e2e2e2;
    width: 4.213rem;
    height: 4.213rem;
    border-radius: 100%;
    overflow: hidden;

    >img {
      width: 100%;
      height: 100%;
    }

    .rzstatus {
      position: absolute;
      bottom: 0;
      right: -0.693rem;
      width: 3.2rem;
      height: 1.12rem;
      transform: translate(100%, 0);

      img {
        height: 100%;
      }
    }
  }

  .username {
    /* 这个文字效果只在webkit内核的浏览器上才能正常工作。Firefox 浏览器不支持在文字上使用background-clip属性 */
    font-size: 0.9375rem;
    font-weight: bold;
    font-family: helvetica;
    text-align: center;
    background: -webkit-linear-gradient(left, #4f185d, #fe5d4b); /* 背景色渐变 */
    -webkit-background-clip: text; /* 规定背景的划分区域 */
    -webkit-text-fill-color: transparent; /* 防止字体颜色覆盖 */
  }
}
</style>
