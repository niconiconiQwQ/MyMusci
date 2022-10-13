<template>
  <div class="albums">
    <Album :songs="TenSongs"></Album>
    <nav>热门专辑</nav>
    <ul>
      <li v-for="item in hotAlbums" :key="item.id">
        <a href="#"
          ><img v-lazy="item.blurPicUrl" @click="goAblum(item.id)"
        /></a>
        <div class="name">{{ item.name }}</div>
        <div class="time">{{ formatTime2(item.publishTime) }}</div>
      </li>
    </ul>
  </div>
</template>
<script setup>
import Album from "@/views/artistHome/fragment/Album";
import { useRouter } from "vue-router";
import { storeToRefs } from "pinia";
import { formatTime2 } from "@/utils/Format/format";
import { artistListStore } from "@/store/artist";
const router = useRouter();
const ArtistListStore = artistListStore();
const { TenSongs, hotAlbums } = storeToRefs(ArtistListStore);
const goAblum = (id) => {
  router.push({
    path: "/album",
    query: {
      id,
    },
  });
};
// 发请求捞数据
ArtistListStore.getArtistTopSong(ArtistListStore.id);
ArtistListStore.getArtistAlbum(ArtistListStore.id);
</script>
<style lang="scss" scoped>
.albums {
  nav {
    font-size: 1.6rem;
    font-weight: 600;
    margin-bottom: 20px;
  }
  > ul {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    li {
      width: 18%;
      margin-bottom: 20px;
      a {
        width: 100%;
        img {
          width: 100%;
        }
      }
      .name {
        margin: 6px 0 6px 0;
      }
      .time {
        font-size: 1.2rem;
        color: #939393;
      }
    }
  }
}
</style>
