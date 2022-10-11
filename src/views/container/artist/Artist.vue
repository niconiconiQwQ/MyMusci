<template>
  <div class="artist ctn-mode">
    <!-- 顶部标题导航组件 -->
    <TopNav></TopNav>
    <!-- 筛选类型 -->
    <ul class="attr">
      <li class="language">
        <div class="title">语种:</div>
        <ul>
          <li
            v-for="(item, index) in areaList"
            :key="index"
            @click="choiceArea(item, index)"
          >
            <div :class="{ active: areaActive == index }">{{ item }}</div>
          </li>
        </ul>
      </li>
      <li class="classify">
        <div class="title">分类:</div>
        <ul>
          <li
            v-for="(item, index) in typeList"
            :key="index"
            @click="choiceType(item, index)"
          >
            <div :class="{ active: typeActive == index }">{{ item }}</div>
          </li>
        </ul>
      </li>
      <li class="election">
        <div class="title">筛选:</div>
        <ul>
          <li
            v-for="(item, index) in letterList"
            @click="choiceInitial(item, index)"
          >
            <div :class="{ active: initialActive == index }">{{ item }}</div>
          </li>
        </ul>
      </li>
    </ul>
    <!-- 作者列表 -->
    <ul class="ul-mode">
      <li
        class="item"
        v-for="item in ArtistListStore.artistsList"
        :key="item.id"
      >
        <router-link
          class="a-mode1"
          :to="{ path: '/artist', query: { id: item.id } }"
        >
          <img v-lazy="item.picUrl" alt=""
        /></router-link>
        <div class="artist-name">
          <span>{{ item.name }}</span
          ><span class="iconfont icon-yonghu"></span>
        </div>
      </li>
    </ul>
  </div>
</template>

<script setup>
import TopNav from "@/views/container/topNav/TopNav";
import { ref, onBeforeMount, computed } from "vue";
import { artistListStore } from "@/store/artist";
const ArtistListStore = artistListStore();
let areaList = ["全部", "华语", "欧美", "日本", "韩国", "其他"];
let typeList = ["全部", "男歌手", "女歌手", "乐队组合"];
let letterList = [
  "热门",
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
  "#",
];
let initial = ref();
let type = ref();
let area = ref();
let initialActive = ref(0);
let typeActive = ref(0);
let areaActive = ref(0);
let params = computed(() => ({
  type: type.value,
  area: area.value,
  initial: initial.value,
}));
// 点击 语种的回调
const choiceArea = (item, index) => {
  areaActive.value = index;
  let areaNum = -1;
  switch (item) {
    case "全部":
      areaNum = -1;
      break;
    case "华语":
      areaNum = 7;
      break;
    case "欧美":
      areaNum = 96;
      break;
    case "日本":
      areaNum = 8;
      break;
    case "韩国":
      areaNum = 16;
      break;
    case "其他":
      areaNum = 0;
      break;
  }
  area.value = areaNum;
  console.log(params.value);
  ArtistListStore.getArtist(params.value);
};
// 点击 分类的回调
const choiceType = (item, index) => {
  typeActive.value = index;
  let typeNum = -1;
  switch (item) {
    case "全部":
      typeNum = -1;
      break;
    case "男歌手":
      typeNum = 1;
      break;
    case "女歌手":
      typeNum = 2;
      break;
    case "乐队组合":
      typeNum = 3;
      break;
  }
  type.value = typeNum;
  console.log(params.value);
  // 发请求
  ArtistListStore.getArtist(params.value);
};
//点击 筛选的回调
const choiceInitial = (item, index) => {
  initialActive.value = index;
  if (item == "热门") {
    initial.value = -1;
  } else if (item == "#") {
    initial.value = 0;
  } else {
    initial.value = item.toLowerCase();
  }
  console.log(params.value);
  ArtistListStore.getArtist(params.value);
};
onBeforeMount(() => {
  ArtistListStore.getArtist(params.value);
});
</script>

<style lang="scss" scoped>
.artist {
  .attr {
    .language,
    .classify,
    .election {
      margin-bottom: 12px;
      display: flex;

      .title {
        white-space: nowrap;
        color: #737373;
        font-weight: 600;
        border: none;
        margin-right: 16px;
        div {
          &:hover {
            background-color: transparent;
            cursor: default;
          }
        }
      }
      ul {
        display: flex;
        flex-wrap: wrap;
        li {
          cursor: pointer;
          margin-bottom: 8px;
          margin-right: 20px;

          div {
            height: 100%;
            border-radius: 20px;
            padding: 1px 8px;
            display: flex;
            align-items: center;
            justify-content: center;
            &:hover {
              background-color: #a7c7c740;
            }
            &.active {
              background-color: #a7c7c740;
            }
          }
        }
      }
    }
  }

  .ul-mode {
    li {
      width: 19%;
      margin-bottom: 30px;

      a {
        margin-bottom: 10px;
      }

      .artist-name {
        display: flex;
        padding: 0 4px;
        justify-content: space-between;
        align-items: center;
        font-size: 16px;

        .iconfont {
          width: 16px;
          height: 16px;
          font-size: 16px;
          display: flex;
          justify-content: center;
          border-radius: 50%;
          color: #fff;
          background-color: #f54a43;
        }
      }
    }
  }
}
</style>
