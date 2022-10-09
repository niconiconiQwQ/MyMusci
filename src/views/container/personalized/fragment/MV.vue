<template>
  <div class="mv">
    <a href="" class="title-mode"
      ><h1>推荐MV</h1>
      <span class="iconfont icon-right"></span
    ></a>
    <ul class="ul-mode">
      <li class="item" v-for="item in RecommendMVStore.list" :key="item.id">
        <a href="#" class="a-mode1" @click="goMV(item.id)"
          ><div class="num-mode">
            <span class="iconfont icon-bofang"></span
            ><span>{{ formatNumber(item.playCount) }}</span>
          </div>
          <img v-lazy="item.picUrl" alt=""
        /></a>
        <div class="msg">{{ item.name }}</div>
      </li>
    </ul>
  </div>
</template>
<script setup>
import { formatNumber } from "@/utils/Format/format";
import { onMounted, onBeforeMount } from "vue";
import { RecommendMV } from "@/store/index";
import { useRoute, useRouter } from "vue-router";
const RecommendMVStore = RecommendMV();
const router = useRouter();
const goMV = (id) => {
  router.push({
    path: "/video",
    query: {
      id: id,
    },
  });
};
onBeforeMount(() => {
  RecommendMVStore.getMVList();
});
</script>
<style lang="scss" scoped>
.mv {
  ul {
    li {
      width: 24%;
      a {
        height: 140px;
        margin-bottom: 6px;
        .num {
          span {
            margin-right: 2px;
          }
        }
      }
    }
  }
}
</style>
