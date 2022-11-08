<template>
  <div class="latestSongs">
    <div class="language-nav">
      <div class="type">
        <a href="#" class="active" @click="select(0)">全部</a>
        <a href="#" @click="select(7)">华语</a>
        <a href="#" @click="select(96)">欧美</a>
        <a href="#" @click="select(16)">韩国</a>
        <a href="#" @click="select(8)">日本</a>
      </div>
      <div class="ctrl">
        <a href="#"
          ><span class="iconfont icon-play1"></span><span>播放全部</span></a
        >
        <a href="#"
          ><span class="iconfont icon-shoucangjia"></span
          ><span>收藏全部</span></a
        >
      </div>
    </div>
    <ul class="song-list">
      <li
        class="song-item"
        v-for="(item, index) in newSongs"
        :key="item.id"
        @dblclick="dbClickPlay(item.id)"
      >
        <div class="song-msg">
          <span class="index">{{ formatIndex(index + 1) }}</span>
          <a href="#" class="a-mode1"
            ><img v-lazy="item.album.picUrl" alt=""
          /></a>
          <span class="song-name">{{ item.name }}</span>
          <span class="sign">SQ</span>
        </div>
        <div class="creater">
          <a
            href="#"
            v-for="(art, index) in item.artists"
            :key="art.id"
            @click="goArt(art.id)"
            >{{ art.name
            }}<i v-if="index !== item.artists.length - 1"> / </i></a
          >
        </div>
        <div class="time">{{ formatPlayTime(item.duration) }}</div>
      </li>
    </ul>
  </div>
</template>
<script setup>
import play from "@/utils/play";
import { useRouter, useRoute } from "vue-router";
import { newAlbumSong } from "@/store/index";
import { storeToRefs } from "pinia";
import { formatIndex, formatPlayTime } from "@/utils/Format/format";
const newAlbumSongStore = newAlbumSong();
const { newSongs } = storeToRefs(newAlbumSongStore);
// 双击播放歌曲
const dbClickPlay = (id) => {
  play(id);
};
const goArt = (id) => {
  router.push({
    path: "/artist",
    query: {
      id,
    },
  });
};
const route = useRoute(),
  router = useRouter();
newAlbumSongStore.getNewSongs();
const select = (type) => {
  newAlbumSongStore.getNewSongs(type);
};
</script>
<style lang="scss" scoped>
.latestSongs {
  .language-nav {
    display: flex;
    justify-content: space-between;
    font-size: 15px;
    .type {
      a {
        padding-right: 30px;
        &.active {
          font-weight: 700;
        }
      }
    }
    .ctrl {
      display: flex;
      margin-bottom: 20px;
      a {
        width: 100px;
        height: 28px;
        display: block;
        border-radius: 28px;
        display: flex;
        align-items: center;
        justify-content: center;
        border: 1px solid #d9d9d9;
        &:nth-child(1) {
          background-color: #38b2ae;
          color: #fff;
        }
        &:nth-child(2) {
          margin-left: 10px;
        }
        span {
          &.iconfont {
            margin-right: 2px;
          }
        }
      }
    }
  }
  .song-list {
    width: 100%;
    .song-item {
      &:nth-child(odd) {
        background-color: #f9f9f9;
      }
      width: 100%;
      height: 80px;
      padding: 8px 2px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      .song-msg {
        flex: 5;
        display: flex;
        align-items: center;
        height: 100%;
        .index {
          color: #e2cbcb;
        }
        a {
          height: 100%;
          margin: 0px 0px 0px 14px;
        }
        .song-name {
          margin: 0px 10px;
          max-width: 70%;
          text-overflow: ellipsis;
          overflow: hidden;
          white-space: nowrap;
        }
        .sign {
          border: 1px solid #51bbb8;
          color: #51bbb8;
          border-radius: 4px;
          font-size: 12px;
        }
      }
      .creater {
        flex: 4;
        text-overflow: ellipsis;
        overflow: hidden;
        white-space: nowrap;
      }
      .time {
        flex: 1;
      }
      &:hover {
        background-color: #f1f2f3;
      }
    }
  }
}
</style>
