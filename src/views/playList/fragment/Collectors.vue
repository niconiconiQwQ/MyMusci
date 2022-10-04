<template>
  <div class="collectors">
    <ul>
      <li v-for="item in playListStore.subscribers" :key="item.userId">
        <div class="left">
          <a href="#" @click="goUser(item.userId)"
            ><img v-lazy="item.avatarUrl"
          /></a>
        </div>
        <div class="right">
          <div class="nickname">
            <a href="#" @click="goUser(item.userId)">{{ item.nickname }}</a
            ><span class="sex iconfont icon-sexw"></span>
          </div>
          <span class="desc">{{ item.signature }}</span>
        </div>
      </li>
    </ul>
    <Pagination></Pagination>
  </div>
</template>
<script setup>
import { ref, onMounted, onBeforeMount, defineProps } from "vue";
import { useRouter, useRoute } from "vue-router";
import Pagination from "@/components/pagination/Pagination";
import { playList } from "@/store/playlist";

import router from "@/router";
const props = defineProps(["PlayListId"]);
const playListStore = playList();
const goUser = (id) => {
  router.push({
    path: "/user",
    query: {
      id: id,
    },
  });
};
onBeforeMount(() => {
  playListStore.getColletors(props.PlayListId, 30);
});
onMounted(() => {});
</script>
<style lang="scss" scoped>
.collectors {
  ul {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    margin-bottom: 20px;
    li {
      display: flex;
      width: 45%;
      height: 90px;
      margin-bottom: 20px;
      font-size: 14px;
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
      .right {
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        overflow: hidden;
        .nickname {
          a {
            margin-right: 6px;
            &:hover {
              color: #000;
            }
          }
          .sex {
            background-color: #ffcce7;
            border-radius: 50%;
            padding: 2px;
            font-size: 12px;
            color: #ef77aa;
          }
        }
        .desc {
          font-size: 12px;
          text-overflow: ellipsis;
          white-space: nowrap;
          overflow: hidden;
        }
      }
    }
  }
}
</style>
