<template>
  <div class="container">
    exam
    <button class="button ta-large-button">开始考试</button>
    <ta-button></ta-button>
    <router-view></router-view>
  </div>
</template>
<script type="text/ecmascript-6">
import taButton from '@/page/exam/children/button'
export default {
  data() {
    return {

    }

  },
  components: {
    taButton
  }
}
</script>
<style scoped lang="stylus">
.container {
  background: url('../../image/books/bookbg3.png') no-repeat 0 0;
  background-size: 160%;
  // background-color: rgba(125,113,97,0.7);
}
</style>
