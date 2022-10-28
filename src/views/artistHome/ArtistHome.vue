<template>
  <div class="artist ctn-mode">
    <div class="head">
      <div class="left">
        <img v-lazy="cover" alt="" />
      </div>
      <div class="right">
        <h1>{{ name }}</h1>
        <div class="nickname">
          <span>{{ imageDesc }}</span>
        </div>
        <a href="#" class="btn">
          <span class="iconfont icon-yulanshoucang"></span
          ><span>{{ fans.isFollow ? "已关注" : "关注" }}</span>
          <span>{{ formatFansNum(fans.fansCnt) }}</span></a
        >
        <div class="number">
          <span>单曲数:{{ musicSize }}</span
          ><span>专辑数:{{ albumSize }}</span
          ><span>MV数:{{ mvSize }}</span>
        </div>
      </div>
    </div>
    <div class="nav-mode">
      <ul>
        <li>
          <router-link exact :to="{ path: '/artist/album', query: { id: id } }"
            >专辑</router-link
          >
        </li>
        <li>
          <router-link :to="{ path: '/artist/mv', query: { id: id } }"
            >MV</router-link
          >
        </li>
        <li>
          <router-link :to="{ path: '/artist/detail', query: { id: id } }"
            >歌手详情</router-link
          >
        </li>
        <li>
          <router-link
            exact
            :to="{ path: '/artist/similar', query: { id: id } }"
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
import { storeToRefs } from "pinia";
const ArtistListStore = artistListStore();
const { cover, name, imageDesc, fans, musicSize, albumSize, mvSize, id } =
  storeToRefs(ArtistListStore);
const router = useRouter();
const route = useRoute();
// 监听路由query的id参数变化，重新发起请求捞数据
watch(
  () => route.query.id,
  (newId) => {
    // userData.value = await fetchUser(newId)
    // 带着新的id重新发起请求
    console.log(newId);
    initReqData();
  }
);
const initReqData = () => {
  // 存一下歌手id
  ArtistListStore.id = route.query.id;
  // 发起请求获取歌手详情
  ArtistListStore.getDetail(route.query.id);
  // 发起请求获取歌手粉丝数
  ArtistListStore.getFans(route.query.id);
};
onBeforeMount(() => {
  initReqData();
});
onMounted(() => {});
</script>
<style lang="scss" scoped>
.artist {
  color: #373737;
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
}
</style>
