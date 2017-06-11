<template>
  <section class="container" v-cloak>
    <heads titles="趣读">
      <headitem  slot="right" path="/addperson"  position="left">添加</headitem>
    </heads>
    <p>找点什么装在趣读里呢？？</p>
    <p>没有就先装点13吧</p>
    <vFoot></vFoot>
  </section>
</template>
<script type="text/ecmascript-6">
  import heads from '@/components/common/header'
  import headitem from '@/components/common/headeritem'
  import vFoot from "@/components/common/footer"
  export default {
      data(){
        return {}
      },
      components:{
        heads,
        headitem,
        vFoot
      }
  }
</script>
<style>
  [v-cloak]{display: none;}
</style>
