<template>
    <main>
        <ta-search id="searchBar" :class="searchBarFixed == true ? (syestemType=='ios'?'tab-box-sticky':'tab-box-fixed') :''"></ta-search>
        <ta-list></ta-list>
        <ta-footer></ta-footer>
    </main>
</template>

<script>
import taSearch from '@/components/search/search';
import taList from '@/page/home/children/list';
import taFooter from '@/components/common/footer';

export default {
  data() {
    return {
      searchBarFixed: false
    };
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll);
    this.syestemType();
  },
  destroyed() {
    window.removeEventListener('scroll', this.handleScroll);
  },
  methods: {
    handleScroll() {
      var scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
      var offsetTop = document.querySelector('#searchBar').offsetTop;
      if (scrollTop > offsetTop) {
        this.searchBarFixed = true;
      } else {
        this.searchBarFixed = false;
      }
    },
    syestemType() {
      var u = navigator.userAgent;
      var isAndroid = u.indexOf('Android') > -1 || u.indexOf('Adr') > -1; //android终端
      var isiOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); //ios终端
      if (!!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/)) {
        return 'ios';
      } else {
        return 'android';
      }
    }
  },
  components: {
    taSearch,
    taFooter,
    taList
  }
};
</script>

<style scoped lang="stylus">
main {
    // 兼容处理 Android
    .tab-box-fixed {
        position: fixed;
        z-index: 5;
        background-color: #Fff;
        color: #a37bad;
    }

    // iOS
    .tab-box-sticky {
        position: -webkit-sticky;
        position: sticky;
        top: 0;
        left: 0;
        z-index: 5;
        background-color: #Fff;
        color: #a37bad;
    }
}
</style>