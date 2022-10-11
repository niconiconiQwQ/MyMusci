<template>
  <div class="home-mv">
    <div class="latest">
      <nav>
        <div class="title">
          <span>最新MV</span><span class="iconfont icon-right"></span>
        </div>
      </nav>
      <ul>
        <li class="a-mode1" v-for="item in latestMV" :key="item.id">
          <a href="#" class="a-mode1" @click="">
            <div class="num-mode">
              <span class="iconfont icon-bofang"></span
              ><span>{{ formatNumber(item.playCount) }}</span>
            </div>
            <img v-lazy="item.cover" alt=""
          /></a>
          <div class="name">{{ item.name }}</div>
          <div class="creator">
            by
            <span v-for="art in item.artists" :key="art.id">{{
              art.name
            }}</span>
          </div>
        </li>
      </ul>
    </div>
    <div class="hot">
      <nav>
        <div class="title">
          <span>热播MV</span>
          <span class="iconfont icon-right"></span>
        </div>
      </nav>
      <ul>
        <li class="a-mode1" v-for="index in 8" :key="index">
          <a href="#" class="a-mode1" @click="gotoPlayList()">
            <div class="num-mode">
              <span class="iconfont icon-bofang"></span
              ><span>{{ formatNumber(112343) }}</span>
            </div>
            <div class="time-mode">{{ formatPlayTime(300000) }}</div>
            <img src="@/assets/images/m3.jpg" alt=""
          /></a>
          <div class="name">空空如也</div>
          <div class="creator">by <span>欧阳娜娜</span></div>
        </li>
      </ul>
    </div>
    <div class="official">
      <nav>
        <div class="title">
          <span>网易出品</span>
          <span class="iconfont icon-right"></span>
        </div>
      </nav>
      <ul>
        <li class="a-mode1" v-for="index in 8" :key="index">
          <a href="#" class="a-mode1" @click="gotoPlayList()">
            <div class="num-mode">
              <span class="iconfont icon-bofang"></span
              ><span>{{ formatNumber(112343) }}</span>
            </div>
            <div class="time-mode">{{ formatPlayTime(300000) }}</div>
            <img src="@/assets/images/m3.jpg" alt=""
          /></a>
          <div class="name">空空如也</div>
        </li>
      </ul>
    </div>
    <div class="topList">
      <nav>
        <div class="title">
          <span>MV排行榜</span>
          <span class="iconfont icon-right"></span>
        </div>
      </nav>
      <ul>
        <li class="a-mode1" v-for="index in 8" :key="index">
          <div class="index">1</div>
          <a href="#" class="a-mode1" @click="gotoPlayList()">
            <div class="num-mode">
              <span class="iconfont icon-bofang"></span
              ><span>{{ formatNumber(112343) }}</span>
            </div>
            <img src="@/assets/images/m3.jpg" alt=""
          /></a>
          <div class="name">
            <div>平凡又美好的晚上</div>
            <div>王曦</div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>
<script setup>
import { ref, onMounted, onBeforeMount, defineProps, watch } from "vue";
import { useRouter, useRoute } from "vue-router";
import { formatNumber, formatPlayTime } from "@/utils/Format/format";
import { storeToRefs } from "pinia";
import { RecommendMV } from "@/store/index";
const MVStore = RecommendMV();
const { latestMV } = storeToRefs(MVStore);
// 发请求捞数据
MVStore.getFirstMV();
MVStore.getAllMV();
MVStore.getExclusive();
const route = useRoute(),
  router = useRouter();
onBeforeMount(() => {});
onMounted(() => {});
</script>
<style lang="scss" scoped>
.home-mv {
  margin-top: 20px;
  nav {
    margin-bottom: 16px;
    .title {
      font-size: 1.6rem;
      font-weight: 600;
      display: flex;
      align-items: center;
      .iconfont {
        font-size: 2rem;
      }
    }
  }
  .latest,
  .hot,
  .official {
    margin-bottom: 20px;
    > ul {
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;
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
          span {
            margin-right: 6px;
          }
        }
      }
    }
  }
  .topList {
    > ul {
      display: flex;
      flex-wrap: wrap;

      li {
        width: 50%;
        display: flex;
        // padding: 20px;
        border-bottom: 1px solid #f2f2f2;

        .a-mode1 {
          height: 95px;
          width: 40%;
          margin-right: 10px;
        }
        .index {
          display: flex;
          align-items: center;
          font-size: 2rem;
          margin-right: 10px;
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
