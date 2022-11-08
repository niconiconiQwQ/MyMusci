<template>
  <div class="latestAlbum">
    <nav>
      <div class="left">
        <a href="#" @click="select('ALL')">全部</a>
        <a href="#" @click="select('ZH')">华语</a>
        <a href="#" @click="select('EA')">欧美</a>
        <a href="#" @click="select('KR')">韩国</a>
        <a href="#" @click="select('JP')">日本</a>
      </div>
      <div class="right">
        <a href="#" class="active"><span>推荐</span></a>
        <a href="#"><span>全部</span></a>
      </div>
    </nav>
    <ul class="ul-mode">
      <li v-for="item in newAlbum">
        <a href="#" class="a-mode1 play-hover" @click="goAlbum(item.id)"
          ><img :src="item.blurPicUrl" alt="" />
          <div class="play-mode iconfont icon-play"></div>
        </a>
        <div class="name">{{ item.name }}</div>
        <div class="art">{{ item.artist.name }}</div>
      </li>
    </ul>
  </div>
</template>
<script setup>
import { ref, onMounted, onBeforeMount, defineProps, watch } from "vue";
import { useRouter, useRoute } from "vue-router";
import { newAlbumSong } from "@/store/index";
import { storeToRefs } from "pinia";
const route = useRoute(),
  router = useRouter();
const newAlbumSongStore = newAlbumSong();
const { newAlbum } = storeToRefs(newAlbumSongStore);
const params = ref({});
newAlbumSongStore.getNewAlbum();
const select = (area) => {
  params.value.area = area;
  newAlbumSongStore.getNewAlbum(params.value);
};
const goAlbum = (id) => {
  router.push({
    path: "/album",
    query: {
      id,
    },
  });
};
onBeforeMount(() => {});
onMounted(() => {});
</script>
<style lang="scss" scoped>
.latestAlbum {
  nav {
    display: flex;
    justify-content: space-between;
    margin-bottom: 20px;
    .left {
      a {
        color: #676767;
        margin-right: 20px;
        &:hover {
          color: #000;
        }
      }
    }
    .right {
      a {
        padding: 0 14px;
        &:first-child {
          border-right: 1px solid #edf8f7;
        }
        span {
          display: inline-block;
          padding: 1px 10px;
          border-radius: 10px;
        }
        &:hover {
          color: #000;
        }
        &.active {
          span {
            background-color: #edf8f7;
          }
        }
      }
    }
  }
  .ul-mode {
    li {
      width: 19%;
      margin-bottom: 30px;
      .a-mode1 {
        .play-mode {
          left: 0;
          top: 0;
          right: 0;
          bottom: 0;
          margin: auto;
          opacity: 0;
        }
        &:hover .play-mode {
          opacity: 1;
          transition: all 1s ease;
        }
      }
      .name {
        margin: 4px 0;
      }
      .art {
        color: #9f9f9f;
        font-size: 1.2rem;
      }
    }
  }
}
</style>
