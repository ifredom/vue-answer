<template>
    <div class="ta-login ta-form">
        <div class="ta-logo">
            <img class="ta-logo-img" src="../image/logo.jpg" alt="logo">
            <span class="mainName">Answer</span>
            <span class="nameExprie">[找你所需]</span>
        </div>
        <div class="crl-input-row">
            <input type="text" id="uname" class="crl-input" v-model="loginRule.username" autocapitalize="off" auto-complete="off" placeholder="手机号/邮箱"
            />
            <label>username:</label>
        </div>
        <div class="crl-input-row">
            <input type="password" id="pwd" class="crl-input" v-model="loginRule.password" auto-complete="off" placeholder="密码" />
            <label>password:</label>
        </div>
        <div class="crl-input-row">
            <input type="button" class="crl-button" @click="login" tapmode="tap-active" value="Sign in" />
        </div>
        <div class="crl-text-row">
            <div class="text-forget" @click="forgetpassword">Forgot password?</div>
        </div>
        <div class="crl-text-row">
            <div class="text-signup" @click="otherLogin">New here?Sign up</div>
        </div>
        <div class="line"></div>
        


    </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import {Toast} from 'mint-ui'
import {Login} from '@/api'
import axios from 'axios'
import Qs from 'qs'
export default {
    data() {
        return {
            logining: false,
            loginRule: {
                username: 'ifredom',
                password: '111111'
            },
        };
    },
    computed:{
        ...mapGetters([
			'getCount'
		])
    },
    methods: {
        login() {
            let payload ={
                username: this.loginRule.username,
                password:this.loginRule.password
            }
            Login(payload).then((response) => {
                console.log(response)
                if(response.statusCode=='200'){
                    this.$router.push({ path: '/home' })
                    this.$store.dispatch('loginState',true)
                    this.$store.dispatch('count')
                }else{
                    Toast('登录失败')
                }
            })
        },
        otherLogin() {
            alert("其他登录方式，还未出生哦")
        },
        forgetpassword() {
            alert("忘记密码，等你来画")
        }
    }
}
</script>

<style scoped>
    .ta-login {
        width: 100%;
        height: 100%;
        background-image: url(../image/loginbg.png);
        background-repeat: no-repeat;
        background-size: 100% 100%;
    }
    
    .ta-logo {
        position: relative;
        min-height: 6.5rem;
        text-align: left;
        padding-left: 12%;
        padding-top: 3.9125rem;
        padding-bottom: 3.9125rem;
    }
    
    .ta-logo-img {
        position: absolute;
        left: 12%;
        top: 3.9125rem;
        height: 3.5rem;
        width: 3.5rem;
        border-radius: 50%;
        overflow: hidden;
    }
    
    .ta-logo .mainName {
        display: inline-block;
        margin-right: 5%;
        margin-left: 3.7rem;
        width: 30%;
        font-style: italic;
        font-size: 34px;
        color: #fff;
    }
    
    .ta-logo .nameExprie {
        display: inline-block;
        font-size: 14px;
        color: #fff;
    }
    
    .crl-input {
        background-color: #fff;
        width: 100%;
        box-shadow: inset 0 1px 1px #f0eff5;
        color: #fff;
        -webkit-appearance: none;
        user-select: text;
        -webkit-user-select: text;
        padding: 10px 10px;
        margin-bottom: 15px;
        line-height: 21px;
        background-color: rgba(191, 191, 191, 0.5);
        opacity: 0.5;
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
        background-color: #eacb20;
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
    
    .crl-input-row {
        position: relative;
        margin-bottom: 2rem;
    }
    
    .crl-input-row label {
        display: block;
        position: absolute;
        left: 1rem;
        top: 0;
        opacity: 0;
        margin-left: 10%;
        color: #e2e2e2;
        transition: all 0.7s;
    }
    
    .crl-input-row input {
        display: block;
        margin: 0 auto;
        width: 76%;
        color: #fff;
        transition: all 0.7s;
    }
    
    .crl-input-row input:focus {
        margin-top: 1.2rem;
        margin-bottom: 1.2rem;
    }
    
    .crl-input-row input:focus+label {
        opacity: 1;
        top: -1.8rem;
    }
    
    .line {
        position: absolute;
        left: 10%;
        bottom: 15%;
        margin: 0 auto;
        width: 80%;
        height: 2px;
        background-color: #757474;
    }
    
    .text-forget {
        color: #999999;
    }
    
    .text-signup {
        position: absolute;
        left: 10%;
        bottom: 10%;
        width: 80%;
        text-align: center;
        color: #999999;
    }
</style>