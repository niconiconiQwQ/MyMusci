<template>
  <div class="comment">
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
    <div class="hot-comments">
      <h2>精彩评论</h2>
      <ul class="com-list">
        <li v-for="index in 5" :key="index">
          <div class="inner">
            <a href="" class="avatar">
              <img src="@/assets/images/avatar2.png" alt="" />
            </a>
            <div class="detail">
              <div class="top">
                <a href="" class="nickname">春天吃了: </a
                ><span>我还以为是谁的歌单这么有品位。原来是我自己哦</span>
              </div>
              <div class="num">
                <div class="time">2011年11月11日 11:11</div>
                <div class="right">
                  <span class="report">举报</span>
                  <span class="iconfont icon-dianzan"></span>
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
    <div class="latest-comments">
      <h2>最新评论</h2>
      <ul class="com-list">
        <li v-for="index in 5" :key="index">
          <div class="inner">
            <a href="" class="avatar">
              <img src="@/assets/images/avatar2.png" alt="" />
            </a>
            <div class="detail">
              <div class="top">
                <a href="" class="nickname">春天吃了: </a
                ><span>我还以为是谁的歌单这么有品位。原来是我自己哦</span>
              </div>
              <div class="num">
                <div class="time">2011年11月11日 11:11</div>
                <div class="right">
                  <span class="report">举报</span>
                  <span class="iconfont icon-dianzan"></span>
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
let LastNum = ref("");
onBeforeMount(() => {});
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
        // height: 50px;
        padding: 4px 0px 20px 0px;
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
                  font-size: 14px;
                  &:first-child {
                    visibility: hidden;
                  }
                  &:last-child {
                    border-right: none;
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
      }
    }
  }
}
</style>
