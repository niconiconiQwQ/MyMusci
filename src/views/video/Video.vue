<template>
  <div class="video ctn-mode">
    <div class="v-top">
      <div class="left">
        <h1><a href="#"></a>视频详情</h1>
        <video controls :src="url"></video>
        <div class="creator">
          <div class="left-a">
            <a href="#"><img :src="img1v1Url" alt="" /></a>
            <span>{{ artistName }}</span>
          </div>
          <div class="right-a">
            <span class="iconfont icon-jia"></span><span>关注</span>
          </div>
        </div>
        <div class="detail">
          <div>
            <h1>{{ name }}</h1>
          </div>
          <div class="time">
            <span>发布: {{ publishTime }}</span
            ><span>播放: {{ playCount }}次</span>
          </div>
          <div class="tags">
            <a href="#" v-for="item in videoGroup" :key="item.id">{{
              item.name
            }}</a>
          </div>
          <ul class="ctrl">
            <li>
              <a href="#" class="btn-mode btn">
                <span class="iconfont icon-dianzan"></span
                ><span>赞({{ likedCount }})</span></a
              >
            </li>
            <li>
              <a href="#" class="btn-mode btn">
                <span class="iconfont icon-yulanshoucang"></span
                ><span>已收藏({{ subCount }})</span></a
              >
            </li>
            <li>
              <a href="#" class="btn-mode btn">
                <span class="iconfont icon-fenxiang"></span
                ><span>分享({{ shareCount }})</span></a
              >
            </li>
          </ul>
        </div>
        <div>
          <Comment :hotComments="hotComments" :comments="comments"></Comment>
        </div>
      </div>
      <div class="right">
        <h1>相关推荐</h1>
        <ul>
          <li v-for="item in simiMVs" :key="item.id">
            <a href="#" class="a-mode1">
              <img v-lazy="item.cover" alt="" />
              <div class="num-mode">
                <span class="iconfont icon-bofang"></span
                ><span>{{ formatNumber(item.playCount) }}</span>
              </div>
              <div class="time-mode">{{ formatPlayTime(item.duration) }}</div>
            </a>
            <div class="msg">
              <div class="desc">{{ item.name }}</div>
              <div class="art">
                <span>by</span>&nbsp;<span>{{ item.artistName }}</span>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onBeforeMount, onMounted } from "vue";
import { useRoute, useRouter } from "vue-router";
import { MV } from "@/store/index";
import Comment from "@/components/common/Comment.vue";
import { storeToRefs } from "pinia";
import { formatNumber, formatPlayTime } from "@/utils/Format/format";
const route = useRoute();
const MVStore = MV();
const {
  url,
  name,
  artistName,
  playCount,
  subCount,
  shareCount,
  likedCount,
  commentCount,
  publishTime,
  videoGroup,
  img1v1Url,
  desc,
  comments,
  hotComments,
  simiMVs,
} = storeToRefs(MVStore);
let id = ref(route.query.id);
// 在这里捞仓库数据
MVStore.getUrl(id.value);
MVStore.getMVDetail(id.value);
MVStore.getMVDetailNum(id.value);
MVStore.getMVcomment(id.value, 0);
MVStore.getSimiMV(id.value);
onBeforeMount(() => {});
onMounted(() => {});
</script>

<style lang="scss" scoped>
h1 {
  font-size: 1.8rem;
  color: #000;
  margin-bottom: 20px;
}
.video {
  .v-top {
    display: flex;
    .left {
      width: 70%;
      margin-right: 20px;
      overflow: hidden;
      video {
        width: 100%;
      }
      .creator {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin: 10px 0 20px 0;
        .left-a {
          height: 52px;
          a {
            display: inline-block;
            height: 100%;
            margin-right: 10px;
            img {
              height: 100%;
              border-radius: 50%;
            }
          }
        }
        .right-a {
          height: 50%;
          border-radius: 16px;
          padding: 4px 20px;
          background-color: #fdf5f4;
          color: #ec4141;
          .iconfont {
            margin-right: 4px;
          }
        }
      }
      .detail {
        h1 {
          font-size: 2.2rem;
          font-weight: 700;
        }
        .time {
          color: #cfcfcf;
          span {
            &:first-child {
              margin-right: 20px;
            }
          }
        }
        .tags {
          margin: 20px 0 30px 0;
          a {
            margin-right: 8px;
            padding: 1px 6px;
            background-color: #f4ecec;
            border-radius: 8px;
          }
        }
        .ctrl {
          display: flex;
          li {
            margin-right: 10px;
            .btn {
              padding: 0 14px;
            }
          }
        }
      }
    }
    .right {
      width: 30%;
      ul {
        li {
          display: flex;
          margin-bottom: 10px;
          height: 100px;
          .a-mode1 {
            width: 60%;
            height: 100%;
            font-size: 1.2rem;
            .num-mode,
            .time-mode {
              right: 4px;
            }
            img {
              height: 100%;
            }
            margin-right: 10px;
          }
          .msg {
            width: 40%;
            display: flex;
            flex-direction: column;
            justify-content: space-evenly;
            .desc {
              overflow: hidden;
              text-overflow: ellipsis;
              display: -webkit-box;
              -webkit-box-orient: vertical;
              -webkit-line-clamp: 2;
            }
            .art {
              font-size: 1.2rem;
              color: #9f9f9f;
            }
          }
        }
      }
    }
  }
  .comment {
    margin-top: 20px;
  }
}
</style>
