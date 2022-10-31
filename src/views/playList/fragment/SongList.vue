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
          v-for="(item, index) in songList"
          :key="item.id"
          :class="{ bgc: index % 2, isSelect: index == songIndex }"
          @dblclick.stop="play(item.id, index)"
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
import axios from "axios";
import { reqSongUrl, likeSong } from "@/api/index";
import { useRouter } from "vue-router";
import { songDetail } from "@/store/playlist";
import { formatIndex, formatPlayTime } from "@/utils/Format/format";
import { storeToRefs } from "pinia";
import { ref } from "vue";
const props = defineProps(["songList"]);
const router = useRouter();
const songDetailStore = songDetail();
const { isPlaying } = storeToRefs(songDetailStore);
const songIndex = ref(-1);
// 控制音乐播放
const play = (id, index) => {
  songIndex.value = index;
  // 获取id之后发请求，捞数据 url
  songDetailStore.getSongUrl(id, "standard");
  // 捞歌曲详情
  songDetailStore.getSongDetail(id);
  // 去通知播放音乐
  isPlaying.value = false;
  setTimeout(() => {
    isPlaying.value = true;
  }, 1000);
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
