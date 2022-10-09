<template>
  <div class="comment">
    <Comment :hotComments="hotComments" :comments="comments"></Comment>
  </div>
</template>
<script setup>
import Comment from "@/components/common/Comment";
import { playList } from "@/store/playlist";
import { storeToRefs } from "pinia";
const props = defineProps(["PlayListId"]);
const playListStore = playList();
const { hotComments, comments } = storeToRefs(playListStore);
// 请求歌单评论数据
playListStore.getComment(props.PlayListId);
</script>
<style lang="scss" scoped></style>
