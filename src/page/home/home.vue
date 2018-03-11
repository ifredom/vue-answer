<template>
    <main>
        <ta-search class="marginbot"></ta-search>
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
    return {};
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
    padding-top: 52px;
}
</style>