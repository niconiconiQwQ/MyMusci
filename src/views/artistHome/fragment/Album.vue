<template>
  <div class="album">
    <div class="left">
      <img src="@/assets/images/top50.png" alt="" />
    </div>
    <div class="right">
      <div class="ctrl">
        <span class="title">歌手热门50首</span
        ><a href="#" class="iconfont icon-play1"></a>
        <a href="#" class="iconfont icon-yulanshoucang"></a>
      </div>
      <table class="s-table">
        <thead></thead>
        <tbody>
          <tr
            v-for="(item, index) in props.songs"
            :key="item.id"
            :class="{ bgc: index % 2 }"
            @dblclick="dbClickPlay(item.id)"
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
              <span>{{ formatPlayTime(item.dt) }}</span>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
<script setup>
import { defineProps } from "vue";
import { formatPlayTime, formatIndex } from "@/utils/Format/format";
import play from "@/utils/play";
// 双击播放
const dbClickPlay = (id) => {
  play(id);
};
const props = defineProps(["songs", "title"]);
</script>
<style lang="scss" scoped>
.album {
  display: flex;
  margin-bottom: 60px;
  width: 100%;
  .left {
    margin-right: 60px;
    a {
      display: block;
      height: 150px;
      width: 150px;
      border-radius: 6px;
      overflow: hidden;
      img {
        height: 100%;
        width: 100%;
      }
    }
  }
  .right {
    width: 100%;
    .ctrl {
      margin-bottom: 15px;
      .title {
        font-size: 1.6rem;
        font-weight: 600;
        margin-right: 20px;
      }
      .iconfont {
        padding: 0 10px;
        font-size: 1.8rem;
      }
      .icon-play1 {
        border-right: 1px #e7e7e7 solid;
      }
    }
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
          .w3 {
            flex: 1;
          }
          .w2 {
            flex: 8;
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
}
</style>
