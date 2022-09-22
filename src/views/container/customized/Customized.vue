<template>
  <div class="customized ctn-mode" ref="cus">
    <!-- 顶部标题导航组件 -->
    <TopNav></TopNav>
    <!-- 专属定制内容 -->
    <div class="title">
      <h1>凉宫柚希的雷达歌单</h1>
      <span>根据你的红心收藏为你推荐更多宝藏歌曲</span>
    </div>
    <ul class="ul-mode">
      <li class="item" v-for="index in 40" :key="index.id">
        <a href="" class="a-mode1">
          <div class="num-mode">
            <span class="iconfont icon-play"></span><span>222万</span>
          </div>
          <div class="play-mode iconfont icon-play"></div>
          <img src="@/assets/images/m3.jpg" alt=""
        /></a>
        <span>听你爱的《otonashi》时光雷达</span>
      </li>
    </ul>
    <a class="toTop" @click="backTop" ref="scr">
      <img src="@/assets/images/toTop.gif" alt="" />
    </a>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import TopNav from "@/views/container/topNav/TopNav";
export default defineComponent({
  components: {
    TopNav,
  },
  methods: {
    backTop() {
      this.$refs.cus.scrollTop = 0;
    },
    //监听回到顶部按钮距浏览器顶部的距离
    scrollToTop() {
      let scrollLen = this.$refs.cus.scrollTop;
      // 断距离顶部多少显示回到顶部图标
      console.log(scrollLen);
      if (scrollLen > 600) {
        this.$refs.scr.style.display = "block";
      } else if (scrollLen < 600) {
        this.$refs.scr.style.display = "none";
      }
    },
  },
  mounted() {
    // 获取DOM元素
    const srollView = this.$refs.cus;
    //监听它的滚动事件
    this.$refs.cus.addEventListener("scroll", this.scrollToTop);
    this.$refs.cur.scrollIntoView({
      behavior: "smooth", // 平滑过渡
      // block: "start", // 上边框与视窗顶部平齐。默认值
    });
  },
  unmounted() {
    // 移除cus元素的监听的滚动事件
    // this.$refs.cus.removeEventListener("scroll", this.scrollToTop);
  },
});
</script>

<style lang="scss" scoped>
.customized {
  position: relative;
  overflow-x: hidden;
  .title {
    margin-bottom: 20px;
    h1 {
      font-size: 20px;
      color: #373737;
      font-weight: 600;
      margin-bottom: 4px;
    }
    span {
      color: #acacac;
    }
  }
  .ul-mode {
    li {
      width: 19.5%;
      margin-bottom: 30px;
      a {
        .play-mode {
          opacity: 0;
        }
        &:hover .play-mode {
          opacity: 1;
          transition: all 0.8s ease;
        }
      }
    }
  }
  .toTop {
    width: 20px;
    height: 20px;
    position: sticky;
    bottom: 60px;
    left: 97%;
    transform: translateX(100%);
    display: flex;
    flex-direction: column;
    align-items: center;
    cursor: pointer;
    display: none;
    &::before {
      // 这是使用伪元素添加字体图标，content中 填写 \ 加 后四位
      content: "\e620";
      // 且加上 下面这局，否则内容会显示为一个框
      font-family: "iconfont";
      position: absolute;
      font-size: 40px;
      bottom: 4px;
    }
    img {
      width: 50px;
    }
  }
}
</style>