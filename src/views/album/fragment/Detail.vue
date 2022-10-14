<template>
  <div class="detail">
    <div class="title">专辑介绍</div>
    <p v-for="item in txtArr">{{ item }}</p>
  </div>
</template>
<script setup>
import { album } from "@/store/index.js";
import { formatTxt } from "@/utils/Format/format";
const albumStore = album();
const txtArr = formatTxt(albumStore.description);
</script>
<style lang="scss" scoped>
.title {
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 10px;
}
P {
  text-indent: 3rem;
  line-height: 2.6rem;
  font-size: 1.4rem;
  color: #676767;
  margin-bottom: 4px;
}
</style>
