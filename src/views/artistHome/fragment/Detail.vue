<template>
  <div>歌手详情</div>
</template>
<script setup>
import { ref, onMounted, onBeforeMount } from "vue";
import { useRouter, useRoute } from "vue-router";
import { desc } from "@/store/artist";
const DescStore = desc();
onBeforeMount(() => {
  // DescStore
  console.log(useRouter);
});
onMounted(() => {});
</script>
<style lang="scss" scoped></style>
