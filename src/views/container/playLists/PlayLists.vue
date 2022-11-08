<template>
  <div class="playlists ctn-mode">
    <!-- 顶部标题导航组件 -->
    <TopNav></TopNav>
    <div class="content">
      <div class="head" ref="head">
        <div>
          <img :src="playlists[0] ? playlists[0].coverImgUrl : m3" alt="" />
          <div class="right">
            <div class="box">
              <span class="iconfont icon-huangjinhuiyuan0101-copy"></span
              ><span>精品歌单</span>
            </div>
            <h1>{{ playlists[0] ? playlists[0].name : "" }}</h1>
            <div>另类迷幻的空灵音律</div>
          </div>
        </div>
      </div>
      <!-- 标签导航栏 -->
      <div class="nav">
        <a class="choice" @click.stop="showTags">
          <span>{{ params.cat || "全部歌单" }}</span>
          <span class="iconfont icon-right"></span>
          <div class="tags" v-if="isShowTags" @click.stop="">
            <div class="all">
              <a href="#" @click="select('全部')">全部歌单</a>
            </div>
            <ul class="detail">
              <li class="detail-item">
                <div class="d-title">
                  <div class="icon">
                    <span class="iconfont icon-theearth2diqiu"></span
                    ><span class="text">语种</span>
                  </div>
                </div>
                <ul class="type">
                  <li v-for="(item, index) in category0" :key="index">
                    <a href="#" @click="select(item.name)">{{ item.name }}</a>
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
                  <li v-for="(item, index) in category1" :key="index">
                    <a href="#" @click="select(item.name)">{{ item.name }}</a>
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
                  <li v-for="(item, index) in category2" :key="index">
                    <a href="#" @click="select(item.name)">{{ item.name }}</a>
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
                  <li v-for="(item, index) in category3" :key="index">
                    <a href="#" @click="select(item.name)">{{ item.name }}</a>
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
                  <li v-for="(item, index) in category4" :key="index">
                    <a href="#" @click="select(item.name)">{{ item.name }}</a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </a>
        <ul class="title">
          <li v-for="item in hotTags" :key="item.id" @click="select(item.name)">
            {{ item.name }}
          </li>
        </ul>
      </div>
      <!-- 歌单列表 -->
      <ul class="ul-mode">
        <li class="item" v-for="item in playlists" :key="item.id">
          <a href="#" class="a-mode1" @click="goPlayList(item.id)">
            <div class="num-mode">
              <span class="iconfont icon-play"></span
              ><span>{{ formatNumber(item.playCount) }}</span>
            </div>
            <div class="play-mode iconfont icon-play"></div>
            <div class="name">
              <span class="iconfont icon-yonghu"></span>
              <span class="creater">{{ item.creator.nickname }}</span>
            </div>
            <img v-lazy="item.coverImgUrl" alt=""
          /></a>
          <span>{{ item.name }}</span>
        </li>
      </ul>
      <el-pagination
        background
        small
        layout="prev, pager, next"
        :total="total"
        v-model:current-page="currentPage"
        :page-size="30"
      />
    </div>
  </div>
</template>
<script setup>
// 导入
import TopNav from "@/components/topNav/TopNav";
import { ref, onMounted, reactive, watch } from "vue";
import { useRouter } from "vue-router";
import { palyListTag } from "@/store/index";
import { storeToRefs } from "pinia";
import { formatNumber } from "@/utils/Format/format";
import m3 from "@/assets/images/m3.jpg";
const palyListStore = palyListTag();
const router = useRouter();
const {
  playlists,
  hotTags,
  category0,
  category1,
  category2,
  category3,
  category4,
  total,
} = storeToRefs(palyListStore);
// 当前页
const currentPage = ref(1);
const isShowTags = ref(false);
const params = reactive({ cat: "ACG" });
// 选择新标签
const select = (cat) => {
  params.cat = cat;
  palyListStore.getHotPlayList(params);
  currentPage.value = 1;
  isShowTags.value = false;
};
const goPlayList = (id) => {
  router.push({
    path: "/playlist",
    query: {
      id,
    },
  });
};
const head = ref();
const showTags = () => {
  isShowTags.value = !isShowTags.value;
};
// 先发请求捞数据
palyListStore.getHotPlayListTag();
palyListStore.getSubPlayListTag();
palyListStore.getHotPlayList();
// 监听分页器当前页的变化，发送新的请求
watch(
  () => currentPage.value,
  (current) => {
    palyListStore.getHotPlayList({
      offset: (current - 1) * 30,
      cat: params.cat,
    });
  }
);
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
      background: url("@/assets/images/adv6.png") center;
      cursor: pointer;
      > div {
        padding: 16px 0px 16px 16px;
        backdrop-filter: blur(20px);
        height: 100%;
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
          box-shadow: rgb(0 0 0 / 30%) 0px 0px 8px;
          .all,
          .detail {
            padding: 20px 20px 0 20px;
          }
          .all {
            height: 58px;
            border-bottom: 1px solid #e5e5e5;
            color: #373737;
            a {
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
        width: 19%;
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
    .el-pagination {
      margin-bottom: 20px;
    }
  }
}
</style>
