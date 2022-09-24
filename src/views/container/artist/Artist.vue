<template>
  <div class="artist ctn-mode">
    <!-- 顶部标题导航组件 -->
    <TopNav></TopNav>
    <!-- 筛选类型 -->
    <ul class="attr">
      <li class="language">
        <ul>
          <li class="title"><div>语种：</div></li>
          <li><div class="active">全部</div></li>
          <li><div>华语</div></li>
          <li><div>欧美</div></li>
          <li><div>日本</div></li>
          <li><div>韩国</div></li>
          <li><div>其他</div></li>
        </ul>
      </li>
      <li class="classify">
        <ul>
          <li class="title"><div>分类：</div></li>
          <li><div class="active">全部</div></li>
          <li><div>男歌手</div></li>
          <li><div>女歌手</div></li>
          <li><div>乐队组合</div></li>
        </ul>
      </li>
      <li class="election">
        <div class="title">筛选：</div>
        <ul>
          <li><div class="active">热门</div></li>
          <li>A</li>
          <li>B</li>
          <li>C</li>
          <li>D</li>
          <li>E</li>
          <li>F</li>
          <li>G</li>
          <li>H</li>
          <li>I</li>
          <li>J</li>
          <li>K</li>
          <li>L</li>
          <li>M</li>
          <li>N</li>
          <li>O</li>
          <li>P</li>
          <li>Q</li>
          <li>R</li>
          <li>S</li>
          <li>T</li>
          <li>U</li>
          <li>V</li>
          <li>W</li>
          <li>X</li>
          <li>Y</li>
          <li>Z</li>
          <li>#</li>
        </ul>
      </li>
    </ul>
    <!-- 作者列表 -->
    <ul class="ul-mode">
      <li class="item" v-for="index in 40" :key="index">
        <a href="" class="a-mode1">
          <img src="@/assets/images/m3.jpg" alt=""
        /></a>
        <div class="artist-name">
          <span>ClariS</span><span class="iconfont icon-yonghu"></span>
        </div>
      </li>
    </ul>
  </div>
</template>

<script setup>
import TopNav from "@/views/container/topNav/TopNav";
</script>

<style lang="scss" scoped>
.artist {
  .attr {
    .language,
    .classify,
    .election {
      margin-bottom: 12px;
      display: flex;
      .title {
        color: #737373;
        font-weight: 600;
        border: none;
        padding: 0px 8px;
      }
      ul {
        display: flex;
        li {
          padding: 0px 10px;
          div {
            height: 100%;
            border-radius: 20px;
            padding: 1px 6px;
            &.active {
              background-color: #a7c7c740;
            }
          }
        }
      }
    }
    .election {
      .title {
        padding: 0px 14px;
      }
      ul {
        li {
          margin-bottom: 6px;
        }
        flex-wrap: wrap;
      }
    }
  }
  .ul-mode {
    li {
      width: 19%;
      margin-bottom: 30px;
      a {
        margin-bottom: 10px;
      }
      .artist-name {
        display: flex;
        padding: 0 4px;
        justify-content: space-between;
        align-items: center;
        font-size: 16px;
        .iconfont {
          width: 16px;
          height: 16px;
          font-size: 16px;
          display: flex;
          justify-content: center;
          border-radius: 50%;
          color: #fff;
          background-color: #f54a43;
        }
      }
    }
  }
}
</style>