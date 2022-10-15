<template>
  <!-- <div v-for="item in formatedLyric">
    <span>时间：{{ item[0] }}</span
    ><span>歌词{{ item[1] }}</span>
  </div> -->
  <div class="lyric ctn-mode">
    <div class="content">
      <div class="left">
        <img src="@/assets/images/avatar2.png" alt="" />
      </div>
      <div class="center">
        <!-- <div class="song_info__lyric">
          <div class="song_info__lyric_box">
            <div class="song_info__lyric_inner">
              <p v-for="index in 20" :key="index">
                <span>但愿但愿但愿但愿</span>
              </p>
            </div>
          </div>
          <div class="ctrl"></div>
        </div> -->
        <div class="title">なきむしacoustic ver. （Cover 沢井美空）</div>
        <div class="art">拉面儿-2016</div>
        <div class="album">2V-ALK</div>
        <div class="lyricContent">
          <div class="lyricInner">
            <div class="lyricPane">
              <p v-for="index in 30">中使用了正则表达式及忽略大</p>
            </div>
          </div>
        </div>
      </div>
      <div class="right">xx</div>
    </div>
  </div>
</template>
<script setup>
// import { ref, onMounted, onBeforeMount, defineProps, watch } from "vue";
// import { useRouter, useRoute } from "vue-router";
// import { songDetail } from "@/store/playlist";
// import { storeToRefs } from "pinia";
// const songDetailStore = songDetail();
// const { formatedLyric } = storeToRefs(songDetailStore);
// const route = useRoute(),
//   router = useRouter();
// songDetailStore.getLyric(route.query.id);
// onBeforeMount(() => {
//   // console.log(formatedLyric.value);
// });
// onMounted(() => {});
</script>
<style lang="scss" scoped>
.ctn-mode {
  .content {
    display: flex;
    .left {
      flex: 2;
      background-color: rgb(208, 154, 154);
      img {
        width: 100%;
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
        outline: 0;
        height: 410px;
        margin-top: 17px;
        overflow: hidden;
        font-size: 15px;
        color: #fff;
        line-height: 30px;
        // overflow: hidden;
        // position: relative;
        background-color: rgb(228, 153, 153);
        .lyricInner {
          position: absolute;
          position: relative;
          width: 370px;
          background-color: rgb(112, 96, 96);
          .lyricPane {
            p {
              // width: 420px;
              height: 34px;
              font-size: 15px;
              white-space: nowrap;
              overflow: hidden;
              text-overflow: ellipsis;
              opacity: 0.6;
              display: flex;
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
      flex: 3;
      height: 600px;
      background-color: #ccc;
    }
  }
}
</style>
