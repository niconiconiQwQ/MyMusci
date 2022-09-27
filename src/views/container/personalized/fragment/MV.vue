<template>
  <div class="mv">
    <a href="" class="title-mode"
      ><h1>推荐MV</h1>
      <span class="iconfont icon-right"></span
    ></a>
    <ul class="ul-mode">
      <li class="item" v-for="item in RecommendMVStore.list" :key="item.id">
        <a href="" class="a-mode1"
          ><div class="num-mode">
            <span class="iconfont icon-bofang"></span
            ><span>{{ formatNumber(item.playCount) }}</span>
          </div>
          <img :src="item.picUrl" alt=""
        /></a>
        <div class="msg">{{ item.name }}</div>
      </li>
    </ul>
  </div>
</template>
<script setup>
import { formatNumber } from "@/utils/numFormat";
import { onMounted, onBeforeMount } from "vue";
import { RecommendMV } from "@/store/index";
const RecommendMVStore = RecommendMV();
onBeforeMount(() => {
  RecommendMVStore.getMVList();
});
onMounted(() => {});
</script>
<style lang="scss" scoped>
.mv {
  // @extend .exclusive;
  ul {
    li {
      width: 24%;
      a {
        height: 140px;
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
