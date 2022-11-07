<template>
  <div class="artist ctn-mode" ref="box" @scroll="handleScroll">
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
    <el-backtop :right="100" :bottom="100" />
  </div>
</template>

<script setup>
import TopNav from "@/components/topNav/TopNav";
import { ref, reactive, watch, onMounted } from "vue";
import { artistListStore } from "@/store/artist";
import { storeToRefs } from "pinia";
const ArtistListStore = artistListStore();
const { hasMore } = storeToRefs(ArtistListStore);
// 定义一些选项数据
const areaList = ["全部", "华语", "欧美", "日本", "韩国", "其他"];
const typeList = ["全部", "男歌手", "女歌手", "乐队组合"];
const letterList = [
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
// 获取DOM
const box = ref(null);
// 处理滚动加载更多
const handleScroll = async () => {
  if (hasMore.value) {
    // 计算出是否滚动到了底部
    if (
      box.value.scrollTop + box.value.clientHeight >=
      box.value.scrollHeight
    ) {
      console.log(box.value.scrollHeight);
      offset.value += 20; // 这个20为偏移量
      // 触发请求加载更多的数据;请求回来的数据应该追加到仓库里
      // let { data } = await reqSongs(route.query.id, { offset: offset.value });
      // if (data.songs.length == 0) {
      //   hasMore.value = false;
      //   alert("没有了");
      //   return;
      // }
      // if (data.code === 200) {
      //   songs.value.push(...data.songs);
      // }
    }
  }
};
// const throttleHanl
// 请求的参数
const params = reactive({
  type: -1,
  initial: -1,
  area: -1,
});
// 标记哪个标签高亮用的
const initialActive = ref(0),
  typeActive = ref(0),
  areaActive = ref(0);
// 点击 语种的回调
const choiceArea = (item, index) => {
  areaActive.value = index;
  switch (item) {
    case "全部":
      params.area = -1;
      break;
    case "华语":
      params.area = 7;
      break;
    case "欧美":
      params.area = 96;
      break;
    case "日本":
      params.area = 8;
      break;
    case "韩国":
      params.area = 16;
      break;
    case "其他":
      params.area = 0;
      break;
  }
};
// 点击 分类的回调
const choiceType = (item, index) => {
  typeActive.value = index;
  switch (item) {
    case "全部":
      params.type = -1;
      break;
    case "男歌手":
      params.type = 1;
      break;
    case "女歌手":
      params.type = 2;
      break;
    case "乐队组合":
      params.type = 3;
      break;
  }
};
//点击 筛选的回调
const choiceInitial = (item, index) => {
  initialActive.value = index;
  if (item == "热门") {
    params.initial = -1;
  } else if (item == "#") {
    params.initial = 0;
  } else {
    params.initial = item.toLowerCase();
  }
};
// 侦听参数的变化重新发请求
watch(params, () => {
  ArtistListStore.getArtist(params);
});
// 发请求，初始化数据
ArtistListStore.getArtist(params);
onMounted(() => {
  // 监听
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
