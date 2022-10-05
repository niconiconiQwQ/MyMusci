<template>
  <div class="exclusive">
    <a href="" class="title-mode"
      ><h1>独家放送</h1>
      <span class="iconfont icon-right"></span
    ></a>
    <ul class="ul-mode">
      <li class="item" v-for="item in list" :key="item.id">
        <a href=""
          ><div class="play-mode iconfont icon-play"></div>
          <img v-lazy="item.picUrl" alt=""
        /></a>
        <div class="msg">{{ item.name }}</div>
      </li>
    </ul>
  </div>
</template>
<script setup>
import { ref, onBeforeMount, onMounted } from "vue";
import { Personalized } from "@/store/index";
import { storeToRefs } from "pinia";
const PersonalizedStore = Personalized();
const { list } = storeToRefs(PersonalizedStore);
onBeforeMount(() => {
  PersonalizedStore.getList();
});
onMounted(() => {});
</script>
<style lang="scss" scoped>
.exclusive {
  ul {
    li {
      width: 32%;
      a {
        position: relative;
        display: block;
        border-radius: 10px;
        overflow: hidden;
        margin-bottom: 8px;
        height: 190px;
        img {
          width: 100%;
          height: 100%;
        }
        .play-mode {
          display: block;
          top: 8px;
          left: 10px;
          background-color: transparent;
          border: 1px solid #fff;
          color: #fff;
        }
      }
    }
  }
}
</style>
