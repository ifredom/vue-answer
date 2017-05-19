<template>
    <div>
        <vHead fixed titles="添加人员">
            <div class="ta-left" slot="back" @click="back">
              <span class="icon iconfont icon-back" ></span>
            </div>
        </vHead>
        <section class="input-group">
            <div class="input-row">
              <label>公司</label>
              <input type="text" id="company" placeholder="请选择公司" readonly="readonly" v-model="company">
              <a class="mui-navigate-right"></a>
            </div>
            <div class="input-row">
              <label>身份证号</label>
              <input id="idcard" type="text" placeholder="身份证号" maxlength="18" v-model="idcard"></label>
              <div type="button" class="mui-btn icon-scan"><span>扫证件</span></div>
            </div>
            <div class="input-row">
              <label>姓名</label>
              <input type="text" id="name" placeholder="姓名" v-model="username">
            </div>
            <div class="input-row">
              <label>手机号</label>
              <input type="tel" id="tel" placeholder="手机号" maxlength="11" v-model="phone">
            </div>
            <div class="input-row">
              <label>部门</label>
              <input type="text" id="department" placeholder="选填" readonly="readonly" v-model="department">
              <a class="mui-navigate-right"></a>
            </div>
        </section>
        <section class="tips">
            <p>※添加后系统将向该人员发起授权请求，获得授权后方可进行核查</p>
            <div class="btn-row">
              <div class="ta-btn">添加到人员列表</div>
            </div>
        </section>
    </div>
</template>
<script type="text/ecmascript-6">
  import Router from 'vue-router'
  import router from './../../router/router'
  import vHead from '@/components/common/header'
  import "./../../style/iconfont/iconfont.css"
      export default {
          data() {
              return  {
                company: "",
                companyId: "",
                companyHangye:"",
                idcard:"",
                username:"",
                phone:"",
                department:"",
                hc:false
              }
          },
          methods:{
          	back(){
              this.$router.go(-1)
            }
          },
          components: {
            vHead
          }
      }
</script>
<style>
  .icon-back{line-height: 1.3125rem}
  .input-group *{
    box-sizing: border-box;
  }
  .input-group{
    background-color: #fff;
  }
  .input-row {
    position: relative;
  }
  .input-row label {
    float: left;
    width: 28%;
    padding: 0.625rem 0.625rem 0.625rem 0.9375rem;
    text-align: left;
  }
  .input-row label~input{
    float: left;
    width: 65%;
    height: 40px;
    line-height: 20px;
    -webkit-appearance: none;
    -webkit-tap-highlight-color: transparent;
    font: inherit;
    margin: 0;
    color: inherit;
    border: none;
  }
  .input-row {
    clear: left;
    overflow: hidden;
  }
  .input-row .mui-btn {
    position: absolute;
    right: 0.9275rem;
    top: 3px;
    width: 20%;
    text-align: center;
    border: 0px;
    padding: 0;
    background-color: #289494;
    border-radius: 6px;
    color: #ffffff;
    height: 32px;
    font-size: 14px;
    line-height: 32px;
    text-align: center;
    padding-left: 14px;
  }
  .tips p{padding: 1rem;text-align: left}

</style>
