<template>
  <div class="song-list">
    <table class="s-table">
      <thead>
        <tr>
          <th class="w1">操作</th>
          <th class="w2">标题</th>
          <th class="w3">歌手</th>
          <th class="w4">专辑</th>
          <th class="w5">时间</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="index in 30" :key="index" :class="{ bgc: index % 2 }">
          <td class="w1">
            <span>{{ index }}</span>
            <span class="iconfont icon-zan"></span>
            <span class="iconfont icon-download"></span>
          </td>
          <td class="w2"><span>Go! Go! Maniac</span></td>
          <td class="w3"><span>Gnoka</span></td>
          <td class="w4"><span>K-ON! Music History's Box</span></td>
          <td class="w5"><span>04:33</span></td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script setup>
import { ref, onMounted, onBeforeMount } from "vue";
import { useRouter, useRoute } from "vue-router";
import { playList } from "@/store/playlist";
const props = defineProps(["listId"]);
const route = useRoute();
const router = useRouter();
const playListStore = playList();
onBeforeMount(() => {
  // playListStore.getSongs()
  console.log(props.listId);
});
onMounted(() => {});
</script>
<style lang="scss" scoped>
.song-list {
  .s-table {
    width: 100%;
    color: #656565;
    // border-collapse: collapse;
    thead,
    tbody {
      // vertical-align: middle;
      // border-color: inherit;
      tr {
        // display: table-row;
        // vertical-align: inherit;
        // border-color: inherit;
        &.bgc {
          background-color: #fafafa;
        }
        text-align: left;
        th {
          height: 34px;
          // text-align: center;
          &.w1 {
            text-align: center;
          }
        }
        td {
          height: 34px;
          &.w1 {
            display: flex;
            justify-content: space-evenly;
            align-items: center;
          }
        }
        &:hover {
          background-color: #f1f2f3;
        }
      }
    }
    // thead {
    //   // display: table-header-group;
    // }
    // tbody {
    //   // display: table-row-group;
    // }
  }
}
</style>
