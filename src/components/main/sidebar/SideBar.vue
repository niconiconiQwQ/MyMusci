<template>
  <div class="side-bar">
    <ul class="nav">
      <li><router-link to="/" class="active">发现音乐</router-link></li>
      <li><router-link to="/podcast">播客</router-link></li>
      <li><router-link to="/video">视频</router-link></li>
      <li><router-link to="/focus">关注</router-link></li>
      <li><router-link to="/live">直播</router-link></li>
      <li><router-link to="/myfm">私人FM</router-link></li>
    </ul>
    <div class="my-music">
      <h5>我的音乐</h5>
      <ul>
        <li>
          <router-link to="/playList"
            ><span class="iconfont icon-aixin"></span><span>我喜欢的音乐</span
            ><span>❤</span></router-link
          >
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
    <div class="created">
      <div class="title">
        <span>创建的歌单</span><span class="iconfont icon-up"></span>
        <span>+</span>
      </div>
      <!-- 这里还未开发 -->
      <ul>
        <li></li>
      </ul>
    </div>
    <div class="collected">
      <div class="title">
        <span>创建的歌单</span>
        <span class="iconfont icon-up"></span>
        <span></span>
      </div>
      <ul>
        <li></li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.ul-mode1 {
  height: 228px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  color: var(--sidebar-color);
  li {
    height: 30px;
    line-height: 30px;
    padding-left: 4px;
    font-size: 14px;
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
  padding-left: 8px;
  .title {
    color: var(--sidebar-title);
    cursor: pointer;
    display: flex;
    align-items: center;
    .iconfont {
      font-size: 24px;
    }
    span {
      &:nth-child(3) {
        font-size: 20px;
        padding-left: 50px;
      }
    }
  }
}
.side-bar {
  width: 16%;
  padding: 10px 6px 0px 16px;
  background-color: #fff;
  border-right: 1px solid rgb(217, 209, 209);
  .nav {
    @extend .ul-mode1;
    margin-bottom: 14px;
  }
  .my-music {
    margin-bottom: 10px;
    h5 {
      font-size: 10px;
      color: #9f9f9f;
      margin-bottom: 6px;
      padding-left: 6px;
    }
    ul {
      @extend .ul-mode1;
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
            }
          }
          .icon-download,
          .icon-time {
            font-size: 17px;
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
  }
  .collected {
    margin-top: 10px;
  }
}
</style>