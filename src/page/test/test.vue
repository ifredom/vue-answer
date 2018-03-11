<template>
  <div class="page">
    test
    <!-- <router-link to="/test/test1">TO test1</router-link>
    <router-link to="/test/test2"> TO test2</router-link> -->
    <!-- <router-link @click="goto2"> TO test2</router-link> -->
    我是从{{ids}}过来的

  </div>
</template>

<script type="text/ecmascript-6">
export default {
  data() {
    return {
      ids:''
    }
  },
  mounted(){
    this.ids = this.$route.params.id
  },
  methods:{
    goto(){
      this.$router.push({path:'/test/test1'})
    },
    goto2(){
      this.$router.push({path:'/test/test2'})
    }
  },
  components: {

  }
}
</script>

<style scoped lang="stylus">
</style>
