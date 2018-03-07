<template>
  <div class="examprogress">
    <div class="examprogress-bar-container">
      <div class="examprogress-bar" :style="{ width: Math.floor(currentIndex/allNumber*100)+'%' }">
        <div class=" sr-only"></div>
        <div class="after-dot-in"></div>
        <div class="after-dot-out"></div>
      </div>
    </div>
    <div class="examprogress-desc">
      {{currentIndex}}/{{allNumber}}
    </div>
  </div>
</template>
<script type="text/javascript">

export default {
  name: 'ta-examprogress',
  props: {
    currentIndex: {
      default: 0
    },
    allNumber: {
      default: 0
    }
  }
};
</script>

<style scoped lang="stylus">
.examprogress {
  padding: 1rem 0.9375rem 1rem 1.9375rem;
  background-color: #fff;
}

.examprogress-bar-container {
  display: inline-block;
  width: 85%;
  height: 0.75rem;
  background-color: #edeff2;
  border-radius: 0.75rem;
}

.examprogress-desc {
  display: inline-block;
  width: 13%;
  height: 100%;

  span {
    display: inline;
  }

  .desc-start {
    color: #4976c9;
  }
}

.examprogress-bar {
  position: relative;
  float: left;
  width: 0;
  height: 100%;
  font-size: 12px;
  line-height: 20px;
  color: #fff;
  text-align: center;
  border-radius: 0.75rem;
  background-color: #428bca;
  -webkit-box-shadow: inset 0 -1px 0 rgba(0, 0, 0, 0.15);
  box-shadow: inset 0 -1px 0 rgba(0, 0, 0, 0.15);
  -webkit-transition: width 0.6s ease;
  -o-transition: width 0.6s ease;
  transition: width 0.6s ease;

  .after-dot-in {
    position: absolute;
    right: 0;
    top: 0;
    display: block;
    content: '';
    width: 0.75rem;
    height: 0.75rem;
    border-radius: 50%;
    background-color: #4976c9;
    z-index: 10;
  }

  .after-dot-out {
    position: absolute;
    right: -0.1875rem;
    top: -0.1875rem;
    display: block;
    content: '';
    width: 1rem;
    height: 1rem;
    border-radius: 50%;
    background-color: #fff;
    border: 1px solid #4976c9;
    z-index: 9;
  }

  .sr-only {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    border: 0;
  }
}
</style>
