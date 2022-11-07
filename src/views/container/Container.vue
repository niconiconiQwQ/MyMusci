<template>
  <div class="container ctn-mode">
    <!-- 顶部标题导航组件 -->
    <TopNav></TopNav>
    <Personalized></Personalized>
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
  </div>
</template>

<script setup>
import TopNav from "@/components/topNav/TopNav";
import Personalized from "@/views/container/personalized/Personalized.vue";
</script>

<style lang="scss" scoped></style>
