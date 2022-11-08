<template>
  <div class="song-list">
    <table class="s-table">
      <thead>
        <tr>
          <th class="w w1">操作</th>
          <th class="w w2">标题</th>
          <th class="w w3">歌手</th>
          <th class="w w4">专辑</th>
          <th class="w w5">时间</th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="(item, index) in songs"
          :key="item.id"
          :class="{ bgc: index % 2, isSelect: index == songIndex }"
          @dblclick.stop="dbClickPlay(item.id, index)"
        >
          <td class="w w1">
            <span
              ><i v-if="index !== songIndex">{{ formatIndex(index + 1) }}</i
              ><i v-else class="iconfont icon-yinlianglabashengyin"></i
            ></span>
            <span class="iconfont icon-zan" @click="addToFond(item.id)"></span>
            <span class="iconfont icon-download" @click="download(item)"></span>
          </td>
          <td class="w w2">
            <span>{{ item.name }}</span>
          </td>
          <td class="w w3">
            <span>
              <a
                class="pointer"
                v-for="(ar, index) in item.ar"
                :key="ar.id"
                @click="gotoArtist(ar.id)"
                >{{ ar.name }}<i v-if="item.ar.length - 1 !== index"> / </i></a
              >
            </span>
          </td>
          <td class="w w4">
            <span>
              <a class="pointer" @click="gotoAblum(item.al.id)">{{
                item.al.name
              }}</a>
            </span>
          </td>
          <td class="w w5">
            <span>{{ formatPlayTime(item.dt) }}</span>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script setup>
import { reqSongs } from "@/api/index.js";
import { ref, onMounted, onBeforeMount, onUnmounted, nextTick } from "vue";
import axios from "axios";
import play from "@/utils/play";
import { playList } from "@/store/playlist";
import { reqSongUrl, likeSong } from "@/api/index";
import { useRouter, useRoute } from "vue-router";
import { formatIndex, formatPlayTime } from "@/utils/Format/format";
import { storeToRefs } from "pinia";
const props = defineProps(["boxDom"]);
const playListStore = playList();
const { songs, hasMore, offset } = storeToRefs(playListStore);
const router = useRouter(),
  route = useRoute();
const songIndex = ref(-1);
// 控制音乐播放
const dbClickPlay = (id, index) => {
  songIndex.value = index;
  play(id);
};
// 跳转到某个歌手页面
const gotoArtist = (ArtistId = -1) => {
  router.push({
    path: "/artist",
    query: {
      id: ArtistId,
    },
  });
};
// 跳转到专辑
const gotoAblum = (ablumId) => {
  // 专辑和歌单结构类似
  router.push({
    path: "/album/songlist",
    query: {
      id: ablumId,
    },
  });
};
// 点击下载歌曲功能
const download = async (song) => {
  // 拿到id之后，去获取歌曲的url
  let { data } = await reqSongUrl(song.id);
  let { type, url } = data.data[0];
  let res = await axios({
    method: "get",
    url,
    responseType: "blob",
  });
  let blob = new Blob([res.data]);
  // 创建一个临时的url指向blob对象
  let tempUrl = window.URL.createObjectURL(blob);
  //创建一个a标签，用来下载
  let aElement = document.createElement("a");
  aElement.href = tempUrl;
  aElement.download = `${song.name}.${type}`;
  aElement.click();
  // 释放这个临时的对象url
  window.URL.revokeObjectURL(tempUrl);
  // 删除创建的a元素
  aElement.remove();
};
// 添加到个人喜欢功能
const addToFond = async (id) => {
  console.log("添加到我喜欢", id);
  let { data } = await likeSong(id);
  if (data.code === 200) {
    // 添加成功
    ElMessage({
      showClose: true,
      message: "已添加到我喜欢",
      type: "success",
    });
  } else if (data.code === 302) {
    ElMessage({
      showClose: true,
      message: "添加失败，请登录后操作",
      type: "warning",
    });
  }
};
// onBeforeMount(() => {
//   // 在第一次组件挂载之前，要做初始化
//   hasMore.value = true;
// });
const scroll = async () => {
  if (hasMore.value) {
    // 计算出是否滚动到了底部
    if (
      props.boxDom.scrollTop + props.boxDom.clientHeight >=
      props.boxDom.scrollHeight
    ) {
      offset.value += 50; // 这个50为偏移量
      // 触发请求加载更多的数据;请求回来的数据应该追加到仓库里
      let { data } = await reqSongs(route.query.id, {
        offset: offset.value,
      });
      if (data.songs.length == 0) {
        hasMore.value = false;
        console.log("没有更多了");
        return;
      }
      if (data.code === 200) {
        songs.value.push(...data.songs);
      }
    }
  }
};
onMounted(() => {
  nextTick(() => {
    props.boxDom.addEventListener("scroll", scroll);
  });
});
onUnmounted(() => {
  props.boxDom.removeEventListener("scroll", scroll);
});
</script>
<style lang="scss" scoped>
.song-list {
  .s-table {
    width: 100%;
    color: #888888;
    thead,
    tbody {
      tr {
        display: flex;
        a {
          color: #888888;
        }
        .w {
          margin-right: 10px;
          display: flex;
          align-items: center;
          overflow: hidden;
          span {
            text-overflow: ellipsis;
            white-space: nowrap;
            overflow: hidden;
          }
        }
        .w1,
        .w5 {
          flex: 1;
        }
        .w2,
        .w3,
        .w4 {
          flex: 3;
          width: 0;
        }
        .w3 {
          flex: 2;
        }
        .pointer {
          cursor: pointer;
          &:hover {
            color: #ad91ec;
          }
        }
        &.bgc {
          background-color: #fafafa;
        }
        &.isSelect {
          background-color: #e5e5e5;
        }
        text-align: left;
        th {
          height: 34px;
          &.w1 {
            justify-content: center;
          }
        }
        td {
          height: 34px;
          &.w1 {
            display: flex;
            justify-content: space-evenly;
            align-items: center;
          }
        }
        &:hover {
          background-color: #f1f2f3;
        }
      }
    }
    tbody {
      tr {
        .w2 {
          color: #373737;
        }
      }
    }
  }
}
</style>
