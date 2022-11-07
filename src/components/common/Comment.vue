<template>
  <div class="comment">
    <!-- 发送评论部分 -->
    <div class="send">
      <div class="text">
        <textarea name="" id="" v-model="commentText"></textarea
        ><span>{{ 140 - commentText.length }}</span>
      </div>
      <div class="ctrl">
        <div class="select">
          <span class="emoji">😅</span>
          <span class="at">@</span>
          <span class="mark">#</span>
        </div>
        <a class="btn" @click="commment()">评论</a>
      </div>
    </div>
    <!-- 热门评论 -->
    <div class="hot-comments" v-if="props.hotComments.length > 0">
      <h2>精彩评论</h2>
      <ul class="com-list">
        <li v-for="item in props.hotComments" :key="item.commentId">
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
                  <span class="iconfont icon-dianzan" @click="like"
                    ><i>{{ item.likedCount }}</i></span
                  >
                  <span class="iconfont icon-fenxiang" @click="share"></span>
                  <span class="iconfont icon-jianyi" @click="commment"></span>
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
    <div class="latest-comments" v-if="props.comments.length > 0">
      <h2>最新评论</h2>
      <ul class="com-list">
        <li v-for="item in props.comments" :key="item.commentId">
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
    <div v-else class="none">还没有评论, 快来抢沙发</div>
    <!-- <Pagination v-if="comments > 0"></Pagination> -->
    <!-- <el-pagination :total="" :current-page="" :page-size="" @current-change="" layout=""></el-pagination> -->
    <el-pagination background layout="prev, pager, next" :total="100" small />
  </div>
</template>
<script setup>
import { ref } from "vue";
import { reqSendComment } from "@/api/index";
import { useRouter } from "vue-router";
import { formatTime } from "@/utils/Format/format";
const router = useRouter();
const props = defineProps(["hotComments", "comments"]);
let commentText = ref("");
// 跳到个人首页
const goUser = (id) => {
  router.push({
    path: "/user",
    query: { id },
  });
};
// 点赞功能======no
const like = () => {
  console.log("点赞");
};
// 评论功能======no
const commment = async () => {
  // 获取了评论的内容，要发送请求
  // let res = await reqSendComment();
  // 获取当前是哪种资源
  console.log(props.id);
  // console.log(commentText.value);
};
// 分享功能======no
const share = () => {};
</script>
<style lang="scss" scoped>
.comment {
  .send {
    margin-bottom: 20px;
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
  .none {
    text-align: center;
    margin-bottom: 20px;
  }
}
</style>
