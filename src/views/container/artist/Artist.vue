<template>
  <div class="artist ctn-mode">
    <!-- 顶部标题导航组件 -->
    <TopNav></TopNav>
    <!-- 筛选类型 -->
    <ul class="attr">
      <li class="language">
        <ul>
          <li class="title">
            <div>语种:</div>
          </li>
          <li v-for="(item,index) in areaList" :key="index" @click="choiceArea(item)">
            <div class="active">{{item}}</div>
          </li>
        </ul>
      </li>
      <li class="classify">
        <ul>
          <li class="title">
            <div>分类:</div>
          </li>
          <li v-for="(item, index) in typeList" :key="index" @click="choiceType(item)">
            <div class="active">{{item}}</div>
          </li>
        </ul>
      </li>
      <li class="election">
        <div class="title">筛选:</div>
        <ul>
          <li  v-for="item in letterList" @click="choiceInitial(item)">
            <div class="active">{{ item }}</div>
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
        <a href="" class="a-mode1"> <img :src="item.img1v1Url" alt="" /></a>
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
import { artistListStore } from "@/store/index";
const ArtistListStore = artistListStore();
let areaList = ["全部", "华语", "欧美", "日本", "韩国", "其他"];
let typeList = ["全部", "男歌手", "女歌手", "乐队组合"];
let letterList = ['热门', "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "#"];
let initial = ref();
let type = ref();
let area = ref();
let query = computed(() => `type=${type.value || -1}&area=${area.value || -1}&initial=${initial.value === 0?0:-1}`);
// 点击语种的回调
const choiceArea = (item) => {
  let areaNum = -1;
  switch (item) {
    case '全部': areaNum = -1;break;
    case '华语': areaNum = 7; break;
    case '欧美': areaNum = 96; break;
    case '日本': areaNum = 8; break;
    case '韩国': areaNum = 16; break;
    case '其他': areaNum = 0; break;
  }
  area.value = areaNum;
  ArtistListStore.getArtist(query.value);
}
// 点击 分类的回调
const choiceType = (item) => {
  let typeNum = -1;
  switch (item) {
    case '全部': typeNum = -1; break;
    case '男歌手': typeNum = 1; break;
    case '女歌手': typeNum = 2; break;
    case '乐队组合': typeNum = 3; break;
  }
  type.value = typeNum;
  // 发请求
  ArtistListStore.getArtist(query.value);
}
  //点击 筛选的回调
const choiceInitial = (item) => {
  let initialNum = -1;// 热门
  if (item == '热门') {
    initial.value = -1;
  } else if (item == '#') {
    initial.value = 0;
  } else {
    initial.value = item.toLowerCase();
  }
    ArtistListStore.getArtist(query.value);
}
onBeforeMount(() => {
  ArtistListStore.getArtist(query.value);
})
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
        color: #737373;
        font-weight: 600;
        border: none;
        margin-right: 6px;
        div{
          &:hover{
            background-color: transparent;
            cursor: default;
          }
        }
      }

      ul {
        display: flex;

        li {
          cursor: pointer;
          margin-right: 20px;
          div {
            height: 100%;
            border-radius: 20px;
            padding: 1px 8px;
            &:hover{
              background-color: #a7c7c740;
            }
            &.active {
              background-color: #a7c7c740;
            }
          }
        }
      }
    }

    .election {
      .title {
        padding: 1px 6px 1px 8px;
        width: 62px;
        margin-right: 4px;
      }
      ul {
        li {
          margin-bottom: 6px;
          div{
            display: flex;
            align-items: center;
            justify-content: center;
          }
        }
        flex-wrap: wrap;
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
