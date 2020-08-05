<template>
  <div class='login-page'> 
    <div class="login-header">
      <img class="login-logo" :src="require('@/assets/image/login_logo.png')" alt="" />
      <div class="login-title">商家中心登录</div>
    </div>
    <div class="login-content">
      <div class='input-group'>
        <div class='input-item'>
          <div class='input-icon'>
            <span class='icon icon-zhanghao'></span>
          </div>
          <div class='input'>
            <input type="text" placeholder='输入手机号' autoComplete='off' />
          </div>
        </div>
      </div>
      <div class='input-group'>
        <div class='input-item'>
          <div class='input-icon'>
            <span class='icon icon-iconfontmima'></span>
          </div>
          <div class='input'>
            <input type="password" placeholder='输入密码' autoComplete='off' />
          </div>
          <div class='input-error'>
            <span class='err-text'>密码错误</span>
            <span class='err-btn icon icon-x'></span>
          </div>
        </div>
      </div>
      <div class='input-btn'>
        <span @click="login">登录</span>
      </div>
    </div>
    <div class="login-footer">
      登录即代表阅读并同意<router-link to='/public/treaty' class='a'>服务条款</router-link>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Merchant',
  data(){
    return {


    }
  },
  methods: {
    login(){
      this.$router.push('/')
    }
  }
}
</script>
<style lang="less" scoped>
// @import url(./index.scss);
.login-page {
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  width:100%;
  height: 100%;
  background-image: url(../../assets/image/login_bg.jpg);
  .login-header{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding-top: 44px;
    .login-logo{
      width: 160px;
      height: 68px;
      vertical-align: middle;
    }
    .login-title{
      margin-top: 18px;
      line-height: 25px;
      font-family:PingFangSC-Medium,PingFang SC;
      font-weight: 500;
      font-size: 18px;
      color:#fff;
    }
  }
  .login-content{
    .input-group{
      padding: 0 20px;
      .input-item{
        position: relative;
        display: flex;
        align-items: center;
        height: 40px;
        padding: 0 5px;
        color: #fff;
        margin-top: 63px;
        &::after{
          position: absolute;
          left: 0;
          right: 0;
          bottom: -3px;
          content: '';
          border-bottom: 1px solid rgba(255, 255, 255, .4);
        }
        .input-icon{
          margin-right: 20px;
        }
        .input{
          flex: 1;
          position: relative;
          height: 100%;
          input{
            position: absolute;
            left: 0;
            top: 0;
            width: 100%;
            height: 100%;
            border: none !important;
            background-color: rgba(255, 255, 255, 0) !important;
            outline: none !important;
            &::placeholder{
              color: rgba(255, 255, 255, .7);
            }
          }
        }
        // err
        .input-error{
          .err-text{
            position: relative;
            display: inline-block;
            padding: 0 15px;
            font-size: 12px;
            color:rgba(255, 255, 255, .7);
            margin-left: 15px;
            &::before{
              position: absolute;
              left: 0;
              top: 2px;
              bottom: 2px;
              content: '';
              border-left: 1px solid rgba(255, 255, 255, .7);
            }
          }
          .err-btn{
            font-size: 14px;
          }
        }
      }
    }
    // 登录
    .input-btn{
      display: flex;
      justify-content: center;
      align-items: center;
      height: 44px;
      font-weight: 400;
      font-size: 18px;
      color:#B73C64;
      line-height: 25px;
      border-radius: 12px;
      background: #fff;
      border: 1px solid #fff;
      text-shadow: 0px 2px 4px rgba(34,43,106,0.1);
      margin: 93px 34px 0;

    }
  }
  .login-footer{
    padding: 12px 0;
    text-align: center;
    line-height: 17px;
    font-weight: 400;
    font-size: 12px;
    color:#fff;
    margin-top: 123px;
    .a{
      color: #FFD739;
    }
  }
}
</style>