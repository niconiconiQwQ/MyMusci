<template>
  <div class="container ctn-mode">
    <!-- 顶部标题导航组件 -->
    <TopNav></TopNav>
    <Personalized></Personalized>
    <router-view></router-view>
  </div>
</template>

<script>
import { ref, reactive, computed } from "vue";
import TopNav from "@/views/container/topNav/TopNav";
import Personalized from "@/views/container/personalized/Personalized.vue";
export default {
  components: {
    TopNav,
    Personalized,
  },
};
</script>

<style lang="scss" scoped>
.container {
}
</style>