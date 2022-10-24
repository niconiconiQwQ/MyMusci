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
import { ref, reactive, computed } from "vue";
import TopNav from "@/views/container/topNav/TopNav";
import Personalized from "@/views/container/personalized/Personalized.vue";
</script>

<style lang="scss" scoped></style>
