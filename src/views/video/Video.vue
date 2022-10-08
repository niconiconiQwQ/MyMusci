<template>
  <div class="video ctn-mode">
    <div class="v-top">
      <div class="left">
        <h1><a href="#"></a>视频详情</h1>
        <video
          controls
          src="http://vodkgeyttp8.vod.126.net/cloudmusic/MTY3ODE0MzA=/5cf3f294325c3dbc1fa4396200825652/50a7444dc8391dfe1ee58bd46c24f152.mp4?wsSecret=4dafc9205a8c206badd920e96974c45e&wsTime=1665216434"
        ></video>
        <div class="creator">
          <div class="left-a">
            <a href="#"><img src="@/assets/images/avatar2.png" alt="" /></a>
            <span>音乐库分享</span>
          </div>
          <div class="right-a">
            <span class="iconfont icon-jia"></span><span>关注</span>
          </div>
        </div>
        <div class="detail">
          <div><h1>3首下饭神曲!</h1></div>
          <div class="time">
            <span>发布: 2020-7-25</span><span>播放: 22222次</span>
          </div>
          <div class="tags">
            <a href="#">现场</a>
            <a href="#">生活</a>
            <a href="#">音乐</a>
            <a href="#">纯音乐</a>
            <a href="#">音乐推荐</a>
          </div>
          <ul class="ctrl">
            <li>
              <a href="#" class="btn-mode btn">
                <span class="iconfont icon-dianzan"></span
                ><span>赞({{}}222)</span></a
              >
            </li>
            <li>
              <a href="#" class="btn-mode btn">
                <span class="iconfont icon-yulanshoucang"></span
                ><span>已收藏({{ subscribedCount }}222)</span></a
              >
            </li>
            <li>
              <a href="#" class="btn-mode btn">
                <span class="iconfont icon-fenxiang"></span
                ><span>分享({{ shareCount }}222)</span></a
              >
            </li>
          </ul>
        </div>
        <div>
          <Comment></Comment>
        </div>
      </div>
      <div class="right">
        <h1>相关推荐</h1>
        <ul>
          <li v-for="(item, index) in 6" :key="index">
            <a href="#" class="a-mode1">
              <img src="@/assets/images/m3.jpg" alt="" />
              <div class="num-mode">
                <span class="iconfont icon-bofang"></span><span>22万</span>
              </div>
              <div class="time-mode">01:00</div>
            </a>
            <div class="msg">
              <div class="name">我是一只小毛驴</div>
              <div class="art"><span>by</span>&nbsp;<span>凉宫柚希</span></div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup>
import Comment from "@/views/playList/fragment/Comment";
</script>

<style lang="scss" scoped>
h1 {
  font-size: 1.8rem;
  color: #000;
  margin-bottom: 20px;
}
.video {
  .v-top {
    display: flex;
    .left {
      width: 70%;
      margin-right: 20px;
      overflow: hidden;
      video {
        width: 100%;
      }
      .creator {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin: 10px 0 20px 0;
        .left-a {
          height: 52px;
          a {
            display: inline-block;
            height: 100%;
            margin-right: 10px;
            img {
              height: 100%;
              border-radius: 50%;
            }
          }
        }
        .right-a {
          height: 50%;
          border-radius: 16px;
          padding: 4px 20px;
          background-color: #fdf5f4;
          color: #ec4141;
          .iconfont {
            margin-right: 4px;
          }
        }
      }
      .detail {
        h1 {
          font-size: 2.2rem;
          font-weight: 700;
        }
        .time {
          color: #cfcfcf;
          span {
            &:first-child {
              margin-right: 20px;
            }
          }
        }
        .tags {
          margin: 20px 0 30px 0;
          a {
            margin-right: 8px;
            padding: 1px 6px;
            background-color: #f4ecec;
            border-radius: 8px;
          }
        }
        .ctrl {
          display: flex;
          li {
            margin-right: 10px;
            .btn {
              padding: 0 14px;
            }
          }
        }
      }
    }
    .right {
      width: 30%;
      ul {
        li {
          display: flex;
          margin-bottom: 10px;
          height: 80px;
          .a-mode1 {
            width: 50%;
            font-size: 1.2rem;
            img {
              height: 100%;
            }
            margin-right: 10px;
          }
          .msg {
            display: flex;
            flex-direction: column;
            justify-content: space-evenly;

            .art {
              font-size: 1.2rem;
              color: #9f9f9f;
            }
          }
        }
      }
    }
  }
  .comment {
    margin-top: 20px;
  }
}
</style>
