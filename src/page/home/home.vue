<template>
    <main>
        <ta-search id="searchBar" :class="searchBarFixed == true ? 'isFixed' :''"></ta-search>
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
    .isFixed {
        position: fixed;
        background-color: #Fff;
        color: #a37bad;
        top: 0;
        z-index: 999;
    }
}
</style>