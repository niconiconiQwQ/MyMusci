<template>
  <div>歌词</div>
</template>
<script setup>
import { ref, onMounted, onBeforeMount, defineProps, watch } from "vue";
import { useRouter, useRoute } from "vue-router";
import { xxxStore } from "@/store/index";
import { storeToRefs } from "pinia";
const route = useRoute(),
  router = useRouter();
onBeforeMount(() => {});
onMounted(() => {});
</script>
<style lang="scss" scoped></style>
