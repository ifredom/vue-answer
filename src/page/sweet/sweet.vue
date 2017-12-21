<template>
  <div class="page">

      <div @click="openSlide">开启糖果侧边栏</div>
      <v-sidebar></v-sidebar>
      <v-footer></v-footer>
  </div>
</template>

<script type="text/ecmascript-6">
import { mapGetters, mapActions } from "vuex";
import vSidebar from "@/components/sidebar/sidebar";
import vFooter from "@/components/common/footer";
export default {
  data() {
    return {};
  },
  methods:{
    openSlide(){
      this.$store.dispatch('setShowSidebar', true)
    }
  },
  components: {
    vSidebar,
    vFooter
  }
};
</script>

<style scoped lang="stylus">
</style>
