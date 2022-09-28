<template>
  <div class="latest">
    <a href="" class="title-mode"
      ><h1>最新音乐</h1>
      <span class="iconfont icon-right"></span
    ></a>
    <ul class="ul-mode">
      <li class="item" v-for="item in LatestSotre.nineList" :key="item.id">
        <a href="" class="a-mode1">
          <div class="play-mode iconfont icon-play"></div>
          <img :src="item.picUrl" alt=""
        /></a>
        <div class="msg">
          <h5>{{ item.name }}&nbsp;&nbsp;{{ item.song.alias[0] }}</h5>
          <div>
            <span class="tag">SQ</span>
            <span v-for="art in item.song.artists" :key="art.id">{{
              art.name
            }}</span>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>
<script setup>
import { onMounted, onBeforeMount } from "vue";
import { Latest } from "@/store/index";
const LatestSotre = Latest();
onMounted(() => {});
onBeforeMount(() => {
  LatestSotre.getLatestList();
});
</script>
<style lang="scss" scoped>
.msg-mode1 {
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: space-around;
}
.latest {
  ul {
    li {
      width: 32%;
      height: 48px;
      display: flex;
      margin-bottom: 18px;
      a {
        height: 100%;
        width: 48px;
        margin-right: 10px;
        .play-mode {
          height: 24px;
          width: 24px;
          line-height: 24px;
          font-size: 18px;
          padding-right: 1px;
        }
      }
      .msg {
        @extend .msg-mode1;
        overflow: hidden;
        h5 {
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }
        div {
          span {
            &.tag {
              border: 1px solid rgb(130, 183, 211);
              margin-right: 4px;
              border-radius: 4px;
              padding: 0 2px;
            }
          }
        }
        &:hover {
          background-color: #ebebeb;
        }
      }
    }
  }
}
</style>
