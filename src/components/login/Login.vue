<template>
  <div class="login-container">
    <div class="left" ref="left">
      <div class="mid">
        <h1>扫描二维码登录</h1>
        <div class="qrcode">
          <img src="@/assets/images/code.png" />
          <span></span>
        </div>
        <p>请使用<a href="">网易云客户端</a></p>
        <p>扫码登录或扫码下载APP</p>
      </div>
    </div>
    <div class="right">
      <div class="mid">
        <div class="login-type">
          <a href="#" @click="passwordLogin"
            ><h1 :class="{ active: isPasswordLogin }">密码登录</h1></a
          >
          <a href="#" @click="shortMsgLogin"
            ><h1 class="msg" :class="{ active: !isPasswordLogin }">
              短信登录
            </h1></a
          >
        </div>
        <!--  form表单 -->
        <form>
          <!-- 账号 -->
          <div class="form-control fuser">
            <input
              type="text"
              required
              autocomplete
              class=""
              @focus="userFocus"
              ref="userInput"
              v-model.trim="form.phone"
            />
            <label v-if="isPasswordLogin">
              <span style="transition-delay: 0ms">账</span>
              <span style="transition-delay: 100ms">号</span>
            </label>
            <label v-else>
              <span style="transition-delay: 0ms">手</span>
              <span style="transition-delay: 50ms">机</span>
              <span style="transition-delay: 100ms">号</span>
            </label>
            <a href="#" class="getCode" v-if="!isPasswordLogin">获取验证码</a>
          </div>
          <!-- 密码 / 验证码 -->
          <div class="form-control fpass">
            <input
              type="password"
              required
              autocomplete
              @focus="changeImg"
              @blur="back"
              ref="passInput"
              v-model.trim="form.password"
            />
            <label v-if="isPasswordLogin">
              <span style="transition-delay: 0ms">密</span>
              <span style="transition-delay: 100ms">码</span>
            </label>
            <label v-else>
              <span style="transition-delay: 0ms">验</span>
              <span style="transition-delay: 50ms">证</span>
              <span style="transition-delay: 100ms">码</span>
            </label>
            <div class="eye-and-forget" v-if="isPasswordLogin">
              <span
                class="eye iconfont icon-password-not-view"
                :class="{ 'icon-password-visible': isOpen }"
                @click="showPassword"
              ></span>
              <a href="#">忘记密码?</a>
            </div>
          </div>
          <div class="btns">
            <button class="btn login" @click.prevent="login">登录</button>
          </div>
          <p class="text">没有账号? 立即<a href="#">注册</a></p>
          <p class="other">其他方式登录</p>
          <div class="social-con">
            <ul class="social">
              <li>
                <a href="#"><i class="iconfont icon-weixin"></i></a>
              </li>
              <li>
                <a href="#"><i class="iconfont icon-QQ"></i></a>
              </li>
              <li>
                <a href="#"><i class="iconfont icon-weibo"></i></a>
              </li>
              <li>
                <a href="#"><i class="iconfont icon-youxiang1"></i></a>
              </li>
            </ul>
          </div>
          <div class="agree">
            <input type="checkbox" v-model="form.isChecked" />
            <span
              >同意<a href="">《服务条款》</a>
              <a href="">《隐私政策》</a>
              <a href="">儿童隐私政策</a></span
            >
          </div>
        </form>
      </div>
    </div>
  </div>
</template>
<script setup>
import "@/assets/images/22_close.png";
import "@/assets/images/33_close.png";
import { setAllCookies } from "@/utils/storage";
import { ref, onMounted, onBeforeMount, reactive } from "vue";
import { useRouter, useRoute } from "vue-router";
import { login as Login, user } from "@/store/index";
import { storeToRefs } from "pinia";
import { reqPhoneLogin } from "@/api/index";
import { handleCookie } from "@/utils/storage";
const route = useRoute(),
  router = useRouter();
const loginStore = Login();
const { isLogin } = storeToRefs(loginStore);
/* 数据 */
const form = reactive({
  phone: "",
  password: "",
  shortMessage: "",
  isChecked: false,
});
/* 样式 */
const left = ref(null);
const isPasswordLogin = ref(true);
const isOpen = ref(false);
const passInput = ref(null);
const userInput = ref(null);
const changeImg = () => {
  left.value.style.backgroundImage = `url("https://s1.hdslb.com/bfs/seed/jinkela/short/mini-login/img/22_close.0efad8c4.png"),
      url("https://s1.hdslb.com/bfs/seed/jinkela/short/mini-login/img/33_close.eea03c39.png")`;
};
const passwordLogin = () => {
  isPasswordLogin.value = true;
};
const shortMsgLogin = () => {
  isPasswordLogin.value = false;
};
const back = () => {
  left.value.style = "";
};
const showPassword = () => {
  isOpen.value = !isOpen.value;
  if (isOpen.value) {
    passInput.value.type = "text";
  } else {
    passInput.value.type = "password";
  }
};
const userLogin = () => {
  let timer;
  let timestamp = Date.now();
  const cookie = localStorage.getItem("cookie");
  loginStore.getLoginStatus(cookie); // 检查登录状态,做xxx校验
  loginStore.getQrKey(); // 获取二维码的key
  // .................
};
const userFocus = () => {};
/* 登录操作 */
const login = async () => {
  // 首先要点同意
  if (!form.isChecked) return alert("没勾选同意");
  // 验证是密码登录还是短信登录
  if (isPasswordLogin.value) {
    // 密码登录；验证手机号和密码;
    // 假如做了很多校验,要发请求了
    let { data } = await reqPhoneLogin(form.phone, form.password);
    if (data.code == 200) {
      loginStore.$patch((state) => {
        // 仓库里存了信息
        loginStore.cookie = data.cookie;
        loginStore.token = data.token;
        loginStore.profile = data.profile;
      });
      // 把 cookie持久化；这个cookie在需要登录权限的接口会用到；
      handleCookie("set", data.cookie);
      setAllCookies(data.cookie);
      localStorage.setItem("profile", JSON.stringify(data.profile));
      // 登录成功之后要做的事
      loginSuccess();
    } else if (data.code == 502) {
      alert(data.msg);
    }
  } else {
    // 是短信登录; 验证手机号和短信
  }
};
// 登录成功后
const loginSuccess = () => {
  // 把登录状态置为true
  isLogin.value = true;
  //路由跳转到首页;
  router.push("/");
};
onBeforeMount(() => {});
</script>
<style lang="scss" scoped>
.login-container {
  margin: 20px auto;
  width: 60%;
  height: 80%;
  color: #212121;
  display: flex;
  border-radius: 5px;
  a {
    color: #00a1d6;
  }
  h1 {
    font-size: 20px;
    margin-top: 20px;
    color: #000;
  }
  // 左边二维码部分
  .left {
    flex: 1;
    display: flex;
    justify-content: center;
    border-right: 1px solid #ccc;
    // background-color: #fff;
    background-color: #ffffff90;
    text-align: center;
    backdrop-filter: blur(20px);

    // 设置了2233背景
    background-image: url("@/assets/images/22_open.png"),
      url("@/assets/images/33_open.png");
    background-repeat: no-repeat;
    background-position: 0 100%, 100% 100%;
    background-size: 30%;
    .mid {
      width: 80%;
      margin: 30px auto;
      h1 {
        margin-bottom: 40px;
      }
      .qrcode {
        // margin-bottom: 15px;
        margin: 30px auto;
        position: relative;
        width: 200px;
        height: 200px;
        display: flex;
        justify-content: center;
        align-items: center;
        overflow: hidden;
        &::before {
          content: "";
          position: absolute;
          width: 300px;
          height: 300px;
          background-image: conic-gradient(
            transparent,
            transparent,
            transparent,
            #00a1d6
          );
          animation: animate 4s linear infinite;
        }
        &::after {
          content: "";
          position: absolute;
          width: 300px;
          height: 300px;
          background-image: conic-gradient(
            transparent,
            transparent,
            transparent,
            #00a1d6
          );
          animation: animate 4s linear infinite;
          animation-delay: -2s;
        }
        @keyframes animate {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }
        img {
          position: absolute;
          width: 98%;
          height: 98%;
          z-index: 5;
          border: 16px;
        }
      }
    }
  }
  // 右边登录注册部分
  .right {
    flex: 1;
    background-image: linear-gradient(
      to top,
      #fdcbf1 0%,
      #fdcbf1 1%,
      #e6dee9 100%
    );
    // 中间容器
    .mid {
      width: 80%;
      margin: 30px auto;
      // 两个登录方式的标题
      .login-type {
        text-align: center;
        a {
          display: inline-block;
          h1 {
            padding: 0px 14px;
            border-right: 1px solid rgb(157, 125, 125);
            &.msg {
              border: none;
            }
            &.active {
              color: #00a1d6;
            }
          }
        }
      }
      // 一组input样式
      .form-control {
        position: relative;
        margin: 30px 0px 30px 20px;
        width: 300px;
        &.fuser::before {
          content: "\e665";
          font-family: "iconfont";
          font-size: 20px;
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          left: -8%;
        }
        &.fpass::before {
          content: "\e663";
          font-family: "iconfont";
          font-size: 20px;
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          left: -8%;
        }
        .eye-and-forget {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          right: 2%;
          display: flex;
          align-items: center;
          .eye {
            margin-right: 10px;
          }
        }
        .getCode {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          right: 2%;
          border: 1px solid #00a1d6;
          padding: 2px 4px;
          border-radius: 4px;
        }
        input {
          background-color: transparent;
          border: 0;
          border-bottom: 2px #fff solid;
          display: block;
          width: 100%;
          padding: 10px 0;
          font-size: 18px;
        }
        input:focus,
        input:valid {
          border-bottom-color: lightblue;
        }
        input:focus + label span,
        input:valid + label span {
          color: #00a1d6;
          transform: translateY(-30px);
          font-size: 16px;
        }
        label {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
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
      //登录的按钮
      .btns {
        .login {
          position: relative;
          display: block;
          cursor: pointer;
          border-radius: 10px;
          width: 100%;
          padding: 10px 20px;
          background-image: linear-gradient(to left, #74ebd5 0%, #9face6 100%);
          background-color: #ccc;
          font-size: 20px;
          text-align: center;
          color: #fff;
          &:active {
            transform: scale(0.98);
          }
        }
      }
      .text {
        margin: 20px 0 16px 0px;
      }
      .other {
        text-align: center;
        color: #999999;
      }
      // 其他方式登录的一组图标
      .social-con {
        position: relative;
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100px;
        .social {
          position: absolute;
          display: flex;
          z-index: 2;
          li {
            position: relative;
            margin: 10px;
            a {
              position: relative;
              width: 50px;
              height: 50px;
              display: inline-block;
              border-radius: 10px;
              display: flex;
              justify-content: center;
              align-items: center;
              border: 1px solid rgba(255, 255, 255, 0.4);
              border-right: 1px solid rgba(255, 255, 255, 0.2);
              border-bottom: 1px solid rgba(255, 255, 255, 0.2);
              box-shadow: 0px 5px 45px rgba(0, 0, 0, 0.1);
              backdrop-filter: blur(20px);
              transition: all 0.5s;
              overflow: hidden;
              i {
                font-size: 30px;
              }
              // 扫光动画
              &::before {
                content: "";
                position: absolute;
                top: 0px;
                left: 0px;
                width: 20px;
                height: 100%;
                background-color: #fff;
                // 元素沿x轴45横切，沿x轴右移100px
                transform: skewx(45deg) translateX(70px);
                transition: all 0.5s;
              }
              &:hover {
                transform: translateY(-20px);
              }
              &:hover::before {
                transform: skewx(45deg) translateX(-70px);
              }
            }
          }
        }
      }
      .agree {
        display: flex;
        align-items: center;
        input {
          margin-right: 4px;
          // border: none;
          border-radius: 50%;
        }
      }
    }
  }
}
</style>
