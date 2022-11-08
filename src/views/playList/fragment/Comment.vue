<template>
  <Comment
    :hotComments="hotComments"
    :comments="comments"
    :id="props.PlayListId"
  ></Comment>
  <el-pagination
    background
    small
    layout="prev, pager, next"
    :total="commentTotal"
    v-model:current-page="currentPage"
    :page-size="20"
  />
</template>
<script setup>
import Comment from "@/components/common/Comment";
import { ref, watch } from "vue";
import { playList } from "@/store/playlist";
import { storeToRefs } from "pinia";
const props = defineProps(["PlayListId"]);
const playListStore = playList();
const currentPage = ref(1);
const offset = ref(0);
const { hotComments, comments, commentTotal } = storeToRefs(playListStore);
// 请求歌单评论数据
playListStore.getComment(props.PlayListId);
watch(
  () => currentPage.value,
  (page) => {
    offset.value = (page - 1) * 20;
    console.log(page);
    playListStore.getComment(props.PlayListId, { offset: offset.value });
  }
);
</script>
<style lang="scss" scoped>
.el-pagination {
  margin-bottom: 30px;
}
</style>
