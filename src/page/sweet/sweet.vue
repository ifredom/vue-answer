<template>
  <div class="page">

      <div class="test" @click="openSlide">点我</div>
      <div class="content zhizhu-content" ref="content" @click="zhihu">获取知乎编辑推介</div>
      <ul class="zhihu-title"></ul>
      <v-sidebar></v-sidebar>
      <v-footer></v-footer>
  </div>
</template>

<script type="text/ecmascript-6">
import { mapGetters, mapActions } from "vuex";
import { zhihuExplore } from "@/api";
import vSidebar from "@/components/sidebar/sidebar";
import vFooter from "@/components/common/footer";
export default {
  data() {
    return {};
  },
  methods:{
    openSlide(){
      this.$store.dispatch('setShowSidebar', true)
    },
    zhihu(){
      zhihuExplore().then(ret=>{
        if(ret){
          this.setZhihuContent(ret)
        }
      })
    },
    setZhihuContent(ret){
        this.$refs.content.innerHTML = ret
        this.$refs.content.display = 'none'
        var titleList = document.querySelectorAll('#zh-recommend-list .feed-item .question_link');
        var html = ''
        for(var i=0;i<titleList.length;i++){
          html += `<li>热点问题${i}: ${titleList[i].innerHTML}</li>`
        }
        document.querySelector('.zhihu-title').innerHTML = html
    }
  },
  components: {
    vSidebar,
    vFooter
  }
};
</script>

<style scoped lang="stylus">
.zhizhu-content{
  color:#259;
}
.zhihu-title {
  padding :10px;
  font-size: 14px;
}
.zhihu-title li{
  margin-bottom :10px;
}
</style>
