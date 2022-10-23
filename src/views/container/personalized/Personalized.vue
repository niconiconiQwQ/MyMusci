<template>
  <!-- 轮播图 -->
  <Banner></Banner>
  <!-- 推荐模块 -->
  <Recommend></Recommend>
  <!-- 独家放送模块 -->
  <Exclusive></Exclusive>
  <!-- 最新音乐模块 -->
  <Latest></Latest>
  <!-- 推荐MV -->
  <MV></MV>
  <!-- 听听模块 -->
  <Listen></Listen>
</template>

<script setup>
import Banner from "@/views/container/personalized/fragment/Banner";
import Recommend from "@/views/container/personalized/fragment/Recommend";
import Exclusive from "@/views/container/personalized/fragment/Exclusive";
import Latest from "@/views/container/personalized/fragment/Latest";
import MV from "@/views/container/personalized/fragment/MV";
import Listen from "@/views/container/personalized/fragment/Listen";
</script>

<style lang="scss" scoped>
:deep(.title-mode) {
  display: flex;
  align-items: center;
  margin-bottom: 12px;
  h1 {
    font-size: 20px;
    font-weight: 700;
  }
  span {
    font-size: 28px;
  }
}
</style>
