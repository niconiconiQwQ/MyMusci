<template>
  <div class="comment">
    <div class="send">
      <div class="text">
        <textarea name="" id="" v-model="LastNum"></textarea
        ><span>{{ 140 - LastNum.length }}</span>
      </div>
      <div class="ctrl">
        <div class="select">
          <span class="emoji">😅</span>
          <span class="at">@</span>
          <span class="mark">#</span>
        </div>
        <a class="btn">评论</a>
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref, onMounted, onBeforeMount } from "vue";
import { useRouter, useRoute } from "vue-router";
let LastNum = ref("");
onBeforeMount(() => {});
onMounted(() => {});
</script>
<style lang="scss" scoped>
.comment {
  .send {
    .text {
      position: relative;
      margin-bottom: 10px;
      textarea {
        width: 100%;
        height: 68px;
        padding: 4px;
        border: 1px solid #e5e5e5;
        border-radius: 4px;
      }
      span {
        position: absolute;
        bottom: 4px;
        right: 4px;
      }
    }
    .ctrl {
      display: flex;
      justify-content: space-between;
      .select {
        span {
          margin-right: 14px;
          font-size: 16px;
          cursor: pointer;
        }
      }
      .btn {
        display: block;
        cursor: pointer;
        height: 30px;
        border-radius: 24px;
        border: 1px solid #e5e5e5;
        padding: 0px 15px;
        line-height: 30px;
        &:hover {
          background-color: #f2f2f2;
        }
      }
    }
  }
}
</style>
