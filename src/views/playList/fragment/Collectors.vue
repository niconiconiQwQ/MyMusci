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
    <el-pagination
      background
      small
      layout="prev, pager, next"
      :total="subscribersTotal"
      v-model:current-page="currentPage"
      :page-size="30"
    />
  </div>
</template>
<script setup>
import { defineProps, ref, watch } from "vue";
import { useRouter } from "vue-router";
import { playList } from "@/store/playlist";
import { storeToRefs } from "pinia";
const playListStore = playList();
const offset = ref(0);
const currentPage = ref(1);
const { subscribersTotal } = storeToRefs(playListStore);
const router = useRouter();
const props = defineProps(["PlayListId"]);
const goUser = (id) => {
  router.push({
    path: "/user",
    query: {
      id: id,
    },
  });
};
// 请求初始化数据
playListStore.getColletors(props.PlayListId);
// 侦听分页器，重新请求收藏者
watch(
  () => currentPage.value,
  (page) => {
    offset.value = (page - 1) * 30;
    playListStore.getColletors(props.PlayListId, { offset: offset.value });
  }
);
</script>
<style lang="scss" scoped>
.collectors {
  ul {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    margin-bottom: 30px;
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
  .el-pagination {
    margin-bottom: 30px;
  }
}
</style>
