<template>
  <div class="video-home">
    <div class="nav">
      <a class="choice" @click.stop="showTags">
        <span>全部歌单</span>
        <span class="iconfont icon-right"></span>
      </a>
      <ul class="title">
        <li v-for="index in 6" :key="index">二次元</li>
      </ul>
    </div>
    <div class="video-box">
      <ul class="ul-mode">
        <li class="a-mode1" v-for="index in 20" :key="index">
          <a href="#" class="a-mode1" @click="gotoPlayList()">
            <div class="num-mode">
              <span class="iconfont icon-bofang"></span
              ><span>{{ formatNumber(112343) }}</span>
            </div>
            <div class="time-mode">{{ formatPlayTime(300000) }}</div>
            <img src="@/assets/images/m3.jpg" alt=""
          /></a>
          <div class="name">
            仓木麻衣孙燕姿隔空对唱《toning, i feel clolllllllllllll》
          </div>
          <div class="creator">by <span>全球音乐吧</span></div>
        </li>
      </ul>
    </div>
  </div>
</template>
<script setup>
import { ref, onMounted, onBeforeMount } from "vue";
import { useRouter, useRoute } from "vue-router";
import { formatNumber, formatPlayTime } from "@/utils/Format/format";
import { xxx } from "@/store/index";
onBeforeMount(() => {});
onMounted(() => {});
</script>
<style lang="scss" scoped>
.video-home {
  .nav {
    width: 100%;
    height: 30px;
    margin: 20px 0px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .choice {
      position: relative;
      width: 100px;
      height: 30px;
      border: 1px solid #d9d9d9;
      border-radius: 30px;
      color: #373737;
      font-size: 14px;
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      padding-left: 8px;
      .iconfont {
        font-size: 26px;
      }
      &:hover {
        background-color: #f2f2f2;
      }
    }
    .title {
      display: flex;
      li {
        color: #676767;
        padding: 2px 8px;
        cursor: pointer;
        background-color: #fdebeb;
        border-radius: 10px;
        margin-left: 20px;
        font-size: 1.2rem;
        &:hover {
          color: #000;
        }
        &.active {
        }
      }
    }
  }
  .video-box {
    > ul {
      justify-content: space-between;
      li {
        width: 24%;
        margin-bottom: 20px;
        .a-mode1 {
          height: 140px;
        }
        .name {
          color: #373737;
          text-overflow: ellipsis;
          overflow: hidden;
          white-space: nowrap;
          margin: 4px 0;
          &:hover {
            color: #000000;
          }
        }
        .creator {
          color: #e7cfcf;
        }
      }
    }
  }
}
</style>
