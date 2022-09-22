<template>
  <div class="latest ctn-mode">
    <!-- 顶部标题导航组件 -->
    <TopNav></TopNav>
    <div class="toggle">
      <button class="active">新歌速递</button>
      <button>新碟上架</button>
    </div>
    <div class="language-nav">
      <div class="type">
        <a href="" class="active">全部</a>
        <a href="">华语</a>
        <a href="">欧美</a>
        <a href="">日本</a>
        <a href="">小语种</a>
      </div>
      <div class="ctrl">
        <a href=""
          ><span class="iconfont icon-play1"></span><span>播放全部</span></a
        >
        <a href=""
          ><span class="iconfont icon-shoucangjia"></span
          ><span>收藏全部</span></a
        >
      </div>
    </div>
    <ul class="song-list">
      <li class="song-item" v-for="index in 20" :key="index">
        <div class="song-msg">
          <span class="index">{{ index }}</span>
          <a href="" class="a-mode1"
            ><img src="@/assets/images/xiaoyuna.jpg" alt=""
          /></a>
          <span class="song-name">勿忘草</span>
          <span class="sign">SQ</span>
        </div>
        <div class="creater">高桥优</div>
        <div class="time">00:00</div>
      </li>
    </ul>
  </div>
</template>

<script>
import TopNav from "@/views/container/topNav/TopNav";
export default {
  components: {
    TopNav,
  },
};
</script>

<style lang="scss" scoped>
.latest {
  .toggle {
    width: 230px;
    height: 32px;
    border-radius: 32px;
    margin: 10px auto;
    border: 1px solid #bbbbbb;
    button {
      height: 100%;
      border-radius: 32px;
      width: 50%;
      border: none;
      background-color: #fff;
      color: #373737;
      cursor: pointer;
      &.active {
        background-color: #bbbbbb;
        color: #fff;
      }
    }
  }
  .language-nav {
    display: flex;
    justify-content: space-between;
    font-size: 15px;
    .type {
      a {
        padding-right: 30px;
        &.active {
          font-weight: 700;
        }
      }
    }
    .ctrl {
      display: flex;
      margin-bottom: 20px;
      a {
        width: 100px;
        height: 28px;
        display: block;
        border-radius: 28px;
        display: flex;
        align-items: center;
        justify-content: center;
        border: 1px solid #d9d9d9;
        &:nth-child(1) {
          background-color: #38b2ae;
          color: #fff;
        }
        &:nth-child(2) {
          margin-left: 10px;
        }
        span {
          &.iconfont {
            margin-right: 2px;
          }
        }
      }
    }
  }
  .song-list {
    width: 100%;
    .song-item {
      width: 100%;
      height: 80px;
      padding: 8px 2px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      .song-msg {
        display: flex;
        align-items: center;
        height: 100%;
        .index {
          color: #e2cbcb;
        }
        a {
          height: 100%;
          margin: 0px 0px 0px 14px;
        }
        .song-name {
          margin: 0px 10px;
        }
        .sign {
          border: 1px solid #51bbb8;
          color: #51bbb8;
          border-radius: 4px;
          font-size: 12px;
        }
      }
      &:hover {
        background-color: #f1f2f3;
      }
    }
  }
}
</style>