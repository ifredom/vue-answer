<template>
    <div class="ta-form">
      <div class="ta-banner"><img src="../image/logo.jpg" alt="logo"></div>
      <div class="crl-input-row">
        <label>用户名:</label>
        <input type="text" id="uname" class="crl-input" v-model="loginRule.account" autocapitalize="off" auto-complete="off" placeholder="手机号登录"/>
      </div>
      <div class="crl-input-row">
        <label>密码:</label>
        <input type="password" id="pwd" class="crl-input" v-model="loginRule.password" auto-complete="off" placeholder="密码"/>
      </div>
      <div class="crl-text-row">
        <div class="text-forget" @click="goForget">忘记密码?</div>
        <div class="pass-sms-login" @click="goSmsLogin">新用户注册</div>
      </div>
      <div class="crl-input-row">
        <input type="button" class="crl-button" @click="login" tapmode="tap-active" value="登录"/>
      </div>
    </div>
</template>

<script>
  import { mapState,mapActions } from 'vuex';
  import { requestLogin } from '@/api/api'
  export default {
      data() {
          return {
            logining: false,
            loginRule: {
              account: 'admin',
              password: '123456'
            },
          };
      },
      computed:mapState({
        count:state => state.count
      }),
      methods:{
          login(){

          	  var params = {
          	  	user: this.loginRule.account,
                password: this.loginRule.password
              }
              //登录
              requestLogin(params).then((ret) => {
                  if(ret.status==200){// ret就是服务器返回的东东，根据ret做出对应的反应
                      console.log(res)
                  }else{
                      console.log(error)
                  }
              });
              // TODO 登陆后跳转，本来应该放在上面的ret.status==200中，不过显然地址不存在会报错，所以在这里强行跳转
              this.$router.push({ path: '/home' });
              // TODO 测试vuex,登录一次，增加count计数
              this.$store.dispatch('increment')
          },
          goForget(){
          	  console.log("进入忘记密码页面")
          },
          goSmsLogin(){
            console.log("进入短信登录页面")
          }
      }
  }

</script>

<style scoped>
  *{ box-sizing: border-box;}
  input[type=button],
  input[type=submit],
  input[type=file],
  button {
    cursor: pointer; -webkit-appearance: none;
  }
  .ta-form {
    padding: 44px 10%;
  }
  .crl-input {
    background-color: #fff;
    width: 100%;
    box-shadow: inset 0 1px 1px #f0eff5;
    color: #333333;
    -webkit-appearance: none;
    -webkit-user-select: text;
    padding: 10px 10px;
    margin-bottom: 15px;
    line-height: 21px;
    background-color: #F0F8FF;
    border: none;
    border-radius: 4px;
    border-bottom: 1px solid #ccc;
    outline: none;
    -webkit-tap-highlight-color: transparent;
  }
  .crl-button {
    display: block;
    text-align: center;
    font-size: 20px;
    background-color: #6495ED;
    width: 100%;
    border: none;
    border-radius: 4px;
    padding: 10px 0;
    color: #ffffff;
    font-weight: bold;
  }
  .crl-text-row {
    margin: 10px auto;
    width: 100%;
    display: flex;
    display: -webkit-box;
    box-sizing: border-box;
    justify-content: center;
    height: 34px;
  }

  .crl-input-row label{
    display: none;
    width: 20%;
  }
  .crl-input-row input:focus{
    display: inline-block;
    width: 72%;
  }

  .ta-banner{
    margin:0 auto 0.9375rem auto;
    width: 6.5rem;
    height: 6.5rem;
    border-radius: 50%;
    overflow: hidden;
  }
  .ta-banner img{
    width: 100%;
  }
  .text-forget,.pass-sms-login{
    width: 50%;
    text-align: center;
    color: 		#4169E1;
    width: 100%;
    height: 24px;
    line-height: 24px;
    font-size: 15px;
    font-weight: bold;
    box-flex: 1;
    -webkit-box-flex: 1;
    box-sizing: border-box;
  }
</style>
