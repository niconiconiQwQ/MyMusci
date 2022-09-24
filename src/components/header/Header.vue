<template>
  <div class="header">
    <!-- 左侧三个点 -->
    <div class="logo" @click="gohome">
      <div class="circle one"></div>
      <div class="circle two"></div>
      <div class="circle three"></div>
    </div>
    <!-- 两个切换按钮 -->
    <div class="switch">
      <div class="circle pre iconfont icon-left"></div>
      <div class="circle next iconfont icon-right"></div>
    </div>
    <!-- 搜索栏 -->
    <div class="search-bar">
      <input class="search" type="text" name="" id="" placeholder="Search" />
    </div>
    <!-- 麦克风图标 -->
    <div class="listen iconfont icon-microphone"></div>
    <!-- 我的头像 -->
    <div class="avatar">
      <router-link to="/user">
        <img src="@/assets/images/avatar2.png" alt="" />
      </router-link>
    </div>
    <!-- 昵称，会员 -->
    <div class="info" @click.stop="infoShow">
      <div class="center">
        <a href="javascript:;" class="name">凉宫柚希</a>
        <img src="@/assets/images/vip.png" alt="" />
        <span class="iconfont icon-up"></span>
      </div>
      <div class="myinfo" v-show="isInfoShow" @click.stop="">
        <Info></Info>
      </div>
    </div>
    <!-- 右侧的一些图标 -->
    <div class="setting">
      <div class="center">
        <span class="iconfont icon-pifuzhuti-xianxing">
          <div class="skin">
            <Skin></Skin>
          </div>
        </span>
        <span class="iconfont icon-shezhi"> </span>
        <span class="iconfont icon-youxiang" @click.stop="emailShow">
          <div class="email" v-show="isEmailShow" @click.stop="">
            <Email></Email>
          </div>
        </span>
        <span class="iconfont icon-fullscreen-enter"></span>
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref, onMounted } from "vue";
import Info from "@/components/header/Info";
import Email from "@/components/header/Email";
import Skin from "@/components/header/Skin";
import { useRouter, useRoute } from "vue-router";
const router = useRouter();
const route = useRoute();
let isInfoShow = ref(false);
let isEmailShow = ref(false);
const infoShow = () => {
  isInfoShow.value = !isInfoShow.value;
};
const emailShow = () => {
  isEmailShow.value = !isEmailShow.value;
};
const gohome = () => {
  router.push("/");
};
onMounted(() => {
  document.addEventListener("click", () => {
    isInfoShow.value = false;
    isEmailShow.value = false;
  });
});
</script>

<style lang="scss" scoped>
.header {
  // background-image: linear-gradient(-20deg, #dcb0ed 0%, #99c99c 100%);
  // 毛玻璃 不要用 会出现信息框被遮挡问题
  // backdrop-filter: blur(200px);
  background-color: #38b2ae;
  width: 100%;
  height: 62px;
  padding: 14px 26px 14px 20px;
  display: flex;
  align-items: center;
  color: var(--header-font-color);
  // 左侧三个点 logo
  .logo {
    width: 126px;
    height: 100%;
    margin-right: 8%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    cursor: pointer;
    .circle {
      width: 16px;
      height: 16px;
      border-radius: 50%;
      background-color: #389cb2;
      &.one {
        background-color: #b8cbb8;
      }
      &.two {
        background-color: #b465da;
      }
      &.three {
        background-color: #ee609c;
      }
    }
  }
  // 左右按钮
  .switch {
    width: 64px;
    height: 100%;
    margin-right: 30px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .circle {
      height: 18px;
      width: 18px;
      border-radius: 50%;
      background-color: #8baaaa80;
      cursor: pointer;
      &.pre {
        margin-right: 6px;
      }
      &:hover {
        color: #fff;
      }
    }
  }
  // 搜索栏
  .search-bar {
    width: 230px;
    height: 100%;
    border-radius: 10px;
    padding-left: 8px;
    color: #fff;
    background-color: #8baaaa80;
    margin-right: 12px;
    display: flex;
    align-items: center;
    &:before {
      font-family: "iconfont";
      content: "\e61f";
    }
    &:hover {
      color: #fff;
    }
    .search {
      width: 100%;
      font-size: 10px;
      height: 100%;
      border: none;
      color: #fff;
      padding-left: 6px;
      background-color: transparent;
      &::-webkit-input-placeholder {
        color: var(--header-font-color);
      }
    }
  }
  // 麦克风
  .listen {
    height: 100%;
    width: 36px;
    border-radius: 24px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #8baaaa80;
    cursor: pointer;
    margin-right: 24%;
    &:hover {
      color: #fff;
    }
  }
  // 头像
  .avatar {
    width: 34px;
    overflow: hidden;
    border-radius: 50%;
    margin-right: 4px;
    a {
      img {
        width: 100%;
      }
    }
  }
  // 个人信息 头像 名字 会员
  .info {
    width: 124px;
    height: 100%;
    display: flex;
    align-items: center;
    margin-right: 1%;
    position: relative;
    z-index: 1;
    .center {
      height: 12px;
      font-size: 12px;
      color: #b1d8e0;
      display: flex;
      align-items: center;
      .name {
        color: var(--header-font-color);
        &:hover {
          color: #fff;
        }
      }
      img {
        margin-left: 4px;
        height: 100%;
        width: 30px;
        cursor: pointer;
      }
      .iconfont {
        font-size: 26px;
      }
      &:hover,
      &:hover .iconfont,
      a {
        color: #fff;
      }
    }
    // 点击出现的信息栏
    .myinfo {
      position: absolute;
      top: 47px;
      left: -112px;
    }
  }
  // 右侧设置图标
  .setting {
    width: 160px;
    height: 100%;
    z-index: 1;
    .center {
      transform: translateY(25%);
      width: 100%;
      height: 20px;
      display: flex;
      justify-content: space-around;
      .iconfont {
        font-size: 18px;
        &:hover {
          color: #fff;
        }
      }
      // 皮肤
      /*       .skin {
        width: 100px;
        height: 200px;
        background: #000;
        position: absolute;
        z-index: 10;
      } */
      .email {
        cursor: default;
        position: absolute;
        width: 360px;
        height: 681px;
        // height: 77vh;
        left: -150px;
        top: 42px;
      }
    }
  }
}
</style>