<template>
  <div>专辑; 数据还没做</div>
</template>
<script setup>
import { ref, onMounted, onBeforeMount } from "vue";
import { useRouter, useRoute } from "vue-router";
import { artistListStore } from "@/store/artist";
const ArtistListStore = artistListStore();
onBeforeMount(() => {
  ArtistListStore.getArtistTopSong(ArtistListStore.id);
  ArtistListStore.getArtistAlbum(ArtistListStore.id, 10);
});
onMounted(() => {
  console.log(ArtistListStore.hotAlbums);
});
</script>
<style lang="scss" scoped></style>
