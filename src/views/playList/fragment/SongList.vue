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
          :class="{ bgc: index % 2 }"
          @dblclick="play(item.id)"
        >
          <td class="w w1">
            <span>{{ formatIndex(index + 1) }}</span>
            <span class="iconfont icon-zan"></span>
            <span class="iconfont icon-download"></span>
          </td>
          <td class="w w2">
            <span>{{ item.name }}</span>
          </td>
          <td class="w w3">
            <span>
              <a
                class="pointer"
                v-for="ar in item.ar"
                :key="ar.id"
                @click="gotoArtist(ar.id)"
                >{{ ar.name }}&nbsp;</a
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
import { useRouter } from "vue-router";
import { songDetail } from "@/store/playlist";
import { formatIndex, formatPlayTime } from "@/utils/Format/format";
const props = defineProps(["songList"]);
const router = useRouter();
const songDetailStore = songDetail();
const play = (id) => {
  // 获取id之后发请求，捞数据 url
  songDetailStore.getSongUrl(id, "standard");
  // 捞歌曲详情
  songDetailStore.getSongDetail(id);
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
  // router.push({
  //   path: "",
  // });
  console.log(ablumId);
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
