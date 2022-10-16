<template>
  <div class="ctn-mode lyric">
    <div class="content">
      <div class="left">
        <div class="out">
          <div class="inner">
            <img src="@/assets/images/avatar2.png" alt="" />
          </div>
        </div>
      </div>
      <div class="center">
        <div class="title">なきむしacoustic ver. （Cover 沢井美空）</div>
        <div class="art">拉面儿-2016</div>
        <div class="album">2V-ALK</div>
        <div class="lyricContent">
          <div class="lyricInner" ref="lyricInner">
            <div class="lyricPane" ref="lyricPane">
              <p v-for="(item, index) in createLrcObj(lrc).ms" :key="item.t">
                {{ item.c }}
              </p>
            </div>
            <div class="jspVerticalBar">
              <div class="jspTrack" ref="track">
                <div class="jspDrag" ref="drag"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="right">
        <div class="simi">
          <div class="title">喜欢这首歌的人也听</div>
          <ul>
            <li v-for="item in simiSongs" :key="item.id">
              <a href="#">
                <img v-lazy="item.album.picUrl" alt="" />
                <span>{{ item.name }}</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <button @click="scroll" style="border: 1px solid #000">点我滚动</button>

    <div class="comment-box">
      <Comment :hotComments="10" :comments="5"></Comment>
    </div>
  </div>
</template>
<script setup>
import Comment from "@/components/common/Comment";
import { ref, onMounted, onBeforeMount, defineProps, watch } from "vue";
import { useRouter, useRoute } from "vue-router";
import { songDetail } from "@/store/playlist";
import { storeToRefs } from "pinia";
import { createLrcObj } from "./lyric";
const songDetailStore = songDetail();
const { lrc, simiSongs, refAudio } = storeToRefs(songDetailStore);
const route = useRoute(),
  router = useRouter();
const lyricPane = ref();
const lyricInner = ref();
const track = ref();
const drag = ref();
let paneH = ref(0); // 歌词面板的高
let innerH = ref(0); // 歌词显示的区域
let dragH = ref(0); // 滚动条的高
let trackH = ref(0); // 滚动槽的高
// 获取一些数据
songDetailStore.getLyric(547971231);
songDetailStore.getSimiSong(547971231);
const scroll = () => {
  let top = 0; // 歌词面板滑动的距离
  let topRace = 0; // 歌词面板划出距离的比例
  let dragMargin = 0; // 滚动条距离顶端
  let maxTop = paneH.value - innerH.value; // 歌词面板最大滑动的距离
  setInterval(() => {
    // 设限
    if (maxTop > -top) {
      top -= 30;
      topRace = Math.abs(top / maxTop).toFixed(3);
      if (topRace > 1) topRace = 1;
      console.log(topRace * 100 + "%");
      lyricPane.value.style.top = top + "px";
      dragMargin = ((trackH.value - dragH.value) * topRace).toFixed(3);
      drag.value.style.marginTop = dragMargin + "px";
      console.log(lyricPane.value.offsetTop);
    }
  }, 1000);
};
onBeforeMount(() => {});
onMounted(() => {
  trackH.value = track.value.offsetHeight;
  paneH.value = lyricPane.value.offsetHeight;
  innerH.value = lyricInner.value.offsetHeight;
  let race = (innerH.value / paneH.value).toFixed(3);
  drag.value.style.height = race * 100 + "%";
  dragH.value = drag.value.offsetHeight;
  lyricPane.value.style.top = 0 + "px";
  console.log(createLrcObj(lrc.value));
});
</script>
<style lang="scss" scoped>
.ctn-mode {
  .content {
    display: flex;
    .left {
      flex: 2;
      display: flex;
      align-items: center;
      .out {
        padding: 20px;
        background-color: #e1e1e1;
        border-radius: 50%;
        .inner {
          padding: 20px;
          border-radius: 50%;
          background-color: #2f3032;
        }
      }
      img {
        width: 100%;
        border-radius: 50%;
      }
    }
    .center {
      flex: 5;
      text-align: center;
      color: #8f8f8f;
      .title {
        font-size: 2.4rem;
        color: #303030;
      }
      .art {
        margin: 10px 0 5px 0;
      }
      .album {
        margin-bottom: 30px;
      }
      .lyricContent {
        display: flex;
        outline: 0;
        height: 410px;
        margin-top: 17px;
        overflow: hidden;
        font-size: 1.5rem;
        color: #646464;
        .lyricInner {
          margin: auto;
          position: relative;
          width: 90%;
          height: 100%;
          .lyricPane {
            width: 100%;
            position: absolute;
            left: 0;
            top: 0;
            transition-duration: 600ms; /*滚动速度*/
            p {
              text-align: center;
              height: 40px;
              line-height: 40px;
              white-space: nowrap;
              overflow: hidden;
              text-overflow: ellipsis;
              // opacity: 0.6;
              // display: flex;
              &.active {
                color: #303030;
                font-size: 1.6rem;
              }
            }
          }
          .jspVerticalBar {
            position: absolute;
            top: 0;
            right: 0px;
            width: 1.5%;
            height: 100%;
            .jspTrack {
              width: 100%;
              height: 100%;
              .jspDrag {
                width: 100%;
                height: 10%;
                background-color: #d7dada;
                border-radius: 8px 8px 8px 8px;
              }
            }
          }
        }
      }
      // &::-webkit-scrollbar {
      //     width: 6px;
      //   }
      //   &::-webkit-scrollbar-track {
      //     border-radius: 10px;
      //     background-color: transparent; /*滚动条的背景颜色*/
      //   }
      //   &::-webkit-scrollbar-thumb {
      //     border-radius: 3px; /*滚动条圆角*/
      //     -webkit-border-radius: 3px; /*兼容圆角属性*/
      //     background-color: #c3c3c3; /*滚动条颜色*/
      //     background-image: #e0e0e0;
      //   }
    }
    .right {
      display: flex;
      flex: 3;
      // height: 600px;
      .simi {
        margin: auto;
        width: 100%;
        .title {
          font-size: 1.5rem;
          font-weight: 600;
          margin-bottom: 10px;
        }
        ul {
          li {
            height: 50px;
            a {
              cursor: default;
              display: block;
              height: 100%;
              padding: 5px;
              img {
                height: 100%;
                border-radius: 4px;
                margin-right: 8px;
              }
            }
            &:hover {
              background-color: #eff1f1;
            }
          }
        }
      }
    }
  }
  .comment {
    margin: 40px auto;
    width: 70%;
  }
}
</style>
