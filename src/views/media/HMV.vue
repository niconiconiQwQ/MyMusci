<template>
  <div class="home-mv">
    <!-- 最新MV -->
    <div class="latest">
      <nav>
        <div class="title">
          <span>最新MV</span><span class="iconfont icon-right"></span>
        </div>
        <div class="tag">
          <ul>
            <li>
              <a
                href="#"
                :class="{ active: latestCur == 0 }"
                @click="select('内地', 'latest', 0)"
                >内地</a
              >
            </li>
            <li>
              <a
                href="#"
                :class="{ active: latestCur == 1 }"
                @click="select('港台', 'latest', 1)"
                >港台</a
              >
            </li>
            <li>
              <a
                href="#"
                :class="{ active: latestCur == 2 }"
                @click="select('欧美', 'latest', 2)"
                >欧美</a
              >
            </li>
            <li>
              <a
                href="#"
                :class="{ active: latestCur == 3 }"
                @click="select('日本', 'latest', 3)"
                >日本</a
              >
            </li>
            <li>
              <a
                href="#"
                :class="{ active: latestCur == 4 }"
                @click="select('韩国', 'latest', 4)"
                >韩国</a
              >
            </li>
          </ul>
        </div>
      </nav>
      <ul>
        <li class="a-mode1" v-for="item in latestMV" :key="item.id">
          <a href="#" class="a-mode1" @click="goMV(item.id)">
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
    <!-- 热门MV -->
    <div class="hot">
      <nav>
        <div class="title">
          <span>热播MV</span>
          <span class="iconfont icon-right"></span>
        </div>
      </nav>
      <ul>
        <li class="a-mode1" v-for="item in hotMV" :key="item.id">
          <a href="#" class="a-mode1" @click="goMV(item.id)">
            <div class="num-mode">
              <span class="iconfont icon-bofang"></span
              ><span>{{ formatNumber(item.playCount) }}</span>
            </div>
            <img v-lazy="item.cover" alt=""
          /></a>
          <div class="name">{{ item.name }}</div>
          <div class="creator">
            by <span v-for="art in item.artists">{{ art.name }}</span>
          </div>
        </li>
      </ul>
    </div>
    <!-- 网易出品MV -->
    <div class="official">
      <nav>
        <div class="title">
          <span>网易出品</span>
          <span class="iconfont icon-right"></span>
        </div>
      </nav>
      <ul>
        <li class="a-mode1" v-for="item in Exclusive" :key="item.id">
          <a href="#" class="a-mode1" @click="goMV(item.id)">
            <div class="num-mode">
              <span class="iconfont icon-bofang"></span
              ><span>{{ formatNumber(item.playCount) }}</span>
            </div>
            <img v-lazy="item.cover" alt=""
          /></a>
          <div class="name">{{ item.name }}</div>
        </li>
      </ul>
    </div>
    <!-- MV排行榜 -->
    <div class="topList">
      <nav>
        <div class="title">
          <span>MV排行榜</span>
          <span class="iconfont icon-right"></span>
        </div>
        <div class="tag">
          <ul>
            <li>
              <a
                href="#"
                :class="{ active: topCur == 0 }"
                @click="select('内地', 'top', 0)"
                >内地</a
              >
            </li>
            <li>
              <a
                href="#"
                :class="{ active: topCur == 1 }"
                @click="select('港台', 'top', 1)"
                >港台</a
              >
            </li>
            <li>
              <a
                href="#"
                :class="{ active: topCur == 2 }"
                @click="select('欧美', 'top', 2)"
                >欧美</a
              >
            </li>
            <li>
              <a
                href="#"
                :class="{ active: topCur == 3 }"
                @click="select('日本', 'top', 3)"
                >日本</a
              >
            </li>
            <li>
              <a
                href="#"
                :class="{ active: topCur == 4 }"
                @click="select('韩国', 'top', 4)"
                >韩国</a
              >
            </li>
          </ul>
        </div>
      </nav>
      <ul>
        <li class="a-mode1" v-for="(item, index) in topMV" :key="item.id">
          <div class="index">{{ index + 1 }}</div>
          <a href="#" class="a-mode1" @click="goMV(item.id)">
            <div class="num-mode">
              <span class="iconfont icon-bofang"></span
              ><span>{{ formatNumber(item.playCount) }}</span>
            </div>
            <img v-lazy="item.cover" alt=""
          /></a>
          <div class="name">
            <div>{{ item.name }}</div>
            <div>{{ item.artistName }}</div>
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
const route = useRoute(),
  router = useRouter();
const MVStore = RecommendMV();
const { latestMV, Exclusive, hotMV, topMV } = storeToRefs(MVStore);
// 定义一些变量
const latestCur = ref(0);
const topCur = ref(0);
const select = (tag, type, cur) => {
  if (type == "latest") {
    // 根据tag发请求，获取新mv
    latestCur.value = cur;
    MVStore.getFirstMV({ area: tag });
  } else if (type == "top") {
    // 获取mv排行
    topCur.value = cur;
    MVStore.getTopMV({ area: tag });
  }
};
// 发请求捞数据
MVStore.getFirstMV();
MVStore.getAllMV();
MVStore.getExclusive();
MVStore.getTopMV();
const goMV = (id) => {
  router.push({
    path: "/video",
    query: {
      id,
    },
  });
};

onBeforeMount(() => {
  console.log(topMV.value);
});
onMounted(() => {});
</script>
<style lang="scss" scoped>
.home-mv {
  margin-top: 20px;
  nav {
    margin-bottom: 16px;
    display: flex;
    justify-content: space-between;
    .title {
      font-size: 1.6rem;
      font-weight: 600;
      display: flex;
      align-items: center;
      .iconfont {
        font-size: 2rem;
      }
    }
    .tag {
      ul {
        display: flex;
        li {
          margin-left: 10px;
          a {
            display: block;
            padding: 2px 8px;
            border-radius: 10px;
            &.active {
              color: #ec4141;
              background-color: #fdebeb;
            }
          }
        }
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
        width: 48%;
        display: flex;
        padding: 20px 20px 20px 0;
        border-bottom: 1px solid #f2f2f2;
        margin-right: 1%;
        &:nth-child(odd) {
          border-right: 1px solid #f2f2f2;
        }
        .a-mode1 {
          height: 95px;
          width: 40%;
          margin-right: 20px;
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
          div {
            &:first-child {
              margin: 4px 0 16px 0;
            }
            &:last-child {
              font-size: 1.2rem;
              color: #949494;
            }
          }
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
