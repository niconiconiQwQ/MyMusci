<template>
  <div class="toplist ctn-mode">
    <!-- 顶部标题导航组件 -->
    <TopNav></TopNav>
    <h1>官方榜</h1>
    <ul class="official">
      <li class="list-item" v-for="item in officialList" :key="item.id">
        <a class="a-mode1 left" @click="goPlayList(item.id)"
          ><img v-lazy="item.coverImgUrl" alt="" />
          <div class="play-mode iconfont icon-play"></div>
        </a>
        <div class="right">
          <ul>
            <li
              :class="{ odd: index % 2 != 0 }"
              v-for="(songItem, index) in item.songs"
              :key="item.id"
              @dblclick="dbClickPlay(songItem.id)"
            >
              <div class="song">
                <span>{{ index }}</span
                ><span>{{ songItem.name }}</span>
              </div>
              <div class="artist">
                <span v-for="(arItem, index) in songItem.ar" :key="arItem.id"
                  >{{ arItem.name
                  }}<i v-if="index !== songItem.ar.length - 1">/ </i></span
                >
              </div>
            </li>
          </ul>
          <div class="end">
            <a href="#" @click="goPlayList(item.id)"
              ><span>查看全部</span><i class="iconfont icon-right"></i
            ></a>
          </div>
        </div>
      </li>
    </ul>
    <h1>全球榜</h1>
    <ul class="ul-mode">
      <li class="item" v-for="item in globalList" :key="item.id">
        <a href="#" class="a-mode1" @click="goPlayList(item.id)">
          <div class="num-mode">
            <span class="iconfont icon-bofang"></span
            ><span>{{ formatNumber(item.playCount) }}</span>
          </div>
          <div class="play-mode iconfont icon-play"></div>
          <img v-lazy="item.coverImgUrl" alt=""
        /></a>
        <span class="name">{{ item.name }}</span>
      </li>
    </ul>
  </div>
</template>
<script setup>
import { reqTopList, reqSongs } from "@/api/index";
import { onBeforeMount, ref } from "vue";
import { formatNumber } from "@/utils/Format/format";
import TopNav from "@/components/topNav/TopNav";
import { useRouter } from "vue-router";
import play from "@/utils/play";
const router = useRouter();
// 定义初始数据
const officialList = ref([]),
  globalList = ref([]);
// 获取4个官方歌单 id ；循环发请求，各个歌单的前5首歌;
const getSongs = () => {
  officialList.value.forEach(async (item, index) => {
    // 发起 歌单歌曲请求,并将返回的 promise存入 arr
    let { data } = await reqSongs(item.id, { limit: 5 });
    officialList.value[index].songs = data.songs;
  });
};
// 获取 官方 和 全球榜数据
const getInitInfo = async () => {
  try {
    let { data } = await reqTopList();
    if (data.code == 200) {
      officialList.value = data.list.slice(0, 4);
      globalList.value = data.list.slice(4);
    }
  } catch (error) {
    console.log(error.message, "请求歌单排行榜error");
  }
  // 再获取 官方榜每个歌单的前5首歌
  getSongs();
};
// 跳转到 歌单页面
const goPlayList = (id) => {
  router.push({
    path: "/playlist",
    query: {
      id: id,
    },
  });
};
const dbClickPlay = (id) => {
  play(id);
};

onBeforeMount(() => {
  // 挂载之前获取初始化数据
  getInitInfo();
});
</script>
<style lang="scss" scoped>
.toplist {
  h1 {
    font-size: 20px;
    color: #373737;
    font-weight: 700;
    margin-bottom: 20px;
  }
  .official {
    .list-item {
      height: 180px;
      display: flex;
      margin-bottom: 40px;
      .left {
        // background-color: #000;
        margin-right: 30px;
        img {
          height: 100%;
          border-radius: 4px;
          margin-right: 36px;
          background-color: transparent;
          box-shadow: rgba(0, 0, 0, 0.3) 2px 8px 8px;
        }
        .play-mode {
          top: 50%;
          left: 50%;
          transform: translateX(-50%) translateY(-50%);
          backdrop-filter: blur(2px);
          background-color: #b5c7eb60;
          display: none;
        }
        &:hover .play-mode {
          display: block;
        }
      }
      .right {
        width: 100%;
        height: 100%;
        ul {
          margin-bottom: 10px;
          li {
            width: 100%;
            height: 34px;
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 0 10px;
            color: #9f9f9f;
            &.odd {
              background: #f7f3f380;
            }
            .song {
              span {
                &:nth-child(1) {
                  padding: 0 10px;
                }
                &:nth-child(2) {
                  color: #363636;
                }
              }
            }
            &:hover {
              background-color: #f5f5f5;
            }
          }
        }
      }
      .end {
        color: #676767;
        font-size: 12px;
        padding-left: 10px;
        display: flex;
        align-items: center;
        a {
          cursor: pointer;
          &:hover {
            color: #373737;
          }
        }
      }
    }
  }
  .ul-mode {
    justify-content: flex-start;
    li {
      width: 19%;
      margin-bottom: 24px;
      margin-right: 1%;
      .a-mode1 {
        margin-bottom: 10px;
        .play-mode {
          opacity: 0;
          bottom: 50%;
          left: 50%;
          transform: translateX(-50%) translateY(50%);
        }
        &:hover .play-mode {
          opacity: 1;
          transition: all 0.8s ease;
        }
        img {
          height: 100%;
        }
      }
      .name {
        padding-left: 2px;
      }
    }
  }
}
</style>
