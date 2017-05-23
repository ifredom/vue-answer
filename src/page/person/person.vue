<template>
  <section class="container">
    <heads titles="趣读">
      <headitem  path="/addperson"  position="left"></headitem>
    </heads>
    <p>找点什么装在趣读里面呢？？</p>
    <p>装13我是接受的</p>
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

</style>
