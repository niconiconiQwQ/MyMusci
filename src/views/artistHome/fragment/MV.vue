<template>
  <div class="mv">
    <ul class="ul-mode">
      <li v-for="item in ArtistListStore.mvs" :key="item.id">
        <a href="#" class="a-mode1"
          ><div class="num-mode">
            <span class="iconfont icon-bofang"></span
            ><span>{{ formatNumber(item.playCount) }}</span>
          </div>
          <div class="time-mode">
            <span>{{ formatPlayTime(item.duration) }}</span>
          </div>
          <img :src="item.imgurl" alt=""
        /></a>
        <div class="mv-title">{{ item.name }}</div>
      </li>
    </ul>
  </div>
</template>
<script setup>
import { ref, onMounted, onBeforeMount } from "vue";
import { useRouter, useRoute } from "vue-router";
import { artistListStore } from "@/store/artist";
import { formatPlayTime, formatNumber } from "@/utils/Format/format";
const ArtistListStore = artistListStore();
onBeforeMount(() => {
  ArtistListStore.getArtistMV(ArtistListStore.id);
});
onMounted(() => {});
</script>
<style lang="scss" scoped>
.mv {
  .ul-mode {
    width: 100%;
    justify-content: flex-start;
    li {
      height: 160px;
      width: 24%;
      margin-bottom: 40px;
      margin-right: 1%;
      .a-mode1 {
        height: 90%;
        width: 100%;
        border-radius: 4px;
        margin-bottom: 4px;
      }
      .mv-title {
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        &:hover {
          color: #000;
        }
      }
    }
  }
}
</style>
