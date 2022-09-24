<template>
  <div class="container">
    <div class="title">
      <span class="msg">消息</span>
      <span class="read">一键已读</span>
    </div>
    <!-- 按钮栏 -->
    <div class="bar">
      <ul class="tab-bar">
        <li class="active">私信</li>
        <li>评论</li>
        <li>@我</li>
        <li>通知</li>
      </ul>
    </div>
    <ul class="msg-ul">
      <li v-for="index in 20" :key="index">
        <img src="@/assets/images/xiaoyuna.jpg" alt="" />
        <div class="right">
          <div class="name">
            <span>小缘喵</span><span class="time">昨天&nbsp;21:37</span>
          </div>
          <div class="info">专辑：[ねぇねぇねぇ]</div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script setup>
</script>

<style lang="scss" scoped>
.container {
  width: 100%;
  height: 100%;
  background-color: #fff;
  padding-top: 20px;
  overflow: hidden;
  box-shadow: -3px 0px 20px #e8e8f9;
  .title {
    padding: 0 24px;
    display: flex;
    justify-content: space-between;
    .msg {
      color: #373737;
    }
    .read {
      font-size: 14px;
      color: #507daf;
      cursor: pointer;
    }
  }
  .bar {
    padding: 0 22px;
    height: 40px;
    display: flex;
    margin: 12px auto;
    align-items: center;
    .tab-bar {
      display: flex;
      width: 100%;
      height: 32px;
      border-radius: 32px;
      border: 1px solid #bbbbbb;
      li {
        height: 100%;
        width: 25%;
        border-radius: 32px;
        display: flex;
        justify-content: center;
        align-items: center;
        color: #373737;
        font-size: 12px;
        &.active {
          background-color: #bbbbbb;
          color: #fff;
        }
        &:hover {
          background-color: #f5f5f5;
        }
      }
    }
  }
  .msg-ul {
    width: 100%;
    height: 100%;
    background-color: #fff;
    overflow: scroll;
    &::-webkit-scrollbar {
      width: 6px;
    }
    /* 滚动槽 */
    &::-webkit-scrollbar-track {
      border-radius: 10px;
      background-color: transparent; /*滚动条的背景颜色*/
    }
    /* 滚动条滑块 */
    &::-webkit-scrollbar-thumb {
      border-radius: 3px; /*滚动条圆角*/
      -webkit-border-radius: 3px; /*兼容圆角属性*/
      // background-color: #c3c3c3; /*滚动条颜色*/
      background-image: linear-gradient(to top, #37ecba 0%, #72afd3 100%);
    }

    li {
      height: 50px;
      width: 100%;
      margin-bottom: 10px;
      display: flex;
      align-items: center;
      padding-left: 22px;
      img {
        height: 80%;
        border-radius: 50%;
        cursor: pointer;
      }
      .right {
        width: 100%;
        height: 100%;
        font-size: 12px;
        margin-left: 8px;
        border-bottom: 1px solid #f2f2f2;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        cursor: pointer;
        .name {
          display: flex;
          justify-content: space-between;
          color: #789bc1;
          .time {
            padding-right: 10px;
            color: #cccccc;
          }
        }
        .info {
          color: #333333;
        }
      }
      &:hover {
        background-color: #f6f6f7;
      }
    }
  }
}
</style>