<template>
  <div class="login-container">
    <div class="left">
      <div class="content">
        <h1>扫描二维码登录</h1>
        <img
          src="@/assets/images/code.png
        "
          alt=""
        />
        <p>请使用<a href="">网易云客户端</a></p>
        <p>扫码登录或扫码下载APP</p>
      </div>
    </div>
    <div class="right">
      <div class="login-type">
        <a href="#" class="pass active"><h1>密码登录</h1></a>
        <a href="#"><h1>短信登录</h1></a>
      </div>

      <form>
        <div class="form-control fu">
          <input type="text" required autocomplete class="" />
          <label>
            <span style="transition-delay: 0ms">账</span>
            <span style="transition-delay: 100ms">号</span>
          </label>
        </div>

        <div class="form-control fp">
          <input type="password" required autocomplete />
          <label ref="labels2">
            <span style="transition-delay: 0ms">密</span>
            <span style="transition-delay: 100ms">码</span>
          </label>
        </div>
        <div class="btns">
          <!-- <button class="btn register">注册</button> -->
          <div class="btn login">登录</div>
        </div>
        <p class="text">没有账号? 立即<a href="#">注册</a></p>
      </form>
    </div>
  </div>
</template>
<script setup>
import { ref, onMounted, onBeforeMount } from "vue";
import { useRouter, useRoute } from "vue-router";
const labels1 = ref(null);
const labels2 = ref(null);
let arr = [];
onBeforeMount(() => {});
onMounted(() => {});
</script>
<style lang="scss" scoped>
.login-container {
  margin: 20px auto;
  width: 60%;
  height: 80%;
  color: #212121;
  display: flex;
  background-color: #fff;
  padding: 20px 40px;
  border-radius: 5px;
  // 设置了2233背景
  background-image: url("@/assets/images/22_open.png"),
    url("@/assets/images/33_open.png");
  background-repeat: no-repeat;
  background-position: 0 100%, 100% 100%;
  background-size: 20%;
  h1 {
    font-size: 20px;
  }
  a {
    color: #00a1d6;
  }
  .left {
    flex: 1;
    display: flex;
    justify-content: center;
    border-right: 1px solid #ccc;
    margin-right: 30px;
    text-align: center;
    .content {
      margin: 10px auto;
      h1 {
        margin-bottom: 30px;
      }
      img {
        margin-bottom: 10px;
      }
    }
  }
  .right {
    flex: 1;
    .login-type {
      text-align: center;
      a {
        display: inline-block;
        padding: 0px 14px;
        &.pass {
          border-right: 1px solid rgb(157, 125, 125);
        }
        &.active {
          color: #000;
        }
      }
    }
    .btns {
      .login {
        position: relative;
        display: block;
        cursor: pointer;
        border-radius: 10px;
        width: 100%;
        padding: 10px 20px;
        background-color: #add8e6;
        font-size: 20px;
        text-align: center;
        &:active {
          transform: scale(0.98);
        }
      }
    }
    .text {
      margin-top: 30px;
    }
    .form-control {
      position: relative;
      margin: 20px 0 40px;
      width: 300px;
      &.fu::before {
        content: "\e665";
        font-family: "iconfont";
        font-size: 20px;
        position: absolute;
        top: 52%;
        transform: translateY(-50%);
        left: -8%;
      }
      &.fp::before {
        content: "\e663";
        font-family: "iconfont";
        font-size: 20px;
        position: absolute;
        top: 52%;
        transform: translateY(-50%);
        left: -8%;
      }
      input {
        background-color: transparent;
        border: 0;
        border-bottom: 2px #fff solid;
        display: block;
        width: 100%;
        padding: 15px 0;
        font-size: 18px;
      }
      input:focus,
      input:valid {
        border-bottom-color: lightblue;
      }
      input:focus + label span,
      input:valid + label span {
        color: lightblue;
        font-weight: 600;
        transform: translateY(-30px);
      }
      label {
        position: absolute;
        top: 15px;
        left: 0;
        pointer-events: none;
        span {
          display: inline-block;
          font-size: 18px;
          min-width: 5px;
          transition: 0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55);
        }
      }
    }
  }
}
</style>
