<template>
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
        <i @click="prev" class="arrow arrow-left" v-show="isShow"
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
        <i @click="next" class="arrow arrow-right" v-show="isShow"
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
    <a href="" class="title-mode"
      ><h1>推荐歌单</h1>
      <span class="iconfont icon-right"></span
    ></a>
    <ul class="ul-mode">
      <li class="item first" v-for="index in 1" :key="index.id">
        <a href="" class="a-mode1">
          <div class="icon iconfont icon-aixin"></div>
          <div class="text"><span>根据您的音乐口味生成每日更新</span></div>
          <div class="play-mode iconfont icon-play"></div>
        </a>
        <span>今天从《焰之扉》听起| 私人雷达</span>
      </li>
      <li class="item" v-for="index in 9" :key="index.id">
        <a href="" class="a-mode1">
          <div class="num-mode">
            <span class="iconfont icon-bofang"></span><span>222万</span>
          </div>
          <div class="play-mode iconfont icon-play"></div>
          <img src="@/assets/images/m3.jpg" alt=""
        /></a>
        <span>今天从《焰之扉》听起| 私人雷达</span>
      </li>
    </ul>
  </div>
  <!-- 热门模块 -->
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
  <!-- 独家放送模块 -->
  <div class="exclusive">
    <a href="" class="title-mode"
      ><h1>独家放送</h1>
      <span class="iconfont icon-right"></span
    ></a>
    <ul class="ul-mode">
      <li class="item" v-for="index in 3" :key="index.id">
        <a href=""
          ><div class="play-mode iconfont icon-play"></div>
          <img src="@/assets/images/m3.jpg" alt=""
        /></a>
        <div class="msg">《超级面对面》第254期 keshi：我的音乐永远新鲜</div>
      </li>
    </ul>
  </div>
  <!-- 最新音乐模块 -->
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
  <!-- 主题播客模块 -->
  <div class="theme">
    <a href="" class="title-mode"
      ><h1>主题播客</h1>
      <span class="iconfont icon-right"></span
    ></a>
    <ul class="ul-mode">
      <li class="item" v-for="index in 6" :key="index.id">
        <a href="" class="a-mode1">
          <div class="icon iconfont icon-boke"></div>
          <div class="type">音乐推荐</div>
          <img src="@/assets/images/m3.jpg" alt=""
        /></a>
      </li>
    </ul>
  </div>
  <!-- 推荐MV -->
  <div class="mv">
    <a href="" class="title-mode"
      ><h1>推荐MV</h1>
      <span class="iconfont icon-right"></span
    ></a>
    <ul class="ul-mode">
      <li class="item" v-for="index in 4" :key="index.id">
        <a href="" class="a-mode1"
          ><div class="num-mode">
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
    <a href="" class="title-mode"
      ><h1>听听</h1>
      <span class="iconfont icon-right"></span
    ></a>
    <ul class="ul-mode">
      <li class="item" v-for="index in 5" :key="index.id">
        <a href="" class="a-mode1">
          <div class="ing">直播中</div>
          <div class="num-mode">
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
</template>

<script setup>
import { ref, reactive, computed } from "vue";
// 准备图片列表 这里不require，图片就加载不出来
let list = reactive([
  require("@/assets/images/adv1.png"),
  require("@/assets/images/adv2.png"),
  require("@/assets/images/adv3.png"),
  require("@/assets/images/adv4.png"),
  require("@/assets/images/adv5.png"),
  require("@/assets/images/adv6.png"),
]);
let isShow = ref(false);
let timer = null;
// 当前图片索引
let currentIndex = ref(0);
let listLength = computed(() => list.length - 1);
const setItemClass = (i) => {
  const prev =
    currentIndex.value == 0 ? listLength.value : currentIndex.value - 1;
  const next =
    currentIndex.value == listLength.value ? 0 : currentIndex.value + 1;
  switch (i) {
    case currentIndex.value:
      return "active";
    case prev:
      return "prev";
    case next:
      return "next";
    default:
      return "";
  }
};
const prev = () => {
  currentIndex.value == 0
    ? (currentIndex.value = listLength.value)
    : currentIndex.value--;
  console.log(currentIndex.value);
};
const next = () => {
  currentIndex.value == listLength.value
    ? (currentIndex.value = 0)
    : currentIndex.value++;
};
const setAutoPlay = () => {
  timer = setInterval(() => {
    next();
  }, 5000);
  isShow.value = false;
};
const stopAutoPlay = () => {
  clearInterval(timer);
  isShow.value = true;
};
const setDotActiveStyl = (i) => {
  if (i == currentIndex.value) {
    return { backgroundColor: "#D33A31" };
  }
};
</script>

<style lang="scss" scoped>
.title-mode {
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
.msg-mode1 {
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: space-around;
}
//轮播图
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
// 推荐歌单
.recommend {
  ul {
    li {
      width: 19.5%;
      margin-bottom: 36px;
      a {
        width: 100%;
        height: 90%;
        margin-bottom: 4px;
        .play-mode {
          opacity: 0;
        }
        &:hover .play-mode {
          opacity: 1;
          transition: all 0.8s ease;
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
//  热门播客
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
// 独家放送
.exclusive {
  ul {
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
        .play-mode {
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
// 最新音乐
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
// 主题播客
.theme {
  ul {
    li {
      width: 15%;
      height: 160px;
      a {
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
// 推荐MV
.mv {
  // @extend .exclusive;
  ul {
    li {
      width: 24%;
      a {
        height: 140px;
        .num {
          span {
            margin-right: 2px;
          }
        }
      }
    }
  }
}
// 听听
.listen {
  ul {
    li {
      width: 18%;
      a {
        height: 140px;
        .num {
          span {
            margin-right: 2px;
          }
        }
        div {
          color: #fff;
        }
        .ing,
        .num-mode {
          z-index: 1;
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
        &:hover {
          img {
            transform: scale(1.15);
            transition: transform 1s ease;
          }
        }
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
</style>