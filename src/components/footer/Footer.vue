<template>
  <div class="footer">
    <audio controls="controls" class="audio" :src="url" ref="audio"></audio>
    <div class="song-info">
      <a href="#" class="cover" @click="goLyric(id)">
        <img v-lazy="picUrl" alt="" :src="picUrl" />
        <div class="mask"><i class="iconfont icon-shang"></i></div>
      </a>
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
        <div @click="isPlaying = !isPlaying" class="play">
          <i
            class="y iconfont"
            :class="isPlaying ? 'icon-a-26Izanting' : 'icon-a-26Hyoubofang'"
          ></i>
        </div>
        <div class="iconfont icon-a-26Fxiayizhen" @click="next"></div>
        <div class="iconfont word">词</div>
      </div>
      <div class="time-bar">
        <span>{{ formatSecond(audioStatus.currentTime) }}</span>
        <div class="progress" @click="dragTime($event)" ref="timeProgress">
          <div class="fill-time" ref="fillTime"></div>
          <div class="circle"></div>
        </div>
        <span>{{ formatSecond(audioStatus.duration) }}</span>
      </div>
    </div>
    <!-- 右侧一些图标 -->
    <div class="effect">
      <span class="hight">极高</span>
      <span class="iconfont icon-041siyecao"></span>
      <span class="sound iconfont icon-yinliang">
        <!-- 音量 -->
        <div class="volume" ref="volumeContainer">
          <div class="inner">
            <div class="progress" @click="ctrlVolumn($event)" ref="vProgress">
              <div class="circle" @mousedown="dragVolumn($event)"></div>
              <div class="fill-volumn" ref="fillVolumn"></div>
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
import { ref, onBeforeMount, onMounted, watch, reactive, nextTick } from "vue";
import { songDetail } from "@/store/playlist";
import { storeToRefs } from "pinia";
import { formatSecond } from "@/utils/Format/format";
import { useRouter } from "vue-router";
const songDetailStore = songDetail();
const { url, id, ar, alia, name, fee, picUrl, refAudio, isPlaying } =
  storeToRefs(songDetailStore);
const pre = () => {};
const next = () => {};
const router = useRouter();
// 定义audio的状态, 搞成一个对象
const audioStatus = reactive({
  duration: 0,
  currentTime: 0,
  volumn: 0.1,
});
// 获取dom
const audio = ref(null);
const vProgress = ref(null);
const fillVolumn = ref(null);
const fillTime = ref(null);
const volumeContainer = ref(null);
const timeProgress = ref(null);
let progressLong = ref(0);
// 控制音频播放/暂停
const togglePlay = () => {
  // 播放
  if (isPlaying.value) {
    audio.value.play();
  } else {
    audio.value.pause();
    // 取消监听
    audio.value.removeEventListener("timeupdate", (e) => {});
  }
};

// 点击音量槽控制音频音量 ok
const ctrlVolumn = (e) => {
  // 计算出音量
  audioStatus.volumn =
    1 -
    (
      (e.pageY - vProgress.value.getBoundingClientRect().top) /
      progressLong.value
    ).toFixed(4);
  // 控制边界
  if (audioStatus.volumn > 1) audioStatus.volumn = 1;
  if (audioStatus.volumn < 0) audioStatus.volumn = 0;
  fillVolumn.value.style.height = audioStatus.volumn * 100 + "%";
};
// 拖动圆圈实现音量控制 ok
const dragVolumn = (e) => {
  volumeContainer.value.style.visibility = "visible";
  let volumeSize = 0;
  // 监听鼠标移动
  document.onmousemove = function (event) {
    volumeSize =
      (1 -
        (
          (event.clientY - vProgress.value.getBoundingClientRect().top) /
          progressLong.value
        ).toFixed(4)) *
      100;
    audioStatus.volumn = (
      1 -
      (event.clientY - vProgress.value.getBoundingClientRect().top) /
        progressLong.value
    ).toFixed(4);
    // 控制边界
    if (audioStatus.volumn > 1) audioStatus.volumn = 1;
    if (audioStatus.volumn < 0) audioStatus.volumn = 0;
    fillVolumn.value.style.height = audioStatus.volumn * 100 + "%";
  };
  // 监听鼠标松开
  document.onmouseup = function () {
    document.onmousemove = null;
    document.onmouseup = null;
    volumeContainer.value.style.visibility = "hidden";
    audio.value.volume = (volumeSize / 100).toFixed(4);
  };
};
// 点击进度条控制播放时间
const dragTime = (e) => {
  audioStatus.currentTime = (
    (e.clientX - fillTime.value.getBoundingClientRect().left) /
    timeProgress.value.offsetWidth
  ).toFixed(4);
  // 控制边界
  if (audioStatus.currentTime < 0) audioStatus.currentTime = 0;
  if (audioStatus.currentTime > 1) audioStatus.currentTime = 1;
  fillTime.value.style.width = audioStatus.currentTime * 100 + "%";
  audio.value.currentTime = audio.value.duration * audioStatus.currentTime;
};
// 侦听音量长度,控制真实audio的音量
watch(
  () => audioStatus.volumn,
  (nawVal, oldVal) => {
    audio.value.volume = audioStatus.volumn;
  }
);
// // 点击切换音乐的播放状态,状态改变会被监听
watch(
  () => isPlaying.value,
  (newVal) => {
    togglePlay();
  }
);
// 侦听audio的状态是否暂停
const goLyric = (id) => {
  router.push({
    path: "/lyric",
    query: {
      id,
    },
  });
};

onBeforeMount(() => {
  console.log(isPlaying.value);
});
onMounted(() => {
  //挂在完初始化一些数据
  progressLong.value = vProgress.value.offsetHeight;
  // 挂载完后 就监听audio的加载第一帧
  audio.value.addEventListener("loadeddata", (event) => {
    fillTime.value.style.width = "0%";
    audioStatus.duration = audio.value.duration;
    audioStatus.currentTime = audio.value.currentTime;
    audioStatus.volumn = audio.value.volume;
    isPlaying.value = true;
  });
  // 监听音频播放进度;更新进度条
  audio.value.addEventListener("timeupdate", (e) => {
    fillTime.value.style.width =
      (audio.value.currentTime / audio.value.duration).toFixed(4) * 100 + "%";
    audioStatus.currentTime = audio.value.currentTime;
  });
  // 把这个audioDOM元素挂到仓库里去
  refAudio.value = audio.value;
  // 监听歌曲播放结束
  refAudio.value.addEventListener("ended", () => {
    isPlaying.value = true;
  });
});
</script>

<style lang="scss" scoped>
.audio {
  position: fixed;
  visibility: hidden;
  top: 0;
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
      width: 52px;
      margin-right: 10px;
      position: relative;
      border-radius: 10%;
      overflow: hidden;
      img {
        height: 100%;
        margin-right: 12px;
      }
      .mask {
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        display: none;
        background-color: #49362b80;
        backdrop-filter: blur(2px);
        i {
          font-size: 4rem;
          color: #c9c6c4;
          position: absolute;
          left: 50%;
          top: 50%;
          transform: translate(-50%, -50%);
        }
      }
      &:hover .mask {
        display: block;
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
        cursor: pointer;
        height: 34px;
        width: 34px;
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: #f5f5f5;
        border-radius: 50%;
        position: relative;
        i {
          position: absolute;
        }
        &:hover {
          background-color: #e5e5e5;
          color: #60b0c1;
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
        cursor: pointer;
        display: flex;
        height: 4px;
        width: 100%;
        background-color: #ccc;
        margin: 0 6px;
        .circle {
          width: 8px;
          height: 8px;
          background-color: #5aa9bf;
          border-radius: 50%;
          transform: translateY(-25%);
        }
        .fill-time {
          // position: absolute;
          width: 0%;
          height: 4px;
          border-radius: 4px;
          background-color: #389cb2;
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
              .fill-volumn {
                width: 4px;
                height: 50%;
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
