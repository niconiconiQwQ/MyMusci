<template>
  <div class="playlist ctn-mode">
    <div class="head">
      <div class="left">
        <img :src="blurPicUrl" />
      </div>
      <div class="right">
        <div class="title">
          <div>专辑</div>
          <h1>{{ name }}</h1>
        </div>
        <!-- 播放 收藏 等按钮 -->
        <ul class="ctrl">
          <li>
            <div href="#" class="btn-mode playall">
              <a href="#" class="play"
                ><span class="iconfont icon-play"></span
                ><span>播放全部</span></a
              >
              <a href="#" class="add"
                ><span class="iconfont icon-jia"></span
              ></a>
            </div>
          </li>
          <li>
            <a href="#" class="btn-mode btn">
              <span class="iconfont icon-yulanshoucang"></span
              ><span>已收藏({{ formatNumber(subCount) }})</span></a
            >
          </li>
          <li>
            <a href="#" class="btn-mode btn">
              <span class="iconfont icon-fenxiang"></span
              ><span>分享({{ formatNumber(shareCount) }})</span></a
            >
          </li>
          <li>
            <a href="#" class="btn-mode btn">
              <span class="iconfont icon-download"></span
              ><span>下载全部</span></a
            >
          </li>
        </ul>
        <ul class="desc">
          <li>
            <span>歌手: </span><a href="#">{{ artistName }}</a>
          </li>
          <li>时间: {{ formatTime2(publishTime) }}</li>
        </ul>
      </div>
    </div>
    <div class="nav-mode">
      <ul>
        <li>
          <router-link to="/album/songlist">歌曲列表</router-link>
        </li>
        <li>
          <router-link to="/album/comment"
            >评论({{ formatNumber(commentCount) }})</router-link
          >
        </li>
        <li>
          <router-link to="/album/detail">专辑详情</router-link>
        </li>
      </ul>
    </div>
    <router-view :albumId="albumId"></router-view>
  </div>
</template>
<script setup>
import { ref, onMounted, onBeforeMount } from "vue";
import { useRouter, useRoute } from "vue-router";
import { storeToRefs } from "pinia";
import { formatTime2, formatNumber } from "@/utils/Format/format";
import { album } from "@/store/index";
const albumStore = album();
const {
  name,
  blurPicUrl,
  publishTime,
  description,
  artistName,
  shareCount,
  subCount,
  commentCount,
} = storeToRefs(albumStore);
const router = useRouter();
const route = useRoute();
const i = ref(null);
const albumId = ref(route.query.id);
// 发请求捞数据
// albumStore.getAlbum(albumId);
albumStore.getAlbum(albumId.value);
albumStore.getAlbumDynamic(albumId.value);
onBeforeMount(() => {
  // console.log(albumDetail.value);
  // console.log(route.query.id);
  // 发专辑相关的请求
});
onMounted(() => {
  // console.log(subCount.value);
});
</script>
<style lang="scss" scoped>
.playlist {
  color: #373737;
  font-size: 12px;
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
      flex: 1;
      .title {
        display: flex;
        align-items: center;
        margin-bottom: 8px;

        div {
          border: 1px solid #38b2ae;
          padding: 0 2px;
          color: #38b2ae;
          margin-right: 14px;
        }
        h1 {
          font-size: 20px;
          font-weight: 700;
        }
      }
      .ctrl {
        display: flex;
        li {
          margin-right: 14px;
          display: flex;
          .btn {
            padding: 0 12px;

            &:hover {
              background-color: #ededed;
            }
          }
          .playall {
            background-color: #38b2ae;
            a {
              color: #fff;
              display: inline-block;
              height: 100%;
              padding: 0 10px;
              &:hover {
                background-color: #219d9980;
              }
            }
            .play {
              border-radius: 32px 0 0 32px;
              border-right: 1px solid #54bcb9;
            }
            .add {
              border-radius: 0px 32px 32px 0px;
            }
          }
        }
      }

      .desc {
        li {
          margin-bottom: 4px;
          font-size: 14px;
          span {
            margin-right: 10px;
          }
        }
      }
    }
  }
}
</style>
