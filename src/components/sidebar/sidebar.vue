<template>
  <transition :name="tansitionName">
    <div class="sidebar" v-show="showSidebar">
      <section class="sidebar-content">

        <ta-advator></ta-advator>

        <ul class="menu">
          <mt-cell @click="hideSidebar" title="我">
            <img slot="icon" src="../../image/adavator/person1.png" width="24" height="24">
          </mt-cell>
          <mt-cell @click="hideSidebar" title="缘由边界">
            <img slot="icon" src="../../image/adavator/person2.png" width="24" height="24">
          </mt-cell>
          <mt-cell @click="hideSidebar" title="爱的深呼吸">
            <img slot="icon" src="../../image/adavator/person3.png" width="24" height="24">
          </mt-cell>
          <mt-cell @click="hideSidebar" title="配置" to="/configure">
            <img slot="icon" src="../../image/adavator/person4.png" width="24" height="24">
          </mt-cell>
          <mt-cell @click="signout" title="退出登录" to="/login">
            <img slot="icon" src="../../image/adavator/person5.png" width="24" height="24">
          </mt-cell>
        </ul>
      </section>

      <section class="sidebar_mask" v-show="hideSidebar" @click="hideSidebar">
      </section>

    </div>
  </transition>
</template>

<script>
import { mapState } from 'vuex'
import { Popup, Cell } from 'mint-ui';
import taAdvator from '@/components/advator/advator';

export default {
  props: {
    tansitionName: {
      type: String,
      default: 'fade'
    }
  },
  data() {
    return {
    }
  },
  computed: {
    ...mapState([
      'showSidebar'
    ]),
  },
  methods: {
    hideSidebar() {
      this.$store.dispatch('setShowSidebar', false)
    },
    signout() {
      this.$router.push({ path: '/login' })
    }
  },
  components: {
    'mt-cell': Cell,
    taAdvator
  }
}
</script>

<style scoped lang="stylus">
.fade-enter-active, .fade-leave-active {
  transition: all 0.5s;
}

.fade-enter, .fade-leave-active {
  transform: translate3d(-100%, 0, 0);
}

.sidebar {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  z-index: 100;

  .sidebar-content {
    position: fixed;
    background: #fff;
    top: 0;
    left: 0;
    width: 85%;
    height: 100%;
    background: linear-gradient(#f2abb9, #a37bad); /* 标准的语法 */
    color: #000;

    .mint-cell:last-child {
      background-image: none;
    }
  }

  .sidebar_mask {
    position: fixed;
    top: 0;
    right: 0;
    width: 15%;
    height: 100%;
    margin: 0 auto;
    z-index: 100;
    background-color: rgba(0, 0, 0, 0.5);
  }

  .menu {
    .mint-cell {
      background-color: inherit;
    }

    .mint-cell-title {
      img {
        width: 1.06rem;
        height: 1.06rem;
        margin-left: 0.8rem;
        margin-right: 0.746rem;
      }
    }
  }
}
</style>
