<template>
  <div class="hot">
    <a href="" class="title-mode"
      ><h1>热门播客</h1>
      <span class="iconfont icon-right"></span
    ></a>
    <ul class="ul-mode">
      <li class="item" v-for="index in 6" :key="index.id">
        <a href="" class="a-mode1">
          <div class="play-mode iconfont icon-play"></div>
          <img src="@/assets/images/m3.jpg" alt=""
        /></a>
        <div class="msg">
          <h5>前前前世</h5>
          <span class="type">歌曲翻唱</span>
          <div>
            <span>Ike Eveland</span><span class="iconfont icon-bofang"></span
            ><span>12万</span><span class="iconfont icon-time"></span
            ><span>04:46</span>
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
.hot {
  ul {
    li {
      width: 46%;
      height: 78px;
      margin-bottom: 14px;
      display: flex;
      a {
        height: 100%;
        width: 78px;
        margin-right: 10px;
        .play-mode {
          height: 30px;
          width: 30px;
          line-height: 30px;
          bottom: 4px;
          right: 4px;
          display: block;
        }
      }
      .msg {
        @extend .msg-mode1;
        .type {
          border: 1px solid #9f9f9f;
          color: #9f9f9f;
          width: 64px;
          padding: 1px 2px;
          max-width: 80px;
        }
        div {
          color: #9f9f9f;
          font-size: 12px;
          display: flex;
          align-items: center;
          span {
            padding-right: 4px;
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
