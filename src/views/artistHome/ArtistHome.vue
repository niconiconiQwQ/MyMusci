<template>
  <div class="artist ctn-mode">
    <div class="head">
      <div class="left">
        <img :src="ArtistListStore.cover" alt="" />
      </div>
      <div class="right">
        <h1>{{ ArtistListStore.name }}</h1>
        <div class="nickname">
          <span>{{ ArtistListStore.imageDesc }}</span>
        </div>
        <a href="#" class="btn">
          <span class="iconfont icon-yulanshoucang"></span
          ><span>{{ ArtistListStore.fans.isFollow ? "已关注" : "关注" }}</span>
          <span>{{ formatFansNum(ArtistListStore.fans.fansCnt) }}</span></a
        >
        <div class="number">
          <span>单曲数:{{ ArtistListStore.musicSize }}</span
          ><span>专辑数:{{ ArtistListStore.albumSize }}</span
          ><span>MV数:{{ ArtistListStore.mvSize }}</span>
        </div>
      </div>
    </div>
    <div class="nav">
      <ul>
        <li>
          <router-link
            exact
            :to="{ path: '/artist/album', query: { id: ArtistListStore.id } }"
            >专辑</router-link
          >
        </li>
        <li>
          <router-link
            :to="{ path: '/artist/mv', query: { id: ArtistListStore.id } }"
            >MV</router-link
          >
        </li>
        <li>
          <router-link
            :to="{ path: '/artist/detail', query: { id: ArtistListStore.id } }"
            >歌手详情</router-link
          >
        </li>
        <li>
          <router-link
            exact
            :to="{ path: '/artist/similar', query: { id: ArtistListStore.id } }"
            >相似歌手</router-link
          >
        </li>
      </ul>
    </div>
    <router-view></router-view>
  </div>
</template>
<script setup>
import { onMounted, onBeforeMount, ref, watch } from "vue";
import { useRouter, useRoute } from "vue-router";
import { artistListStore } from "@/store/artist";
import { formatFansNum } from "@/utils/Format/format";
const ArtistListStore = artistListStore();
let id = ref(0);
const router = useRouter();
const route = useRoute();
watch(
  () => route.params.id,
  async (newId) => {
    // userData.value = await fetchUser(newId)
    // 带着新的id重新发起请求
    console.log(newId);
  }
);
onBeforeMount(() => {
  // 存一下歌手id
  ArtistListStore.id = route.query.id;
  // 发起请求获取歌手详情
  ArtistListStore.getDetail(ArtistListStore.id);
  // 发起请求获取歌手粉丝数
  ArtistListStore.getFans(ArtistListStore.id);
});
onMounted(() => {});
</script>
<style lang="scss" scoped>
.artist {
  overflow-x: hidden;
  overflow-y: auto;
  color: #373737;
  background-color: #fff;
  .head {
    margin-bottom: 36px;
    display: flex;
    .left {
      width: 184px;
      height: 184px;
      margin-right: 20px;
      img {
        width: 100%;
        height: 100%;
        border-radius: 6px;
      }
    }
    .right {
      h1 {
        font-size: 20px;
        font-weight: 700;
        margin-bottom: 8px;
      }
      .nickname {
        span {
          padding-right: 10px;
        }
      }
      .btn {
        width: 130px;
        height: 32px;
        display: block;
        border: 1px solid #d9d9d9;
        border-radius: 32px;
        text-align: center;
        line-height: 32px;
        margin: 14px 0;
        span {
          padding: 0 2px;
          font-size: 15px;
        }
        &:hover {
          background-color: #ededed;
        }
      }
      .number {
        span {
          padding-right: 20px;
        }
      }
    }
  }
  .nav {
    margin-bottom: 20px;
    ul {
      display: flex;

      li {
        margin-right: 20px;

        a {
          font-size: 18px;
          padding-bottom: 2px;
          &.router-link-active {
            font-size: 20px;
            font-weight: 700;
            border-bottom: 2px solid #38b2ae;
            div {
              border-bottom: 2px solid #389cb2;
            }
          }
          &:hover {
            color: #000;
          }
        }
      }
    }
  }
}
</style>
