<template>
  <div class="comment">
    <!-- 发送评论部分 -->
    <div class="send">
      <div class="text">
        <textarea name="" id="" v-model="LastNum"></textarea
        ><span>{{ 140 - LastNum.length }}</span>
      </div>
      <div class="ctrl">
        <div class="select">
          <span class="emoji">😅</span>
          <span class="at">@</span>
          <span class="mark">#</span>
        </div>
        <a class="btn">评论</a>
      </div>
    </div>
    <!-- 热门评论 -->
    <div class="hot-comments">
      <h2>精彩评论</h2>
      <ul class="com-list">
        <li v-for="item in playListStore.hotComments" :key="item.commentId">
          <div class="inner">
            <a href="#" class="avatar" @click="goUser(item.user.userId)">
              <img v-lazy="item.user.avatarUrl" alt="" />
            </a>
            <div class="detail">
              <div class="top">
                <a href="#" class="nickname" @click="goUser(item.user.userId)"
                  >{{ item.user.nickname }}: </a
                ><span>{{ item.content }}</span>
              </div>
              <div class="num">
                <div class="time">
                  {{ formatTime(item.time) }}
                </div>
                <div class="right">
                  <span class="report">举报</span>
                  <span class="iconfont icon-dianzan"
                    ><i>{{ item.likedCount }}</i></span
                  >
                  <span class="iconfont icon-fenxiang"></span>
                  <span class="iconfont icon-jianyi"></span>
                </div>
              </div>
            </div>
          </div>
        </li>
      </ul>
      <a class="more"
        ><span>更多精彩评论</span> <span class="iconfont icon-right"></span
      ></a>
    </div>
    <!-- 最新评论 -->
    <div class="latest-comments">
      <h2>最新评论</h2>
      <ul class="com-list">
        <li v-for="item in playListStore.comments" :key="item.commentId">
          <div class="inner">
            <a href="#" class="avatar" @click="goUser(item.user.userId)">
              <img v-lazy="item.user.avatarUrl" alt="" />
            </a>
            <div class="detail">
              <div class="top">
                <a href="#" class="nickname" @click="goUser(item.user.userId)"
                  >{{ item.user.nickname }} </a
                ><span>{{ item.content }}</span>
              </div>
              <div class="num">
                <div class="time">{{ formatTime(item.time) }}</div>
                <div class="right">
                  <span class="report">举报</span>
                  <span class="iconfont icon-dianzan">{{
                    item.likedCount
                  }}</span>
                  <span class="iconfont icon-fenxiang"></span>
                  <span class="iconfont icon-jianyi"></span>
                </div>
              </div>
            </div>
          </div>
        </li>
      </ul>
    </div>
    <Pagination></Pagination>
  </div>
</template>
<script setup>
import { ref, onMounted, onBeforeMount } from "vue";
import { useRouter, useRoute } from "vue-router";
import Pagination from "@/components/pagination/Pagination";
import { playList } from "@/store/playlist";
import { formatTime } from "@/utils/Format/format";
const props = defineProps(["PlayListId"]);
const route = useRoute();
const router = useRouter();
const playListStore = playList();
let LastNum = ref("");
const goUser = (id) => {
  router.push({
    path: "/user",
    query: {
      id: id,
    },
  });
};
onBeforeMount(() => {
  // 请求歌单评论数据
  playListStore.getComment(props.PlayListId);
});
onMounted(() => {});
</script>
<style lang="scss" scoped>
.comment {
  .send {
    .text {
      position: relative;
      margin-bottom: 10px;
      textarea {
        width: 100%;
        height: 68px;
        padding: 4px;
        border: 1px solid #e5e5e5;
        border-radius: 4px;
      }
      span {
        position: absolute;
        bottom: 4px;
        right: 4px;
      }
    }
    .ctrl {
      display: flex;
      justify-content: space-between;
      .select {
        span {
          margin-right: 14px;
          font-size: 16px;
          cursor: pointer;
        }
      }
      .btn {
        display: block;
        cursor: pointer;
        height: 30px;
        border-radius: 24px;
        border: 1px solid #e5e5e5;
        padding: 0px 15px;
        line-height: 30px;
        &:hover {
          background-color: #f2f2f2;
        }
      }
    }
  }
  .hot-comments,
  .latest-comments {
    h2 {
      font-size: 15px;
      font-weight: 600;
      margin-bottom: 16px;
    }
    .com-list {
      li {
        padding: 4px 0px 26px 0px;
        border-bottom: 1px solid #f2f2f2;
        .inner {
          height: 38px;
          display: flex;
          .avatar {
            display: inline-block;
            height: 100%;
            margin-right: 14px;
            img {
              height: 100%;
              border-radius: 50%;
            }
          }
          .detail {
            width: 100%;
            .top {
              margin-bottom: 8px;
              .nickname {
                color: #767db6;
                margin-right: 4px;
              }
            }
            .num {
              display: flex;
              justify-content: space-between;
              .time {
                color: #9f9f9f;
              }
              .right {
                span {
                  padding: 0px 8px;
                  border-right: 1px solid #dfdfef;
                  font-size: 13px;
                  &:first-child {
                    visibility: hidden;
                  }
                  &:last-child {
                    border-right: none;
                  }
                  i {
                    padding: 0 1px;
                  }
                }

                .report {
                  font-size: 12px;
                }
              }
            }
          }
        }
        &:hover .report {
          visibility: visible !important;
        }
      }
    }
    .more {
      margin: 20px auto;
      width: 130px;
      height: 28px;
      display: block;
      border: 1px solid #d9d9d9;
      border-radius: 26px;
      line-height: 26px;
      text-align: center;
      &:hover {
        color: #000;
      }
    }
  }
}
</style>
