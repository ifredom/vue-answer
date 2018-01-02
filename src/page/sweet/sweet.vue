<template>
  <div class="page">

      <div class="test" @click="openSlide">点我</div>
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
.test
  display flex
  align-self center
  justify-content center
  margin 1rem
  width 32px
  height 32px
  line-height 32px
  border-radius 50%
  background-color orange
  font-size 0.64rem


</style>
