<template>
  <section class="container">
    <heads titles="趣闻">
      <headitem  path="/addperson"  position="left"></headitem>
      <headitem  path="/addperson"  position="right"></headitem>
    </heads>
    person
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
