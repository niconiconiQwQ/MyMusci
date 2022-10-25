<template>
  <div class="user ctn-mode">
    <div class="myInof">
      <div class="left">
        <img v-if="avatarUrl" :src="avatarUrl" alt="" />
      </div>
      <div class="right">
        <div class="name">
          <h1>{{ nickname }}</h1>
          <div class="grade">
            <div class="level">
              <div class="my-grade">
                <img src="@/assets/images/vip.png" alt="" />
              </div>
              <div class="lv">Lv{{ level }}</div>
            </div>
            <div class="edit">
              <span class="iconfont icon-xiepinglun"></span>
              <!-- 这里要根据是自己还是其他人来动态 -->
              <span>编辑个人信息</span>
            </div>
          </div>
        </div>
        <div class="detail">
          <div class="num-info">
            <ul>
              <li>
                <div @click="goEvent(userId)">
                  <div>
                    <a href="#">{{ eventCount }}</a>
                  </div>
                  <div>动态</div>
                </div>
              </li>
              <li>
                <div @click="goFollows(userId)">
                  <div>
                    <a href="#">{{ follows }}</a>
                  </div>
                  <div>关注</div>
                </div>
              </li>
              <li>
                <div @click="goFolloweds(userId)">
                  <div>
                    <a href="#">{{ followeds }}</a>
                  </div>
                  <div>粉丝</div>
                </div>
              </li>
            </ul>
          </div>
          <div class="msg">
            <div>所在地区：{{ province }}&nbsp;{{ city }}</div>
            <div>
              <span>社交网络：</span><span class="iconfont icon-xinlang"></span>
            </div>
            <div>个人简介：{{ signature }}</div>
          </div>
        </div>
      </div>
    </div>
    <div class="content">
      <ul class="nav">
        <li class="active">
          <a href="#">创建的歌单({{ playlistCount }})</a>
        </li>
        <li><a href="#">收藏的歌单</a></li>
        <li><a href="#">收藏的播客</a></li>
        <li><a href="#">创建的音乐专栏</a></li>
      </ul>
      <div class="main">
        <ul>
          <li class="item" v-for="item in playList" :key="item.id">
            <a href="#" @click="goPlayList(item.id)">
              <div class="num">
                <span class="iconfont icon-bofang"></span
                ><span>{{ item.playCount }}</span>
              </div>
              <div class="play iconfont icon-play"></div>
              <img v-lazy="item.coverImgUrl" alt=""
            /></a>
            <div class="title">{{ item.name }}</div>
            <div class="song-num">{{ item.trackCount }}首</div>
          </li>
        </ul>
      </div>
    </div>
    <Pagination
      :pageNo="pageNo"
      :pageSize="pageSize"
      :total="total"
      :continues="continues"
    ></Pagination>
  </div>
</template>

<script setup>
import Pagination from "@/components/pagination/Pagination";
import { ref, onBeforeMount, onMounted } from "vue";
import { userDetail } from "@/store/index";
import { useRoute, useRouter } from "vue-router";
import { storeToRefs } from "pinia";
const router = useRouter();
const route = useRoute();
const userDetailStore = userDetail();
const {
  avatarUrl,
  nickname,
  level,
  userId,
  eventCount,
  follows,
  followeds,
  province,
  city,
  signature,
  playlistCount,
  listenSongs,
  playList,
} = storeToRefs(userDetailStore);
const goEvent = (id) => {
  // router.push({
  //   path: "",
  //   query: {
  //     id: id,
  //   },
  // });
};
// 跳转关注页
const goFollows = (id) => {
  router.push({
    path: "/follows",
    query: {
      id: id,
    },
  });
};
// 跳转粉丝页
const goFolloweds = (id) => {
  router.push({
    path: "/fans",
    query: {
      id: id,
    },
  });
};
// 跳转歌单页面
const goPlayList = (id) => {
  router.push({
    path: "/playlist",
    query: {
      id: id,
    },
  });
};
let pageNo = ref(5);
let pageSize = ref(10);
let total = ref(1000);
let continues = ref(5);
const uid = ref(route.query.id);
onBeforeMount(() => {
  // 发起请求捞用户的详情
  userDetailStore.getUserDetail(uid.value);
  // 捞用户歌单的歌单
  userDetailStore.getUserPlayList(uid.value);
});
onMounted(() => {});
</script>

<style lang="scss" scoped>
.a-mode1 {
  position: relative;
  display: block;
  border-radius: 10px;
  overflow: hidden;
  &:hover .play {
    // visibility: visible;
    opacity: 1;
    transition: all 0.8s ease;
  }
  img {
    height: 100%;
  }
}
.num-mode1 {
  position: absolute;
  display: flex;
  align-items: center;
  color: #fff;
  top: 2px;
  right: 10px;
}
.play-mode1 {
  height: 34px;
  width: 34px;
  border-radius: 50%;
  background-color: #f2f3f5;
  position: absolute;
  bottom: 10px;
  right: 10px;
  text-align: center;
  padding-left: 4px;
  line-height: 34px;
  font-size: 24px;
  // visibility: hidden;
  opacity: 0;
}
.user {
  .myInof {
    height: 200px;
    display: flex;
    .left {
      width: 234px;
      height: 222px;
      display: flex;
      img {
        height: 186px;
        width: 186px;
        border-radius: 50%;
        border: 1px solid #e7e7e7;
      }
    }
    .right {
      flex: 1;
      height: 100%;
      .name {
        height: 72px;
        border-bottom: 1px solid #e5e5e5;
        margin-bottom: 10px;
        h1 {
          font-size: 20px;
          font-weight: 700;
          margin: 0px 0px 8px 0px;
        }
        .grade {
          display: flex;
          align-items: center;
          justify-content: space-between;
          .level {
            display: flex;
            .my-grade,
            .lv {
              height: 18px;
              width: 46px;
              border-radius: 18px;
              overflow: hidden;
            }
            .my-grade {
              margin-right: 8px;
              img {
                width: 100%;
              }
            }
            .lv {
              background-color: #f0f0f0;
              font-size: 12px;
              display: flex;
              align-items: center;
              justify-content: center;
              color: #67333b;
            }
          }
          .edit {
            width: 134px;
            height: 32px;
            border: 1px solid #d9d9d9;
            border-radius: 32px;
            display: flex;
            align-items: center;
            justify-content: center;
            cursor: pointer;
            .iconfont {
              padding: 0px 4px;
            }
            &:hover {
              background: #f2f2f2;
            }
          }
        }
      }
      .detail {
        .num-info {
          width: 30%;
          ul {
            display: flex;
            justify-content: space-between;
            color: #373737;
            margin-bottom: 8px;
            li {
              > div {
                cursor: pointer;
                text-align: center;
                div {
                  &:nth-child(1) {
                    font-size: 18px;
                    font-weight: 700;
                  }
                  &:nth-child(2) {
                    color: #666666;
                    &:hover {
                      color: #000;
                    }
                  }
                }
              }
              &:nth-child(2) {
                border-left: 1px solid #e5e5e5;
                border-right: 1px solid #e5e5e5;
                padding: 0 30px;
              }
            }
          }
        }
        .msg {
          div {
            margin: 2px 0;
            .iconfont {
              width: 20px;
              height: 20px;
              display: inline-block;
              line-height: 20px;
              text-align: center;
              font-size: 16px;
              background-color: #e64b4e;
              border-radius: 50%;
              color: #fff1f1;
            }
          }
        }
      }
    }
  }
  .content {
    height: 73%;
    width: 100%;
    margin: 30px 0px 80px 0px;
    .nav {
      width: 100%;
      display: flex;
      align-items: center;
      color: #373737;
      margin-bottom: 10px;
      li {
        margin-right: 20px;
        &.active {
          color: #373737;
          font-weight: 700;
          font-size: 20px;
        }
        a {
          &:hover {
            &:hover {
              color: #000;
            }
          }
        }
      }
    }
    .main {
      height: 100%;
      ul {
        width: 100%;
        height: 100%;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        li {
          width: 19%;
          height: 170px;
          margin-bottom: 86px;
          a {
            @extend .a-mode1;
            width: 100%;
            height: 100%;
            margin-bottom: 4px;
            img {
              width: 100%;
              height: 100%;
            }
            .num {
              @extend .num-mode1;
            }
            .play {
              @extend .play-mode1;
            }
          }
          .title {
            color: #373737;
            font-size: 15px;
          }
          .song-num {
            margin-top: 2px;
            color: #9f9f9f;
          }
        }
      }
    }
  }
}
</style>
