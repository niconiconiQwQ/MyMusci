<template>
  <div class="latest ctn-mode">
    <!-- 顶部标题导航组件 -->
    <TopNav></TopNav>
    <div class="toggle">
      <router-link to="/main/latest/songs">新歌速递</router-link>
      <router-link to="/main/latest/albums">新碟上架</router-link>
    </div>
    <router-view v-slot="{ Component }">
      <transition name="scale" mode="out-in">
        <component :is="Component" />
      </transition>
    </router-view>
  </div>
</template>

<script setup>
import TopNav from "@/components/topNav/TopNav";
</script>

<style lang="scss" scoped>
.latest {
  .toggle {
    width: 230px;
    height: 32px;
    border-radius: 32px;
    margin: 10px auto;
    border: 1px solid #bbbbbb;
    a {
      display: inline-block;
      height: 100%;
      border-radius: 32px;
      width: 50%;
      border: none;
      background-color: #fff;
      color: #373737;
      cursor: pointer;
      text-align: center;
      line-height: 32px;
      &.router-link-active {
        background-color: #bbbbbb;
        color: #fff;
      }
    }
  }
  .scale-enter-active,
  .scale-leave-active {
    transition: all 0.5s ease;
  }

  .scale-enter-from,
  .scale-leave-to {
    opacity: 0;
    transform: scale(0.9);
  }
}
</style>
