<template>
  <div class="playlist ctn-mode" ref="box">
    <div class="head">
      <div class="left">
        <img :src="coverImgUrl" />
      </div>
      <div class="right">
        <div class="title">
          <div>歌单</div>
          <h1>{{ playListName }}</h1>
        </div>
        <div class="nickname">
          <a href="#" @click="goUser(userId)">
            <img :src="avatarUrl" />
            <span>{{ nickname }}</span>
          </a>
          <span class="time">{{ createTime }}创建</span>
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
              ><span>已收藏({{ subscribedCount }})</span></a
            >
          </li>
          <li>
            <a href="#" class="btn-mode btn">
              <span class="iconfont icon-fenxiang"></span
              ><span>分享({{ shareCount }})</span></a
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
            <span>标签: </span
            ><a href="#" v-for="(item, index) in tags">{{ item }}</a>
          </li>
          <li>
            <span>歌曲: {{ trackCount }}</span
            ><span>播放: {{ formatNumber(playCount) }}</span>
          </li>
          <li>
            <div class="cur">
              <details>
                <summary>简介:</summary>
                <p class="row" v-for="(item, index) in description">
                  {{ item }}
                </p>
              </details>
            </div>
          </li>
        </ul>
      </div>
    </div>
    <div class="nav-mode">
      <ul>
        <li>
          <router-link to="/playlist/songlist">歌曲列表</router-link>
        </li>
        <li>
          <router-link to="/playlist/comment" type="2" id="route.query.id"
            >评论({{ playListStore.commentCount }})</router-link
          >
        </li>
        <li>
          <router-link to="/playlist/collectors">收藏者</router-link>
        </li>
      </ul>
    </div>
    <router-view :PlayListId="PlayListId" :boxDom="box"></router-view>
  </div>
</template>
<script setup>
import { ref, watch } from "vue";
import { useRouter, useRoute } from "vue-router";
import { playList } from "@/store/playlist";
import { storeToRefs } from "pinia";
import { formatNumber } from "@/utils/Format/format";
// 获取DOM
const box = ref();
// 定义一些数据
const playListStore = playList();
const {
  coverImgUrl,
  playListName,
  userId,
  avatarUrl,
  nickname,
  createTime,
  subscribedCount,
  shareCount,
  tags,
  trackCount,
  playCount,
  description,
} = storeToRefs(playListStore);
const router = useRouter();
const route = useRoute();
const PlayListId = ref(route.query.id);
const goUser = (id) => {
  router.push({
    path: "/user",
    query: {
      id: id,
    },
  });
};
// 歌单初始化一些捞数据
playListStore.getSongs(route.query.id);
playListStore.getPlayListDetail(route.query.id);
watch(
  () => route.fullPath,
  () => {
    box.value.scrollTop = 0;
  }
);
</script>
<style lang="scss" scoped>
.playlist {
  color: #373737;
  font-size: 12px;
  overflow-x: hidden;
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

      .nickname {
        height: 28px;
        display: flex;
        line-height: 28px;
        a {
          height: 100%;
          display: block;
          color: #507daf;
          img {
            height: 100%;
            border-radius: 50%;
            margin-right: 10px;
          }
        }
        span {
          padding-right: 10px;
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
          &.brief {
            position: relative;
            height: 20px;
            i {
              position: absolute;
              right: 0;
              top: 0;
              font-size: 30px;
              transform: rotate(90deg);
              transition: all 0.1s linear;
            }
          }
        }
      }
    }
  }
}
</style>
