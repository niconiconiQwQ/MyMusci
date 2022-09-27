<template>
  <div class="latest">
    <a href="" class="title-mode"
      ><h1>最新音乐</h1>
      <span class="iconfont icon-right"></span
    ></a>
    <ul class="ul-mode">
      <li class="item" v-for="index in 12" :key="index.id">
        <a href="" class="a-mode1">
          <div class="play-mode iconfont icon-play"></div>
          <img src="@/assets/images/m3.jpg" alt=""
        /></a>
        <div class="msg">
          <h5>让世界暂停一分钟</h5>
          <div>
            <span>SQ</span>
            <span>林俊杰</span>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>
<script setup></script>
<style lang="scss" scoped>
.msg-mode1 {
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: space-around;
}
.latest {
  ul {
    li {
      width: 32%;
      height: 48px;
      display: flex;
      margin-bottom: 18px;
      a {
        height: 100%;
        width: 48px;
        margin-right: 10px;
        .play-mode {
          height: 24px;
          width: 24px;
          line-height: 24px;
          font-size: 18px;
          padding-right: 1px;
        }
      }
      .msg {
        @extend .msg-mode1;
        div {
          span {
            border: 1px solid rgb(130, 183, 211);
            margin-right: 4px;
            border-radius: 4px;
            padding: 0 2px;
          }
        }
        &:hover {
          background-color: #ebebeb;
        }
      }
    }
  }
}
</style>
