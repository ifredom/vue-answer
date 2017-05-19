<template>
    <section class="container">
      我的
      <vFoot></vFoot>
    </section>
</template>


<script type="text/ecmascript-6">
  import vFoot from "@/components/common/footer"
      export default {
          data() {
              return {}
          },
          components:{
            vFoot
          }
      }
</script>
<style>
    .my-label{
        font-style: normal;
        background-color: transparent;
        border-radius: 4px;
        font-size: 10px;
        text-align: center;
        padding: 4px 5px;
        margin-left: 10px;
    }
    .alAttest{
        border:1px solid #289494;
        color: #289494;
    }
    .my-title{
        margin: 20px 0;
        background-color: #fff;
    }
    .my-title .ta-cell{
        border-bottom:none;
    }
    .my-title .ta-cell-title{
        padding: 10px 0;
    }
    .my-title .ta-cell .my-icon {
        width: 58px;
        height: 58px;
        vertical-align: middle;
        padding-right: 0px;
        background-size: 58px;
        border-radius: 6px;
        float: left;
    }
    .my-title .ta-cell-right{
        display: inline-block;
        margin-left: 10px;
        width: 65%;
    }
    .ta-cell-right span{
        display: block;
        height: 30px;
        line-height: 30px;
    }
    /*.icon-head{*/
        /*background: url("../../image/my/avatar.png") center no-repeat;*/
    /*}*/
    /*.my-container{*/
        /*margin: 20px 0;*/
    /*}*/
    /*.my-exit{*/
        /*margin: 20px 0;*/
        /*background-color: #fff;*/
        /*width: 100%;*/
        /*text-align: center;*/
        /*padding: 10px 0;*/
        /*font-size: 16px;*/
    /*}*/
    /*.icon-smrz{*/
        /*background: url("../../image/my/smrz.png") center no-repeat;*/
    /*}*/
    /*.icon-gsgl{*/
        /*background: url("../../image/my/gsgl.png") center no-repeat;*/
    /*}*/
    /*.icon-hccl{*/
        /*background: url("../../image/my/hccl.png") center no-repeat;*/
    /*}*/
    /*.icon-wallet{*/
        /*background: url("../../image/my/wallet.png") center no-repeat;*/
    /*}*/
    /*.icon-jyjl{*/
        /*background: url("../../image/my/jyjl.png") center no-repeat;*/
    /*}*/
    /*.icon-sys{*/
        /*background: url("../../image/my/sys.png") center no-repeat;*/
    /*}*/
</style>
