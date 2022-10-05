<template>
  <div class="footer">
    <audio controls="controls" class="audio" :src="url"></audio>
    <div class="song-info">
      <a href="#" class="cover"
        ><img src="@/assets/images/avatar2.png" alt=""
      /></a>
      <!-- v-lazy="picUrl"  -->
      <div class="msg">
        <div class="name">
          <span class="title">{{ name || "欢迎" }}</span
          ><span class="vip" v-if="fee == 1 ? true : false">vip</span
          ><span class="iconfont icon-zanxuanzhong"></span>
        </div>
        <div class="artist">
          <span>LISA</span>
        </div>
      </div>
    </div>
    <!-- 控件 -->
    <div class="control">
      <div class="manage">
        <div class="iconfont icon-24gl-shuffle"></div>
        <div class="iconfont icon-a-26Eshangyizhen"></div>
        <div class="play iconfont icon-a-26Hyoubofang"></div>
        <div class="iconfont icon-a-26Fxiayizhen"></div>
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
        <div class="volume">
          <div class="progress">
            <div class="circle"></div>
            <div class="fill"></div>
            <div class="triangle"></div>
          </div>
        </div>
      </span>
      <span class="iconfont icon-yonghuguanli_huaban"></span>
      <span class="iconfont icon-liebiao"></span>
    </div>
  </div>
</template>

<script setup>
import { ref, onBeforeMount, onMounted, onUpdated } from "vue";
import { songDetail } from "@/store/playlist";
import { storeToRefs } from "pinia";
const songDetailStore = songDetail();
const { url, id, time, ar, alia, picUrl, name, fee } =
  storeToRefs(songDetailStore);
onBeforeMount(() => {});
onUpdated(() => {
  // console.log(picUrl.value);
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
  .song-info,
  .control,
  .effect {
    height: 100%;
    display: flex;
  }
  .song-info {
    width: 20%;
  }
  .effect {
    width: 20%;
  }
  .song-info {
    .cover {
      display: block;
      height: 100%;
      img {
        height: 100%;
        margin-right: 12px;
        border-radius: 10%;
      }
    }
    .msg {
      display: flex;
      flex-direction: column;
      justify-content: space-evenly;
      overflow: hidden;
      .name {
        display: flex;
        align-items: center;
        .title {
          font-size: 15px;
          font-weight: 500;
          margin-right: 6px;
        }
        .vip {
          border: 1px solid chocolate;
          font-size: 10px;
          color: chocolate;
          font-weight: 550;
          margin-right: 8px;
          padding: 0 1px;
        }
        .iconfont {
          color: chocolate;
          font-size: 18px;
        }
      }
      .artist {
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
    }
  }
  .control {
    flex: 1;
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
          cursor: default;
          width: 30px;
          height: 110px;
          background-color: #fff;
          box-shadow: rgb(100 100 111 / 50%) 1px 4px 22px -1px;
          position: absolute;
          top: -114px;
          left: 0px;
          display: none;
          .progress {
            cursor: pointer;
            position: relative;
            margin: 10px auto 0px;
            height: 80px;
            width: 4px;
            background-color: #e5e5e5;
            .circle {
              position: absolute;
              width: 6px;
              height: 6px;
              background-color: #5aa9bf;
              border-radius: 50%;
              bottom: 48px;
              left: -1px;
            }
            .fill {
              position: absolute;
              width: 4px;
              height: 50px;
              border-radius: 4px;
              bottom: 0;
              background-color: #389cb2;
            }
            &:hover {
              transform: scale(1.1, 1);
            }
            .triangle {
              bottom: -32px;
              left: -4px;
              position: absolute;
              width: 0;
              height: 0;
              border: 6px solid;
              border-color: #fff transparent transparent transparent;
            }
          }
        }
        &:hover .volume {
          display: block;
        }
      }
      &.icon-liebiao {
        font-size: 18px;
      }
    }
  }
}
</style>
