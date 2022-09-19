<template>
  <div class="container2">
    <!-- 顶部标题导航 -->
    <div class="nav">
      <a href="" class="active"><div>个性推荐</div></a>
      <a href=""><div>专属定制</div></a>
      <a href=""><div>歌单</div></a>
      <a href=""><div>排行榜</div></a>
      <a href=""><div>歌手</div></a>
      <a href=""><div>最新音乐</div></a>
    </div>
    <!-- 轮播图 -->
    <div class="swiper">
      <div class="slider" @mouseover="stopAutoPlay" @mouseleave="setAutoPlay">
        <div class="slider-list">
          <div
            :class="['slider-item', setItemClass(index)]"
            v-for="(item, index) of list"
            :key="index"
          >
            <img :src="item" />
          </div>
          <i @click="prev" class="arrow arrow-left"
            ><svg
              t="1598261572608"
              class="icon"
              viewBox="0 0 1024 1024"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              p-id="3271"
              width="100%"
              height="100%"
            >
              <path
                d="M641.28 278.613333l-45.226667-45.226666-278.634666 278.762666 278.613333 278.485334 45.248-45.269334-233.365333-233.237333z"
                p-id="3272"
                fill="#ccc"
              ></path></svg
          ></i>
          <i @click="next" class="arrow arrow-right"
            ><svg
              t="1598261670602"
              class="icon"
              viewBox="0 0 1024 1024"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              p-id="3400"
              width="100%"
              height="100%"
            >
              <path
                d="M593.450667 512.128L360.064 278.613333l45.290667-45.226666 278.613333 278.762666L405.333333 790.613333l-45.226666-45.269333z"
                p-id="3401"
                fill="#ccc"
              ></path></svg
          ></i>
        </div>
        <div class="dots">
          <span
            v-for="(item, index) of list"
            :key="index"
            :style="setDotActiveStyl(index)"
            @mouseover="currentIndex = index"
          ></span>
        </div>
      </div>
    </div>
    <!-- 推荐模块 -->
    <div class="recommend">
      <a href="" class="title"
        ><h1>推荐歌单</h1>
        <span class="iconfont icon-right"></span
      ></a>
      <ul>
        <li class="item first" v-for="index in 1" :key="index.id">
          <a href="">
            <div class="icon iconfont icon-aixin"></div>
            <div class="text"><span>根据您的音乐口味生成每日更新</span></div>
            <div class="play iconfont icon-play"></div>
          </a>
          <span>今天从《焰之扉》听起| 私人雷达</span>
        </li>
        <li class="item" v-for="index in 9" :key="index.id">
          <a href="">
            <div class="num">
              <span class="iconfont icon-bofang"></span><span>222万</span>
            </div>
            <div class="play iconfont icon-play"></div>
            <img src="@/assets/images/m3.jpg" alt=""
          /></a>
          <span>今天从《焰之扉》听起| 私人雷达</span>
        </li>
      </ul>
    </div>
    <!-- 热门模块 -->
    <div class="hot">
      <a href="" class="title"
        ><h1>热门播客</h1>
        <span class="iconfont icon-right"></span
      ></a>
      <ul>
        <li class="item" v-for="index in 6" :key="index.id">
          <a href="">
            <div class="play iconfont icon-play"></div>
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
    <!-- 独家放送模块 -->
    <div class="exclusive">
      <a href="" class="title"
        ><h1>独家放送</h1>
        <span class="iconfont icon-right"></span
      ></a>
      <ul>
        <li class="item" v-for="index in 3" :key="index.id">
          <a href=""
            ><div class="play iconfont icon-play"></div>
            <img src="@/assets/images/m3.jpg" alt=""
          /></a>
          <div class="msg">《超级面对面》第254期 keshi：我的音乐永远新鲜</div>
        </li>
      </ul>
    </div>
    <!-- 最新音乐模块 -->
    <div class="latest">
      <a href="" class="title"
        ><h1>最新音乐</h1>
        <span class="iconfont icon-right"></span
      ></a>
      <ul>
        <li class="item" v-for="index in 12" :key="index.id">
          <a href="">
            <div class="play iconfont icon-play"></div>
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
    <!-- 主题播客模块 -->
    <div class="theme">
      <a href="" class="title"
        ><h1>主题播客</h1>
        <span class="iconfont icon-right"></span
      ></a>
      <ul>
        <li class="item" v-for="index in 6" :key="index.id">
          <a href="">
            <div class="icon iconfont icon-boke"></div>
            <div class="type">音乐推荐</div>
            <img src="@/assets/images/m3.jpg" alt=""
          /></a>
        </li>
      </ul>
    </div>
    <div class="mv">
      <a href="" class="title"
        ><h1>推荐MV</h1>
        <span class="iconfont icon-right"></span
      ></a>
      <ul>
        <li class="item" v-for="index in 4" :key="index.id">
          <a href=""
            ><div class="num">
              <span class="iconfont icon-bofang"></span><span>996</span>
            </div>
            <img src="@/assets/images/m3.jpg" alt=""
          /></a>
          <div class="msg">《超级面对面》第254期 keshi：我的音乐永远新鲜</div>
        </li>
      </ul>
    </div>
    <!-- 听听模块 -->
    <div class="listen">
      <a href="" class="title"
        ><h1>听听</h1>
        <span class="iconfont icon-right"></span
      ></a>
      <ul>
        <li class="item" v-for="index in 5" :key="index.id">
          <a href="">
            <div class="ing">直播中</div>
            <div class="num">
              <span class="iconfont icon-redu"></span>
              <span>996</span>
            </div>
            <img src="@/assets/images/m3.jpg" alt=""
          /></a>
          <div class="msg">
            <h5>女大学生夹子音</h5>
            <div class="info">
              <div class="avatar">
                <img src="@/assets/images/avatar2.png" alt="" />
              </div>
              <span>御莉莉</span>
              <!-- <span class="iconfont "></span> -->
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { ref, reactive, computed } from "vue";
export default {
  setup() {
    // 这里不require，图片
    let list = reactive([
      require("../../assets/images/adv1.png"),
      require("../../assets/images/adv2.png"),
      require("../../assets/images/adv3.png"),
      require("../../assets/images/adv4.png"),
      require("../../assets/images/adv5.png"),
      require("../../assets/images/adv6.png"),
    ]);
    let timer = ref(null);
    let currentIndex = ref(0);
    let listLength = computed(() => list.length - 1);
    function setItemClass(i) {
      const prev =
        this.currentIndex == 0 ? this.listLength : this.currentIndex - 1;
      const next =
        this.currentIndex == this.listLength ? 0 : this.currentIndex + 1;
      switch (i) {
        case this.currentIndex:
          return "active";
        case prev:
          return "prev";
        case next:
          return "next";
        default:
          return "";
      }
    }
    function prev() {
      this.currentIndex == 0
        ? (this.currentIndex = this.listLength)
        : this.currentIndex--;
    }
    function next() {
      this.currentIndex == this.listLength
        ? (this.currentIndex = 0)
        : this.currentIndex++;
    }
    function setAutoPlay() {
      this.timer = setInterval(() => {
        this.next();
      }, 5000);
    }
    function stopAutoPlay() {
      clearInterval(this.timer);
    }
    function setDotActiveStyl(i) {
      if (i == this.currentIndex) {
        return { backgroundColor: "#D33A31" };
      }
    }
    return {
      list,
      timer,
      currentIndex,
      listLength,
      prev,
      next,
      setItemClass,
      setAutoPlay,
      stopAutoPlay,
      setDotActiveStyl,
    };
  },
};
</script>

<style lang="scss" scoped>
.title-mode1 {
  display: flex;
  align-items: center;
  margin-bottom: 12px;
  h1 {
    font-size: 20px;
    font-weight: 700;
  }
  span {
    font-size: 28px;
  }
}
.ul-mode1 {
  display: flex;
  width: 100%;
  justify-content: space-between;
  flex-wrap: wrap;
  margin-bottom: 20px;
}
.a-mode1 {
  position: relative;
  display: block;
  border-radius: 10px;
  overflow: hidden;
  &:hover .play {
    // visibility: visible;
    opacity: 1;
    transition: all 0.8s ease;
  }
  img {
    height: 100%;
  }
}
.play-mode1 {
  height: 34px;
  width: 34px;
  border-radius: 50%;
  background-color: #f2f3f5;
  position: absolute;
  bottom: 10px;
  right: 10px;
  text-align: center;
  padding-left: 4px;
  line-height: 34px;
  font-size: 24px;
  // visibility: hidden;
  opacity: 0;
}
.msg-mode1 {
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: space-around;
}
.num-mode1 {
  position: absolute;
  display: flex;
  align-items: center;
  color: #fff;
  top: 2px;
  right: 10px;
}
.container2 {
  background-color: #fff;
  width: 84%;
  overflow: auto;
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
  padding: 22px 32px 0px 32px;
  .nav {
    display: flex;
    margin-bottom: 30px;
    a {
      font-size: 18px;
      padding-right: 20px;
      &.active {
        font-size: 20px;
        font-weight: 700;
        div {
          border-bottom: 2px solid #389cb2;
        }
      }
      &:hover {
        color: #000;
      }
    }
  }
  .swiper {
    .slider {
      width: 100%;
      height: 200px;
      user-select: none;
    }
    .slider-list {
      position: relative;
      margin-top: 20px;
      height: 100%;
      transform-style: preserve-3d;
      // z-index: 1;
    }
    .slider-item {
      position: absolute;
      margin: 0 50%;
      width: 500px;
      height: 100%;
      transform: translate3d(-50%, 0, -300px) scale(0.8);
      transition: all 0.6s ease-in-out;
      border-radius: 8px;
      overflow: hidden;
      cursor: pointer;
    }
    .slider-item img {
      display: block;
      width: 100%;
      height: 100%;
      object-fit: cover;
      object-fit: cover;
    }

    .slider-item.prev {
      margin: 0;
      transform: translate3d(0, 0, -200px) scale(0.8);
      transform-origin: left;
    }
    .slider-item.next {
      margin: 0 100%;
      transform: translate3d(-100%, 0, -100px) scale(0.8);
      transform-origin: right;
    }
    .slider-item.active {
      transform: translate3d(-50%, 0, 0) scale(1);
    }
    .slider-item::after {
      content: " ";
      position: absolute;
      top: 0;
      left: 0;
      display: block;
      width: 100%;
      height: 100%;
      background-color: #000;
      opacity: 0.7;
      transition: all 0.6s;
    }
    .slider-item.active::after {
      opacity: 0;
    }
    .arrow {
      position: absolute;
      top: 50%;
      display: block;
      width: 30px;
      cursor: pointer;
      transform: translate3d(0, -50%, 0);
    }
    .arrow.arrow-right {
      right: 0;
    }
    .dots {
      text-align: center;
    }
    .dots span {
      display: inline-block;
      width: 6px;
      height: 6px;
      border-radius: 50%;
      background-color: #ccc;
      margin: 10px 5px;
      cursor: pointer;
    }
  }
  .recommend {
    .title {
      @extend .title-mode1;
    }
    ul {
      @extend .ul-mode1;
      li {
        width: 19.5%;
        margin-bottom: 36px;
        a {
          @extend .a-mode1;
          width: 100%;
          height: 90%;
          margin-bottom: 4px;
          .num {
            @extend .num-mode1;
          }
          .play {
            @extend .play-mode1;
          }
        }
        &.first {
          a {
            background-color: #38667e90;
            .icon {
              font-size: 1000%;
              color: #fff;
              position: absolute;
              left: 50%;
              top: 50%;
              transform: translateX(-50%) translateY(-50%);
            }
            .text {
              height: 0px;
              color: #fff;
              font-size: 12px;
              display: flex;
              align-items: center;
              justify-content: center;
              background-color: #172b34;
              backdrop-filter: blur(40px);
              visibility: hidden;
              border-radius: 10px 10px 0 0;
            }
          }
          &:hover .text {
            height: 34px;
            visibility: visible;
            transition: all 0.3s ease;
          }
        }
      }
    }
  }
  .hot {
    .title {
      @extend .title-mode1;
    }
    ul {
      @extend .ul-mode1;
      li {
        width: 46%;
        height: 78px;
        margin-bottom: 14px;
        display: flex;
        a {
          @extend .a-mode1;
          height: 100%;
          width: 78px;
          margin-right: 10px;
          .play {
            @extend .play-mode1;
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
  .exclusive {
    .title {
      @extend .title-mode1;
    }
    ul {
      @extend .ul-mode1;
      li {
        width: 32%;
        a {
          position: relative;
          display: block;
          border-radius: 10px;
          overflow: hidden;
          margin-bottom: 8px;
          height: 190px;
          img {
            width: 100%;
            height: 100%;
          }
          .play {
            @extend .play-mode1;
            display: block;
            top: 8px;
            left: 10px;
            background-color: transparent;
            border: 1px solid #fff;
            color: #fff;
          }
        }
      }
    }
  }
  .latest {
    .title {
      @extend .title-mode1;
    }
    ul {
      @extend .ul-mode1;
      li {
        width: 32%;
        height: 48px;
        display: flex;
        margin-bottom: 18px;
        a {
          @extend .a-mode1;
          height: 100%;
          width: 48px;
          margin-right: 10px;
          .play {
            height: 28px;
            width: 28px;
            line-height: 28px;

            @extend .play-mode1;
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
  .theme {
    .title {
      @extend .title-mode1;
    }
    ul {
      @extend .ul-mode1;
      li {
        width: 15%;
        height: 160px;
        a {
          @extend .a-mode1;
          width: 100%;
          height: 100%;
          img {
            width: 100%;
          }
          div {
            position: absolute;
            color: #fff;
          }
          .type {
            bottom: 6px;
            left: 6px;
            font-weight: 600;
          }
          .icon {
            top: 6px;
            left: 6px;
          }
        }
      }
    }
  }
  .mv {
    @extend .exclusive;
    ul {
      li {
        width: 24%;
        a {
          @extend .a-mode1;
          height: 140px;
          .num {
            @extend .num-mode1;
            span {
              margin-right: 2px;
            }
          }
        }
      }
    }
  }
  .listen {
    .title {
      @extend .title-mode1;
    }
    ul {
      @extend .ul-mode1;
      li {
        // display: flex;
        width: 18%;
        a {
          @extend .a-mode1;
          height: 140px;
          .num {
            @extend .num-mode1;
            // bottom: -8px;
            // right: 8px;
            span {
              margin-right: 2px;
            }
          }
          div {
            color: #fff;
          }
          .ing {
            position: absolute;
            padding: 1px 6px;
            top: 0;
            left: 0;
            border-radius: 10px 0px 10px 0px;
            background-color: #ff2c55;
          }
          img {
            width: 100%;
          }
          margin-bottom: 4px;
        }
        .msg {
          h5 {
            margin-bottom: 4px;
          }
          .info {
            height: 20px;
            width: 100%;
            display: flex;
            .avatar {
              height: 20px;
              width: 20px;
              border-radius: 50%;
              overflow: hidden;
              img {
                width: 100%;
              }
              margin-right: 4px;
            }
          }
        }
      }
    }
  }
}
</style>