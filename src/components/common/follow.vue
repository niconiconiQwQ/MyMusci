<template>
  <div class="fans-follow ctn-mode">
    <h1>
      <a href="#">{{ nickname }}</a
      >的{{ type }}
    </h1>
    <ul>
      <li
        v-for="item in type == '粉丝' ? followedsList : followList"
        :key="item.userId"
      >
        <div class="left">
          <a href="#" @click="goUser(item.userId)"
            ><img v-lazy="item.avatarUrl"
          /></a>
        </div>
        <div class="center">
          <div class="nickname">
            <a href="#" @click="goUser(item.userId)"
              >{{ item.nickname }} <i class="sex iconfont icon-sexw"></i
            ></a>
          </div>
          <div class="desc">{{ item.signature }}</div>
          <div class="num">
            <span>歌单: {{ item.playlistCount }}</span>
            <span>粉丝: {{ item.followeds }}</span>
          </div>
        </div>
        <div class="right">
          <a href="#">
            <span class="iconfont icon-jia"></span>
            <span>关注</span>
          </a>
        </div>
      </li>
    </ul>
    <PaginationVue></PaginationVue>
  </div>
</template>
<script setup>
import PaginationVue from "@/components/pagination/Pagination.vue";
import { ref, onMounted, onBeforeMount, onUpdated } from "vue";
import { useRouter, useRoute } from "vue-router";
import { storeToRefs } from "pinia";
import { userDetail } from "@/store/index";
const route = useRoute();
const router = useRouter();
const userDetailStore = userDetail();
const {
  nickname,
  followedsList,
  followList,
  userId,
} = storeToRefs(userDetailStore);
const type = ref(route.meta.type);
const goUser = (id) => {
  router.push({
    path: "user",
    query: {
      id,
    },
  });
};
onBeforeMount(() => {
  // 判断type 是 关注 还是粉丝 来决定发什么请求
  if (type.value == "粉丝") {
    userDetailStore.getFolloweds(userId.value, 20, 0);
  } else {
    //  请求关注
    userDetailStore.getFollows(userId.value, 20, 0);
  }
});
onMounted(() => {});
onUpdated(() => {});
</script>
<style lang="scss" scoped>
.fans-follow {
  h1 {
    font-size: 2rem;
    color: #000;
    font-weight: 700;
    margin-bottom: 20px;
    a {
      color: #000;
      &:hover {
        color: #544848;
      }
    }
  }
  ul {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    margin-bottom: 20px;
    li {
      display: flex;
      width: 40%;
      height: 90px;
      margin-bottom: 20px;
      font-size: 1.3rem;
      &:hover {
        background-color: #f8f8f8;
      }
      .left {
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
      .center {
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        flex: 2;
        overflow: hidden;
        .nickname {
          font-size: 1.4rem;
          a {
            position: relative;
            margin-right: 6px;
            &:hover {
              color: #000;
            }
            .sex {
              position: absolute;
              right: -2rem;
              background-color: #ffcce7;
              border-radius: 50%;
              padding: 2px;
              font-size: 1rem;
              color: #ef77aa;
            }
          }
        }
        .desc {
          text-overflow: ellipsis;
          white-space: nowrap;
          overflow: hidden;
        }
        .num {
          span {
            width: 40%;
            display: inline-block;
            font-size: 1.2rem;
            &:nth-child(1) {
              border-right: 1px solid var(--border-color);
              margin-right: 20%;
            }
          }
        }
      }
      .right {
        height: 100%;
        display: flex;
        flex: 1;
        justify-content: flex-end;
        align-items: center;
        margin-right: 10px;
        a {
          display: flex;
          align-items: center;
          height: 24px;
          border-radius: 20px;
          border: 1px solid var(--border-color);
          padding: 1px 10px;
          &:hover {
            background-color: #ededed;
          }
        }
      }
    }
  }
}
</style>
