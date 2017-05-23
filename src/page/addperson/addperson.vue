<template>
    <div>
        <vHead fixed titles="添加萌物">
            <div class="ta-left" slot="back" @click="back">
              <span class="icon iconfont icon-back" ></span>
            </div>
        </vHead>
        <section class="input-group">
            <div class="input-row">
              <label>品种</label>
              <input type="text" id="company" placeholder="猫？狗？或者..." readonly="readonly" v-model="type">
              <a class="mui-navigate-right"></a>
            </div>
            <div class="input-row">
              <label>尺寸</label>
              <input id="apart" type="text" placeholder="喜欢就好" maxlength="18" v-model="apart">
              <div type="button" class="mui-btn icon-scan"><span>乱入</span></div>
            </div>
            <div class="input-row">
              <label>名字</label>
              <input type="text" id="name" placeholder="名字" v-model="username">
            </div>
            <div class="input-row">
              <label>联系一下</label>
              <input type="tel" id="tel" placeholder="手机号" maxlength="11" v-model="phone">
            </div>
            <div class="input-row">
              <label>部门</label>
              <input type="text" id="department" placeholder="选填" readonly="readonly" v-model="department">
              <a class="mui-navigate-right"></a>
            </div>
        </section>
        <section class="tips">
            <div class="btn-row">
              <div class="ta-btn">添加到萌物大家庭</div>
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
                type: "",
                typeId: "",
                typeHangye:"",
                apart:"",
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
    background-color:	#8B4513;
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
