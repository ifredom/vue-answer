<template>
  <div class="container">
    <div class="sidebarNav" @click="openSlide"></div>
    <div class="content zhizhu-content" ref="content" @click="getZhihuData">获取编辑知乎推介</div>
    <ul class="zhihu-title"></ul>
    <v-sidebar></v-sidebar>
    <v-footer></v-footer>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import { zhihuExplore } from "@/api";
import vSidebar from "@/components/sidebar/sidebar";
import vFooter from "@/components/common/footer";
export default {
  data() {
    return {};
  },
  methods: {
    openSlide() {
      this.$store.dispatch('setShowSidebar', true)
    },
    getZhihuData() {
      zhihuExplore().then(ret => {
        console.log(ret)
        if (ret) {
          this.setZhihuContent(ret)
        }
      })
    },
    setZhihuContent(ret) {
      this.$refs.content.innerHTML = ret
      this.$refs.content.display = 'none'
      var titleList = document.querySelectorAll('#zh-recommend-list .feed-item .question_link');
      var html = ''
      for (var i = 0; i < titleList.length; i++) {
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
.container {
  background-color: #c9c3dd;
  .sidebarNav {
    position: absolute;
    left: 0;
    top: 0;
    transform: translate(-50%, -50%);
    width: 8rem;
    height: 8rem;
    line-height: 8rem;
    font-size: 1rem;
    text-align: right;
    border-radius: 50%;
    background: linear-gradient(to right, #f2abb9, #a37bad); /* 标准的语法 */
  }

  .zhizhu-content {
    color: #259;
  }

  .zhihu-title {
    padding: 10px;
    font-size: 14px;
  }

  .zhihu-title li {
    margin-bottom: 10px;
  }
}
</style>
