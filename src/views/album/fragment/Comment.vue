<template>
  <Comment :hotComments="hotComments" :comments="comments"></Comment>
</template>
<script setup>
import { onMounted } from "vue";
import Comment from "@/components/common/Comment";
import { album } from "@/store/index.js";
import { storeToRefs } from "pinia";
const albumStore = album();
const { hotComments, comments } = storeToRefs(albumStore);
const props = defineProps(["albumId"]);
// 请求专辑评论数据
albumStore.getAlbumComment(props.albumId);
onMounted(() => {
  console.log();
});
</script>
