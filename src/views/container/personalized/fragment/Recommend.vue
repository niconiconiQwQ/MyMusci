<template>
  <div class="recommend">
    <a href="" class="title-mode"
      ><h1>推荐歌单</h1>
      <span class="iconfont icon-right"></span
    ></a>
    <ul class="ul-mode">
      <li class="item first" v-for="(item, index) in 1" :key="index">
        <a href="#" class="a-mode1">
          <div class="icon iconfont icon-zan"></div>
          <div class="text"><span>根据您的音乐口味生成每日更新</span></div>
          <div class="play-mode iconfont icon-play"></div>
        </a>
        <span>每日歌曲推荐</span>
      </li>
      <li
        class="item"
        v-for="item in playListStore.recommentPlayList"
        :key="item.id"
      >
        <a href="#" class="a-mode1" @click="gotoPlayList(item.id)">
          <div class="num-mode">
            <span class="iconfont icon-bofang"></span
            ><span>{{ formatNumber(item.playCount) }}</span>
          </div>
          <div class="play-mode iconfont icon-play"></div>
          <img v-lazy="item.picUrl" alt=""
        /></a>
        <span>{{ item.name }}</span>
      </li>
    </ul>
  </div>
</template>
<script setup>
import { formatNumber } from "@/utils/Format/format";
import { onMounted, onBeforeMount } from "vue";
import { playList } from "@/store/playlist";
import { useRouter, useRoute } from "vue-router";
const router = useRouter();
const route = useRoute();
const playListStore = playList();

const gotoPlayList = (id) => {
  // 路由跳转
  router.push({ path: "/playlist", query: { id: id } });
};
onBeforeMount(() => {
  playListStore.getRecPlayList(9);
});
onMounted(() => {});
</script>
<style lang="scss" scoped>
.recommend {
  ul {
    li {
      width: 19.5%;
      margin-bottom: 36px;
      a {
        width: 100%;
        height: 90%;
        margin-bottom: 4px;
        .play-mode {
          opacity: 0;
        }
        &:hover .play-mode {
          opacity: 1;
          transition: all 0.8s ease;
        }
      }
      &.first {
        a {
          background-color: #38667e90;
          .icon {
            font-size: 1000%;
            color: #fff;
            position: absolute;
            left: 50%;
            top: 50%;
            transform: translateX(-50%) translateY(-50%);
          }
          .text {
            height: 0px;
            color: #fff;
            font-size: 12px;
            display: flex;
            align-items: center;
            justify-content: center;
            background-color: #172b34;
            backdrop-filter: blur(40px);
            visibility: hidden;
            border-radius: 10px 10px 0 0;
          }
        }
        &:hover .text {
          height: 34px;
          visibility: visible;
          transition: all 0.3s ease;
        }
      }
    }
  }
}
</style>
