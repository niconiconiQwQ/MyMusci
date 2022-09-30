<template>
  <div class="playlist ctn-mode">
    <div class="head">
      <div class="left">
        <img src="@/assets/images/m3.jpg" alt="" />
      </div>
      <div class="right">
        <div class="title">
          <div>歌单</div>
          <h1>今天从xxx听起|私人雷达</h1>
        </div>
        <div class="nickname">
          <a href="#">
            <img src="@/assets/images/avatar2.png" alt="" />
            <span>云音乐私人雷达</span>
          </a>
          <span class="time">2019-12-26创建</span>
        </div>
        <ul class="ctrl">
          <li>
            <div href="#" class="btn-mode playall">
              <a href="#" class="play"
                ><span class="iconfont icon-play"></span
                ><span>播放全部</span></a
              >
              <a href="#" class="add"
                ><span class="iconfont icon-jia"></span
              ></a>
            </div>
          </li>
          <li>
            <a href="#" class="btn-mode btn">
              <span class="iconfont icon-yulanshoucang"></span
              ><span>已收藏(3238万)</span></a
            >
          </li>
          <li>
            <a href="#" class="btn-mode btn">
              <span class="iconfont icon-yulanshoucang"></span
              ><span>分享(66万)</span></a
            >
          </li>
          <li>
            <a href="#" class="btn-mode btn">
              <span class="iconfont icon-download"></span
              ><span>下载全部</span></a
            >
          </li>
        </ul>

        <ul class="desc">
          <li><span>标签: </span><a href="">流行</a></li>
          <li><span>歌曲: 33</span><span>播放:128亿</span></li>
          <li><span>简介: 你爱的歌，值的反复聆听</span></li>
        </ul>
      </div>
    </div>
    <div class="nav-mode">
      <ul>
        <li>
          <router-link to="/playlist/songlist">歌曲列表</router-link>
        </li>
        <li><router-link to="/playlist/comment">评论(190437)</router-link></li>
        <li><router-link to="/playlist/collectors">收藏者</router-link></li>
      </ul>
    </div>
    <router-view></router-view>
  </div>
</template>
<script setup>
import { ref, onMounted, onBeforeMount } from "vue";
import { useRouter, useRoute } from "vue-router";
onBeforeMount(() => {});
onMounted(() => {});
</script>
<style lang="scss" scoped>
.playlist {
  // backdrop-filter: blur(10px);
  color: #373737;
  font-size: 12px;
  .btn-mode {
    height: 32px;
    display: block;
    border: 1px solid #d9d9d9;
    border-radius: 32px;
    text-align: center;
    line-height: 32px;
    margin: 14px 0;
    span {
      padding: 0 2px;
      font-size: 15px;
    }
  }
  .head {
    margin-bottom: 36px;
    display: flex;
    .left {
      width: 184px;
      height: 184px;
      margin-right: 20px;
      img {
        width: 100%;
        height: 100%;
        border-radius: 6px;
      }
    }
    .right {
      width: 100%;
      .title {
        display: flex;
        align-items: center;
        margin-bottom: 8px;

        div {
          border: 1px solid #38b2ae;
          padding: 0 2px;
          color: #38b2ae;
          margin-right: 14px;
        }
        h1 {
          font-size: 20px;
          font-weight: 700;
        }
      }

      .nickname {
        height: 28px;
        display: flex;
        line-height: 28px;
        a {
          height: 100%;
          display: block;
          color: #507daf;
          img {
            height: 100%;
            border-radius: 50%;
            margin-right: 2px;
          }
        }
        span {
          padding-right: 10px;
        }
      }
      .ctrl {
        display: flex;
        li {
          margin-right: 14px;
          display: flex;
          .btn {
            padding: 0 12px;

            &:hover {
              background-color: #ededed;
            }
          }
          .playall {
            background-color: #38b2ae;
            a {
              color: #fff;
              display: inline-block;
              height: 100%;
              padding: 0 10px;
              &:hover {
                background-color: #219d9980;
              }
            }
            .play {
              border-radius: 32px 0 0 32px;
              border-right: 1px solid #54bcb9;
            }
            .add {
              border-radius: 0px 32px 32px 0px;
            }
          }
        }
      }

      .desc {
        li {
          margin-bottom: 4px;
          font-size: 14px;
          span {
            margin-right: 10px;
          }
        }
      }
    }
  }
}
</style>
