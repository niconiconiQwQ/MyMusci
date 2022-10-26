<template>
  <!-- 整个侧边栏 -->
  <div class="side-bar">
    <!-- 侧边栏第一块导航 -->
    <ul class="nav ul-mode1-1">
      <li><router-link to="/" class="active">发现音乐</router-link></li>
      <li><router-link to="/podcast">播客</router-link></li>
      <li><router-link to="/media">视频</router-link></li>
      <li><router-link to="/focus">关注</router-link></li>
      <li><router-link to="/live">直播</router-link></li>
      <li><router-link to="/myfm">私人FM</router-link></li>
    </ul>
    <!-- 我的音乐部分 -->
    <div class="my-music">
      <h5>我的音乐</h5>
      <ul class="ul-mode1-1">
        <li>
          <router-link to="/playList"
            ><span class="iconfont icon-zan"></span><span>我喜欢的音乐</span
            ><span class="iconfont icon-zanxuanzhong"></span
          ></router-link>
        </li>
        <li>
          <a href=""
            ><span class="iconfont icon-download"></span
            ><span>本地与下载</span></a
          >
        </li>
        <li>
          <a href=""
            ><span class="iconfont icon-time"></span><span>最近播放</span></a
          >
        </li>
        <li>
          <a href=""
            ><span class="iconfont icon-yintian"></span
            ><span>我的音乐云盘</span></a
          >
        </li>
        <li>
          <a href=""
            ><span class="iconfont icon-boke"></span><span>我的播客</span></a
          >
        </li>
        <li>
          <router-link to="/mycollection"
            ><span class="iconfont icon-wodeshoucang"></span
            ><span>我的收藏</span></router-link
          >
        </li>
      </ul>
    </div>
    <!-- 创建的歌单 -->
    <div class="created" @click="showCreate">
      <div class="title">
        <span>创建的歌单</span><span class="iconfont icon-up"></span>
        <span>+</span>
      </div>
      <ul class="ul-mode1-1" v-show="isCreateShow">
        <li
          v-for="item in createdPlayList"
          :key="item.id"
          @click.stop="goPlayList(item.id)"
        >
          <a href="#">
            <span class="iconfont icon-24gl-playlistMusic4"></span>
            <span>{{ item.name }}</span>
          </a>
        </li>
      </ul>
    </div>
    <!-- 收藏的歌单 -->
    <div class="collected" @click="showCollect">
      <div class="title">
        <span>收藏的歌单</span>
        <span class="iconfont icon-up"></span>
        <span></span>
      </div>
      <ul class="ul-mode1-1" v-show="isCollectShow">
        <li
          v-for="item in collectPlayList"
          :key="item.id"
          @click="goPlayList(item.id)"
        >
          <a href="#">
            <span class="iconfont icon-24gl-playlistMusic4"></span>
            <span>{{ item.name }}</span>
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
import { onBeforeMount, ref, onMounted } from "vue";
import { login } from "@/store/index";
import { storeToRefs } from "pinia";
import { playList } from "@/store/playlist";
import router from "@/router";
const playListStore = playList();
const playListMenu = ref([]);
const loginStore = login();
const { isLogin, profile, createdPlayList, collectPlayList } =
  storeToRefs(loginStore);
const isCreateShow = ref(true);
const isCollectShow = ref(true);
const showCreate = () => {
  isCreateShow.value = !isCreateShow.value;
};
const showCollect = () => {
  isCollectShow.value = !isCollectShow.value;
};
// 发请求拿数据
const getPlayList = async () => {
  // 判断是否登录，若登录，则发请求，歌单数据
  if (isLogin.value) {
    loginStore.getMyPlayList(profile.value.userId);
  }
};
// 点击创建或收藏的歌单，跳转到歌单页面
const goPlayList = (id) => {
  // 跳转之前发请求，更新歌单数据
  playListStore.getPlayListDetail(id);
  playListStore.getSongs(id);
  playListStore.getComment(id);
  router.push({
    path: "/playlist",
    query: {
      id,
    },
  });
};
onBeforeMount(() => {
  getPlayList();
});
onMounted(() => {
  console.log(playListMenu.value);
});
</script>

<style lang="scss" scoped>
// 公共样式
.ul-mode1-1 {
  display: flex;
  flex-direction: column;
  // justify-content: space-around;
  color: var(--sidebar-color);
  li {
    height: 36px;
    line-height: 36px;
    padding-left: 4px;
    font-size: 1.4rem;
    a {
      padding-left: 6px;
      display: block;
      width: 100%;
      height: 100%;
      border-radius: 6px;
      overflow: hidden;
      &:hover {
        background-color: var(--sidebar-hover);
        color: #000;
      }
      &.active {
        color: #313131;
        font-weight: bold;
        background-color: var(--sidebar-hover);
      }
    }
  }
}
.song-sheet {
  .title {
    color: var(--sidebar-title);
    cursor: pointer;
    display: flex;
    align-items: center;
    .iconfont {
      font-size: 2.4rem;
    }
    span {
      &:nth-child(3) {
        font-size: 2rem;
        padding-left: 50px;
      }
    }
  }
}
//侧边栏样式
.side-bar {
  width: 16%;
  padding: 10px 6px 0px 16px;
  border-right: 1px solid var(--border-color);
  overflow-y: auto;
  &::-webkit-scrollbar {
    width: 6px;
  }
  &::-webkit-scrollbar-track {
    border-radius: 10px;
    background-color: transparent; /*滚动条的背景颜色*/
  }
  &::-webkit-scrollbar-thumb {
    border-radius: 3px; /*滚动条圆角*/
    -webkit-border-radius: 3px; /*兼容圆角属性*/
    background-color: #e0e0e0; /*滚动条颜色*/
  }
  .nav {
    margin-bottom: 14px;
    height: 228px;
  }
  // 我的音乐部分
  .my-music {
    margin-bottom: 10px;
    h5 {
      font-size: 1rem;
      color: #9f9f9f;
      margin-bottom: 6px;
      padding-left: 6px;
    }
    ul {
      li {
        a {
          span {
            &:nth-child(2) {
              padding-left: 6px;
              padding-right: 20px;
            }
            &:nth-child(3) {
              border: 1px solid rgb(223, 210, 210);
              border-radius: 10px;
              padding: 1px 8px;
              &:hover {
                background-color: #efe7e7;
              }
            }
          }
          .icon-download,
          .icon-time {
            font-size: 1.7rem;
          }
        }
      }
    }
  }
  .collected,
  .created {
    @extend .song-sheet;
    &:hover .iconfont {
      color: #999999;
    }
    > ul {
      li {
        a {
          span {
            &:nth-child(2) {
              padding-left: 6px;
            }
            .iconfont {
              color: #000 !important;
              font-weight: 700 !important;
            }
          }
        }
        &:hover {
          background-color: var(--sidebar-hover);
        }
      }
    }
  }
  .collected {
    margin-top: 10px;
  }
}
</style>
