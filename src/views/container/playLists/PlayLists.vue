<template>
  <div class="playlists ctn-mode">
    <!-- 顶部标题导航组件 -->
    <TopNav></TopNav>
    <div class="content">
      <div class="head">
        <img src="@/assets/images/m3.jpg" alt="" />
        <div class="right">
          <div class="box">
            <span class="iconfont icon-huangjinhuiyuan0101-copy"></span
            ><span>精品歌单</span>
          </div>
          <h1>【PB-RB】另类迷幻的空灵音律</h1>
          <div>另类迷幻的空灵音律</div>
        </div>
      </div>
      <div class="nav">
        <a class="choice" @click.stop="showTags">
          <span>全部歌单</span>
          <span class="iconfont icon-right"></span>
          <div class="tags" v-if="isShowTags" @click.stop="">
            <div class="all"><span>全部歌单</span></div>
            <ul class="detail">
              <li class="detail-item">
                <div class="d-title">
                  <div class="icon">
                    <span class="iconfont icon-theearth2diqiu"></span
                    ><span class="text">语种</span>
                  </div>
                </div>
                <ul class="type">
                  <li
                    v-for="(item, index) in palyListStore.category0"
                    :key="index"
                  >
                    <a href="#">{{ item.name }}</a>
                  </li>
                </ul>
              </li>
              <li class="detail-item">
                <div class="d-title">
                  <div class="icon">
                    <span class="iconfont icon-gangqin"></span
                    ><span class="text">风格</span>
                  </div>
                </div>
                <ul class="type">
                  <li
                    v-for="(item, index) in palyListStore.category1"
                    :key="index"
                  >
                    <a href="#">{{ item.name }}</a>
                  </li>
                </ul>
              </li>
              <li class="detail-item">
                <div class="d-title">
                  <div class="icon">
                    <span class="iconfont icon-kafei"></span
                    ><span class="text">场景</span>
                  </div>
                </div>
                <ul class="type">
                  <li
                    v-for="(item, index) in palyListStore.category2"
                    :key="index"
                  >
                    <a href="#">{{ item.name }}</a>
                  </li>
                </ul>
              </li>
              <li class="detail-item">
                <div class="d-title">
                  <div class="icon">
                    <span class="iconfont icon-xiaolian"></span
                    ><span class="text">情感</span>
                  </div>
                </div>
                <ul class="type">
                  <li
                    v-for="(item, index) in palyListStore.category3"
                    :key="index"
                  >
                    <a href="#">{{ item.name }}</a>
                  </li>
                </ul>
              </li>
              <li class="detail-item">
                <div class="d-title">
                  <div class="icon">
                    <span class="iconfont icon-zhuti"></span
                    ><span class="text">主题</span>
                  </div>
                </div>
                <ul class="type">
                  <li
                    v-for="(item, index) in palyListStore.category4"
                    :key="index"
                  >
                    <a href="#">{{ item.name }}</a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </a>
        <ul class="title">
          <li v-for="item in palyListStore.hotTags" :key="item.id">
            {{ item.name }}
          </li>
        </ul>
      </div>
      <ul class="ul-mode">
        <li class="item" v-for="index in 40" :key="index">
          <a href="" class="a-mode1">
            <div class="num-mode">
              <span class="iconfont icon-play"></span><span>222万</span>
            </div>
            <div class="play-mode iconfont icon-play"></div>
            <div class="name">
              <span class="iconfont icon-yonghu"></span>
              <span class="creater">解忧杂货店</span>
            </div>
            <img src="@/assets/images/m3.jpg" alt=""
          /></a>
          <span>听你爱的《otonashi》时光雷达</span>
        </li>
      </ul>
      <Pagination
        :pageNo="5"
        :pageSize="20"
        :total="1000"
        :continues="5"
      ></Pagination>
    </div>
  </div>
</template>

<script setup>
import TopNav from "@/views/container/topNav/TopNav";
import Pagination from "@/components/pagination/Pagination";
import { ref, onMounted, onBeforeMount } from "vue";
import { palyList } from "@/store/index";
const palyListStore = palyList();
let isShowTags = ref(false);
const showTags = () => {
  isShowTags.value = !isShowTags.value;
};
onBeforeMount(() => {
  palyListStore.getHotPlayListTag();
  palyListStore.getSubPlayListTag();
});
onMounted(() => {
  document.addEventListener("click", () => {
    isShowTags.value = false;
  });
});
</script>

<style lang="scss" scoped>
.playlists {
  .content {
    .head {
      height: 170px;
      width: 100%;
      background-image: linear-gradient(to left, #bdbbbe 0%, #9d9ea3 100%),
        radial-gradient(
          88% 271%,
          rgba(255, 255, 255, 0.25) 0%,
          rgba(254, 254, 254, 0.25) 1%,
          rgba(0, 0, 0, 0.25) 100%
        ),
        radial-gradient(
          50% 100%,
          rgba(255, 255, 255, 0.3) 0%,
          rgba(0, 0, 0, 0.3) 100%
        );
      background-blend-mode: normal, lighten, soft-light;
      padding: 16px 0px 16px 16px;
      display: flex;
      img {
        border-radius: 4px;
        margin-right: 12px;
      }
      .right {
        display: flex;
        flex-direction: column;
        .box {
          border: 1px solid #815e30;
          color: #815e30;
          border-radius: 30px;
          width: 104px;
          height: 30px;
          display: flex;
          justify-content: center;
          align-items: center;
          margin: 20px 0 20px 0px;
        }
        h1 {
          color: #fff;
          font-size: 18px;
          margin-bottom: 12px;
        }
        div {
          &:nth-child(2) {
            color: #beb8b9;
          }
        }
      }
    }
    .nav {
      width: 100%;
      height: 30px;
      margin: 20px 0px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      .choice {
        position: relative;
        width: 100px;
        height: 30px;
        border: 1px solid #d9d9d9;
        border-radius: 30px;
        color: #373737;
        font-size: 14px;
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center;
        padding-left: 8px;
        .iconfont {
          font-size: 26px;
        }
        &:hover {
          background-color: #f2f2f2;
        }
        .tags {
          width: 750px;
          position: absolute;
          top: 36px;
          left: -2px;
          z-index: 2;
          cursor: default;
          background-color: #fff;
          box-shadow: rgba(0, 0, 0, 0.3) 2px 8px 8px;
          .all,
          .detail {
            padding: 20px 20px 0 20px;
          }
          .all {
            height: 58px;
            border-bottom: 1px solid #e5e5e5;
            color: #373737;
            span {
              cursor: pointer;
              &:hover {
                color: #38b9c9;
              }
            }
          }
          .detail {
            .detail-item {
              margin-bottom: 30px;
              display: flex;
              .d-title {
                .icon {
                  margin-right: 65px;
                  display: flex;
                  align-items: center;
                  .iconfont {
                    margin-right: 6px;
                    color: #999999;
                  }
                  .text {
                    color: #cfcfcf;
                    writing-mode: horizontal-tb;
                    display: inline-block;
                    white-space: nowrap;
                  }
                }
              }
              .type {
                display: flex;
                width: 100%;
                flex-wrap: wrap;
                li {
                  width: 16%;
                  white-space: nowrap;
                  margin-bottom: 12px;
                  padding-top: 4px;
                  a {
                    height: 100%;

                    &:hover {
                      color: #38b9c9;
                    }
                  }
                }
              }
            }
          }
        }
      }
      .title {
        display: flex;
        li {
          color: #676767;
          padding: 0px 8px;
          cursor: pointer;
          &:hover {
            color: #000;
          }
        }
      }
    }
    .ul-mode {
      li {
        margin-bottom: 40px;
        .a-mode1 {
          margin-bottom: 8px;
          .play-mode {
            opacity: 0;
          }
          &:hover .play-mode {
            opacity: 1;
            transition: all 0.8s ease;
          }
          .name {
            color: #fff;
            position: absolute;
            bottom: 4px;
            left: 4px;
            font-size: 12px;
          }
        }
      }
    }
  }
}
</style>
