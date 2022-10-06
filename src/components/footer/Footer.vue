<template>
  <div class="footer">
    <audio controls="controls" class="audio" :src="url" ref="audio"></audio>
    <div class="song-info">
      <a href="#" class="cover"
        ><img src="@/assets/images/avatar2.png" alt=""
      /></a>
      <!-- v-lazy="picUrl"  -->
      <div class="msg">
        <div class="top">
          <div class="title">
            <div class="name">
              {{ name || "欢迎" }}
              <span class="vip" v-if="fee == 1 ? true : false">vip</span>
              <i class="iconfont icon-zanxuanzhong"></i>
            </div>
          </div>
        </div>
        <div class="artist">
          <a v-for="item in ar" :key="item.id">{{ item.name }}</a>
        </div>
      </div>
    </div>
    <!-- 控件 -->
    <div class="control">
      <div class="manage">
        <div class="iconfont icon-24gl-shuffle"></div>
        <div class="iconfont icon-a-26Eshangyizhen" @click="pre"></div>
        <div
          class="play iconfont icon-a-26Hyoubofang"
          @click="togglePlay"
        ></div>
        <div class="iconfont icon-a-26Fxiayizhen" @click="next"></div>
        <div class="iconfont word">词</div>
      </div>
      <div class="time-bar">
        <span>00:00</span>
        <div class="progress">
          <div class="circle"></div>
          <div class="fill"></div>
        </div>
        <span>{{ time }}</span>
      </div>
    </div>
    <div class="effect">
      <span class="hight">极高</span>
      <span class="iconfont icon-041siyecao"></span>
      <span class="sound iconfont icon-yinliang">
        <!-- 音量 -->
        <div class="volume" ref="volumeContainer">
          <div class="inner">
            <div class="progress" @click="ctrlVolumn($event)" ref="progress">
              <div class="circle" @mousedown="drag($event)"></div>
              <div class="fill" ref="fill"></div>
            </div>
          </div>
          <div class="triangle"></div>
        </div>
      </span>
      <span class="iconfont icon-yonghuguanli_huaban"></span>
      <span class="iconfont icon-liebiao"></span>
    </div>
  </div>
</template>

<script setup>
/*
  // 属性
  console.log(audio.value.currentTime); // 返回当前时间 1.540188;为其赋值将会使媒体跳到一个新的时间。
  console.log(audio.value.duration); // 返回持续时间 30.040816
  console.log(audio.value.ended); // 返回 播放是否结束了；true为已结束
  console.log(audio.value.loop); // 决定了播放结束时是否重新开始 true为循环
  console.log(audio.value.muted); // 表示媒体元素是否被静音。true为静音
  console.log(audio.value.playbackRate); // 控制快放、慢放等 1.0正常 ，大于1.0快放，小于1.0慢放
  console.log(audio.value.src); // 指示要在元素中使用的媒体资源的 URL。
  console.log(audio.value.volume); // 设置媒体播放时的音量。取值为 0 到 1 的双精度值。0 为静音，1 为音量最大时的值。
  // 方法
  audio.play(); // 播放
  audio.pause(); // 暂停
  // 事件
  console.log(audio.value.ended); //在回放或媒体文件播放结束时，在媒体元素（<audio> 和 <video>）上触发。
  console.log(audio.value.pause); // 当暂停媒体播放时,事件触发
  console.log(audio.value.play); // 当 paused 属性由 true 转换为 false 时触发 play 事件
  console.log(audio.value.timeupdate); // 当currentTime更新时会触发timeupdate事件。
*/
import { ref, onBeforeMount, onMounted, onUpdated } from "vue";
import { songDetail } from "@/store/playlist";
import { storeToRefs } from "pinia";
const songDetailStore = songDetail();
const paused = ref(true);
const { url, id, time, ar, alia, picUrl, name, fee } =
  storeToRefs(songDetailStore);
onBeforeMount(() => {});
const audio = ref(null);
const pre = () => {};
const next = () => {};
// 获取dom
const progress = ref(null);
const fill = ref(null);
const volumeContainer = ref(null);
let progressLong = ref(80);
let fillLong = ref(10);
// 控制音频播放/暂停
const togglePlay = () => {
  paused.value = !paused.value;
  if (paused.value) {
    // 暂停播放
    audio.value.pause();
    // 取消监听
    audio.value.removeEventListener("timeupdate", (e) => {});
  } else {
    // 播放
    audio.value.play();
    // 监听音频播放进度;
    audio.value.addEventListener("timeupdate", (e) => {});
  }
};
// 点击音量槽控制音频音量
const ctrlVolumn = (e) => {
  // isPlayIng.value.volume = 0.3; // 0 - 1
  // 计算出音量
  let temp =
    (1 -
      (
        (e.pageY - progress.value.getBoundingClientRect().top) /
        progressLong.value
      ).toFixed(4)) *
    100;
  if (temp > 100) temp = 100;
  let volumnSize = temp + "%";
  fill.value.style.height = volumnSize;
  audio.value.volume = (temp / 100).toFixed(4);
};
const listen = () => {
  console.log("监听移动");
  document.addEventListener("mouseup", (eve) => {
    document.removeEventListener("mousemove");
  });
};
const rem = () => {
  console.log("移除监听");
};
// 拖动圆圈实现音量控制
const drag = (e) => {
  volumeContainer.value.style.visibility = "visible";
  // 按下鼠标拖拽
  // var x = event.clientX - dra.offsetLeft;
  // 监听鼠标移动
  document.onmousemove = function (event) {
    fill.value.style.height =
      (1 -
        (
          (event.clientY - progress.value.getBoundingClientRect().top) /
          progressLong.value
        ).toFixed(4)) *
        100 +
      "%";
    if (event.clientY < progress.value.getBoundingClientRect().top) {
      fill.value.style.height = "100%";
    }
    if (
      event.clientY >
      progress.value.getBoundingClientRect().top + progress.value.offsetHeight
    ) {
      fill.value.style.height = "0%";
    }
  };
  // 监听鼠标松开
  document.onmouseup = function () {
    document.onmousemove = null;
    document.onmouseup = null;
    volumeContainer.value.style.visibility = "hidden";
  };
};
// 控制进度条
onBeforeMount(() => {});
onMounted(() => {
  // progressLong.value = progress.value.getBoundingClientRect().height; // 进度条总长
});
</script>

<style lang="scss" scoped>
.audio {
  position: absolute;
  bottom: 300px;
  left: 200px;
}
.footer {
  // 毛玻璃
  backdrop-filter: blur(100px);
  height: 72px;
  display: flex;
  justify-content: space-between;
  padding: 8px 22px 12px 16px;
  width: 100%;
  .song-info,
  .control,
  .effect {
    height: 100%;
    display: flex;
  }
  .effect {
    flex: 2;
  }
  .song-info {
    flex: 2;
    display: flex;
    .cover {
      height: 100%;
      img {
        height: 100%;
        margin-right: 12px;
        border-radius: 10%;
      }
    }
    .msg {
      display: flex;
      width: 0;
      flex: 1;
      flex-direction: column;
      justify-content: space-evenly;
      .top {
        align-items: center;
        .title {
          font-size: 15px;
          font-weight: 500;
          margin-right: 6px;
          position: relative;
          .name {
            text-overflow: ellipsis;
            overflow: hidden;
            max-width: 94%;
            white-space: nowrap;
            display: inline-block;
            .vip {
              border: 1px solid chocolate;
              font-size: 10px;
              color: chocolate;
              font-weight: 550;
              margin-right: 8px;
              padding: 0 1px;
            }
            i {
              position: absolute;
              right: 0;
              color: chocolate;
              font-size: 18px;
            }
          }
        }
      }
      .artist {
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        width: 94%;
        a {
          overflow: hidden;
        }
      }
    }
  }
  .control {
    flex: 6;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    .manage {
      display: flex;
      width: 260px;
      justify-content: space-around;
      align-items: center;
      .play {
        height: 34px;
        width: 34px;
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: #f5f5f5;
        border-radius: 50%;
        padding-left: 4px;
        &:hover {
          background-color: #e5e5e5;
        }
      }
      .iconfont {
        &:hover {
          color: #60b0c1;
        }
      }
    }
    .time-bar {
      display: flex;
      align-items: center;
      width: 50%;
      .progress {
        position: relative;
        height: 4px;
        width: 100%;
        background-color: #ccc;
        margin: 0 6px;

        .circle {
          position: absolute;
          width: 6px;
          height: 6px;
          background-color: #5aa9bf;
          border-radius: 50%;
          top: -1px;
          left: 198px;
        }
        .fill {
          position: absolute;
          width: 200px;
          height: 4px;
          border-radius: 4px;
          background-color: #389cb2;
        }
        &:hover {
          transform: scale(1, 1.4);
        }
      }
    }
  }
  .effect {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    .hight {
      border: 1px solid #49a4b8;
      padding: 0px 1px;
      font-size: 12px;
      color: #49a4b8;
    }
    .iconfont {
      font-size: 22px;
      font-weight: normal;
      &.icon-041siyecao {
        font-weight: 500;
      }
      &.icon-yinliang {
        font-size: 28px;
        position: relative;
        .volume {
          position: absolute;
          cursor: default;
          padding-top: 10px;
          width: 30px;
          height: 110px;
          background-color: #fff;
          box-shadow: rgb(100 100 111 / 50%) 1px 4px 22px -1px;
          top: -114px;
          left: 0px;
          visibility: hidden;
          .inner {
            position: relative;
            height: 80px;
            width: 100%;
            .progress {
              position: absolute;
              left: 50%;
              transform: translateX(-50%);
              bottom: 0;
              cursor: pointer;
              width: 4px;
              height: 100%;
              background-color: #e5e5e5;
              display: flex;
              flex-direction: column;
              justify-content: flex-end;
              align-items: center;
              .circle {
                width: 8px;
                height: 8px;
                background-color: #5aa9bf;
                border-radius: 50%;
                transform: translateY(25%);
                left: 50%;
              }
              .fill {
                width: 4px;
                height: 80%;
                border-radius: 4px;
                bottom: 0;
                background-color: #389cb2;
              }
            }
          }
          .triangle {
            bottom: -12px;
            left: 50%;
            transform: translateX(-50%);
            position: absolute;
            width: 0;
            height: 0;
            border: 6px solid;
            border-color: #fff transparent transparent transparent;
          }
        }
        &:hover .volume {
          visibility: visible !important;
        }
      }
      &.icon-liebiao {
        font-size: 18px;
      }
    }
  }
}
</style>
