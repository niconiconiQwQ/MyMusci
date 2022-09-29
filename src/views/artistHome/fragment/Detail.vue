<template>
  <div class="artist-detail">
    <div class="item">
      <h3>{{ ArtistListStore.name }}简介</h3>
      <p>{{ ArtistListStore.briefDesc }}</p>
    </div>
    <div
      class="item"
      v-for="(item, index) in ArtistListStore.descList"
      :key="index"
    >
      <h3>{{ item.ti }}</h3>
      <p v-for="(txtItem, index) in formatTxt(item.txt)">
        {{ txtItem }}
      </p>
    </div>
  </div>
</template>
<script setup>
import { ref, onMounted, onBeforeMount } from "vue";
import { useRouter, useRoute } from "vue-router";
import { artistListStore } from "@/store/artist";
import { formatTxt } from "@/utils/Format/format";
const ArtistListStore = artistListStore();
onBeforeMount(() => {
  ArtistListStore.getDesc(ArtistListStore.id);
});
onMounted(() => {});
</script>
<style lang="scss" scoped>
.artist-detail {
  .item {
    margin-bottom: 24px;
    h3 {
      font-size: 15px;
      font-weight: 600;
      margin-bottom: 10px;
    }
    p {
      text-indent: 2em;
      margin-bottom: 14px;
      line-height: 180%;
    }
  }
}
</style>
