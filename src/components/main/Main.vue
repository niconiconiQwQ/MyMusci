<template>
  <div class="center" id="main">
    <SideBar></SideBar>
    <router-view v-slot="{ Component }">
      <transition
        name="slide-fade"
        mode="out-in"
        :duration="{ enter: 500, leave: 300 }"
      >
        <component :is="Component" />
      </transition>
    </router-view>
  </div>
</template>

<script setup>
import SideBar from "@/components/main/sidebar/SideBar";
</script>

<style lang="scss" scoped>
.center {
  display: flex;
  height: 682px;
  border-bottom: 1px solid var(--border-color);
  background-color: var(--white);
  .slide-fade-enter-from {
    transform: translateX(-20px);
    opacity: 0;
  }

  .slide-fade-enter-to {
    transform: translateX(0px);
  }

  .slide-fade-leave-from {
    transform: translateX(0);
  }

  .slide-fade-leave-to {
    transform: translateX(20px);
    opacity: 0;
  }

  .slide-fade-enter-active,
  .slide-fade-leave-active {
    transition: all 0.3s;
  }
}
</style>
