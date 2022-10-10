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
      <div class="circle pre iconfont icon-left" @click="goback"></div>
      <div class="circle next iconfont icon-right" @click="forword"></div>
    </div>
    <!-- 搜索栏 -->
    <div class="search-bar">
      <input
        class="search"
        type="text"
        :placeholder="SearchStore.defaultKeyword || 'Search'"
        @focus="getSearch"
        v-model="keywords"
      />
      <div class="searchList" v-show="isSearchShow">
        <SearchList :keywords="keywords"></SearchList>
      </div>
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
import Info from "@/components/header/Info";
import Email from "@/components/header/Email";
import Skin from "@/components/header/Skin";
import SearchList from "@/components/header/SearchList";
import { ref, onMounted, watch } from "vue";
import { useRouter, useRoute } from "vue-router";
import { Search } from "@/store/index";
const SearchStore = Search();
const router = useRouter();
const route = useRoute();
const isInfoShow = ref(false);
const isEmailShow = ref(false);
const isSearchShow = ref(false);
const keywords = ref("");
const search = ref();
watch(
  () => keywords.value,
  (newVal, oldVal) => {
    // 得做防抖
    // 去发请求
    console.log("改了", newVal);
    SearchStore.getSearchHot();
    SearchStore.getSearchSuggest(newVal);
    SearchStore.getHotSingle();
  }
);
SearchStore.getDefault();
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
    isSearchShow.value = false;
  });
});
// 进退按钮功能
const forword = () => {
  router.go(1);
};
const goback = () => {
  router.go(-1);
};
const getSearch = () => {
  // 有问题
  isSearchShow.value = true;
  SearchStore.getDefault();
};
</script>

<style lang="scss" scoped>
.header {
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
    // 三个圈
    .circle {
      width: 16px;
      height: 16px;
      border-radius: 50%;
      &.one {
        background-color: #a9dea9;
      }
      &.two {
        background-color: #cb95e3;
      }
      &.three {
        background-color: #ea80ac;
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
      height: 24px;
      width: 24px;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 50%;
      background-color: #36aba790;
      cursor: pointer;
      font-size: 2.2rem;
      &.pre {
        margin-right: 6px;
      }
      &:hover {
        color: var(--white);
      }
    }
  }
  // 搜索栏
  .search-bar {
    position: relative;
    width: 230px;
    height: 100%;
    border-radius: 10px;
    padding-left: 8px;
    color: #fff;
    background-color: #36aba790;
    margin-right: 12px;
    display: flex;
    align-items: center;
    &::before {
      content: "\e61f";
      font-family: "iconfont";
      font-size: 2rem;
      color: var(--header-font-color);
    }
    &:hover {
      color: #fff;
    }
    .search {
      width: 100%;
      font-size: 1rem;
      height: 100%;
      border: none;
      color: #fff;
      padding-left: 6px;
      background-color: transparent;
      &::-webkit-input-placeholder {
        color: var(--header-font-color);
      }
    }
    .searchList {
      position: absolute;
      top: 24px;
      left: -30px;
      z-index: 3;
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
      font-size: 1.2rem;
      color: #b1d8e0;
      display: flex;
      align-items: center;
      .name {
        color: var(--header-font-color);
        &:hover {
          color: var(--white);
        }
      }
      img {
        margin-left: 4px;
        height: 100%;
        width: 30px;
        cursor: pointer;
      }
      .iconfont {
        font-size: 2.6rem;
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
        font-size: 1.8rem;
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
