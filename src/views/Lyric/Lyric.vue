<template>
  <div class="ctn-mode lyric">
    <div class="content">
      <div class="left">
        <div class="out">
          <div class="inner">
            <img :src="picUrl" alt="" ref="img" />
          </div>
        </div>
      </div>
      <div class="center">
        <div class="title">{{ name }}</div>
        <div class="art">
          <a href="#" v-for="item in ar" :key="item.id"
            >{{ item.name }}&nbsp;</a
          >
        </div>
        <div class="album">2V-ALK</div>
        <div class="lyricContent">
          <div class="lyricInner" ref="lyricInner">
            <div class="lyricPane" ref="lyricPane">
              <p v-for="(item, index) in lrc.ms" :key="item.t">
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
    <div class="comment-box">
      <Comment :hotComments="hotComments" :comments="comments"></Comment>
    </div>
  </div>
</template>
<script setup>
import Comment from "@/components/common/Comment";
import {
  ref,
  onMounted,
  onBeforeMount,
  onUpdated,
  onBeforeUnmount,
  defineProps,
  watch,
  nextTick,
} from "vue";
import { useRouter, useRoute } from "vue-router";
import { songDetail } from "@/store/playlist";
import { storeToRefs } from "pinia";
import { createLrcObj } from "./lyric";
const songDetailStore = songDetail();
const { lrc, simiSongs, refAudio, picUrl, name, ar, hotComments, comments } =
  storeToRefs(songDetailStore);
const route = useRoute(),
  router = useRouter();
// 获取一些必要DOM
const lyricPane = ref(),
  lyricInner = ref(),
  track = ref(),
  drag = ref(),
  img = ref(),
  ps = ref();
// 定义必要DOM的高度
const paneH = ref(0), // 歌词面板的高
  innerH = ref(0), // 歌词可见的区域的高
  dragH = ref(0), // 滚动条的高
  trackH = ref(0), // 滚动槽的高
  over = ref(0);
// 获取一些数据
songDetailStore.getSongComment(route.query.id);
songDetailStore.getLyric(route.query.id);
songDetailStore.getSimiSong(route.query.id);
// 初始化 歌词面板,歌词可见面板,滚动槽,滚动条的高以及获取一些DOM元素
const initData = () => {
  //获取必要元素的高
  trackH.value = track.value.offsetHeight;
  paneH.value = lyricPane.value.offsetHeight;
  innerH.value = lyricInner.value.offsetHeight;
  drag.value.style.height =
    (innerH.value / (paneH.value - 0.5 * innerH.value)).toFixed(3) * 100 + "%";
  // 获取DOM元素
  ps.value = lyricPane.value.getElementsByTagName("p"); //歌词数组DOM
};
//监听audio的 timeupdate
const lineNo = ref(0); //当前行
const C_pos = ref(5); //C位
const offset = ref(-40); //滚动距离（应等于行高）
// 高亮显示歌词当前行及文字滚动控制，行号为 lineNo
const lineHigh = () => {
  ps.value = lyricPane.value.getElementsByTagName("p");
  if (lineNo.value > 0) {
    ps.value[lineNo.value - 1].classList.remove("lineHigh"); //去掉上一行的高亮样式
  }
  ps.value[lineNo.value].classList.add("lineHigh"); //高亮显示当前行
  // 文字滚动  整体向上滚动一行高度
  if (lineNo.value > C_pos.value) {
    over.value = (lineNo.value - C_pos.value) * offset.value;
    lyricPane.value.style.transform = `translateY(${over.value}px)`;
  }
};
watch(
  () => over.value,
  () => {
    let topRace = 0; // 歌词面板划出距离的比例
    let distance = 0; // 歌词滑动的距离
    let maxTop = paneH.value - innerH.value * 0.5; // 歌词面板最大滑动的距离
    console.log(maxTop, "---", -over.value, dragH.value);
    if (maxTop > -over.value) {
      topRace = Math.abs((over.value / maxTop).toFixed(3));
      if (topRace > 1) topRace = 1;
      distance = (trackH.value - dragH.value) * topRace;
      console.log(topRace, "scroll", over.value, "distance", distance);
      drag.value.style.transform = `translateY(${distance}px)`;
    }
  }
);
//滚回到开头，用于播放结束时
const goback = () => {
  lyricPane.value.querySelector(".lineHigh").classList.remove("lineHigh");
  lyricPane.value.style.transform = "translateY(0)";
  lineNo.value = 0;
};
onBeforeMount(() => {});
// 控制文字与音频播放同步
const match = () => {
  // 很奇怪，为什么歌词一下有一下为空，所有多加了一个判断
  if (lrc.value.ms != undefined) {
    if (lineNo.value == lrc.value.ms.length) return;
    let curTime = refAudio.value.currentTime; //播放器时间
    if (parseFloat(lrc.value.ms[lineNo.value].t) <= curTime) {
      lineHigh(); //高亮当前行
      lineNo.value++;
    }
  }
};
const pause = () => {
  // 把图片静止
  img.value.classList.remove("rotate360");
};
const play = () => {
  // 把图片旋转
  img.value.classList.add("rotate360");
};
onMounted(() => {
  initData();
  //监听播放器的timeupdate事件，实现文字与音频播放同步
  refAudio.value.addEventListener("timeupdate", match);
  refAudio.value.addEventListener("ended", goback);
  refAudio.value.addEventListener("pause", pause);
  refAudio.value.addEventListener("play", play);
  console.log(drag.value.offsetHeight, track.value.offsetHeight);
});
onBeforeUnmount(() => {
  refAudio.value.removeEventListener("timeupdate", match);
  refAudio.value.removeEventListener("ended", goback);
});
onUpdated(() => {
  dragH.value = drag.value.offsetHeight;
  console.log(dragH.value);
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
      @keyframes rotate360 {
        100% {
          transform: rotate(360deg);
        }
      }

      img {
        width: 100%;
        border-radius: 50%;
        &.rotate360 {
          animation: rotate360 10s linear infinite;
        }
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
        height: 400px;
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
              &.lineHigh {
                color: #3a4d9f80;
                font-size: 1.6rem;
                font-weight: 600;
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
              position: relative;
              .jspDrag {
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                // height: 10%;
                background-color: #d7dada;
                border-radius: 8px 8px 8px 8px;
                transition-duration: 500ms; /*滚动速度*/
              }
            }
          }
        }
      }
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
