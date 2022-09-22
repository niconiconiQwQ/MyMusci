<template>
  <div class="toplist ctn-mode">
    <!-- 顶部标题导航组件 -->
    <TopNav></TopNav>
    <h1>官方榜</h1>
    <ul class="official">
      <li class="list-item" v-for="index in 4" :key="index">
        <a href="" class="left"
          ><img src="@/assets/images/top/t1.jpg" alt=""
        /></a>
        <ul class="right">
          <li class="odd">
            <div class="song">
              <span>1</span><span>557 %</span><span>无数</span>
            </div>
            <div class="artist">薛之谦</div>
          </li>
          <li>
            <div class="song">
              <span>2</span><span>557 %</span><span>无数</span>
            </div>
            <div class="artist">薛之谦</div>
          </li>
          <li class="odd">
            <div class="song">
              <span>3</span><span>557 %</span><span>无数</span>
            </div>
            <div class="artist">薛之谦</div>
          </li>
          <li>
            <div class="song">
              <span>4</span><span>557 %</span><span>无数</span>
            </div>
            <div class="artist">薛之谦</div>
          </li>
          <li class="odd">
            <div class="song">
              <span>5</span><span>557 %</span><span>无数</span>
            </div>
            <div class="artist">薛之谦</div>
          </li>
          <li>
            <div><span>查看全部</span><span>》</span></div>
          </li>
        </ul>
      </li>
    </ul>
    <h1>全球榜</h1>
    <ul class="ul-mode">
      <li class="item" v-for="index in 30" :key="index.id">
        <a href="" class="a-mode1">
          <div class="num-mode">
            <span class="iconfont icon-bofang"></span><span>222万</span>
          </div>
          <div class="play-mode iconfont icon-play"></div>
          <img src="@/assets/images/top/t5.jpg" alt=""
        /></a>
        <span>今天从《焰之扉》听起| 私人雷达</span>
      </li>
    </ul>
    <ul>
      <li></li>
    </ul>
  </div>
</template>

<script>
import TopNav from "@/views/container/topNav/TopNav";
export default {
  components: {
    TopNav,
  },
};
</script>

<style lang="scss" scoped>
.toplist {
  h1 {
    font-size: 20px;
    color: #373737;
    font-weight: 700;
    margin-bottom: 20px;
  }
  .official {
    .list-item {
      height: 180px;
      display: flex;
      margin-bottom: 20px;
      .left {
        img {
          border-radius: 4px;
          margin-right: 36px;
        }
      }
      .right {
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: space-between;
        flex-direction: column;
        li {
          width: 100%;
          height: 34px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 0 10px;
          color: #9f9f9f;
          &.odd {
            background: #f7f3f3;
          }
          .song {
            span {
              &:nth-child(2) {
                padding: 0 10px;
              }
              &:nth-child(3) {
                color: #363636;
              }
            }
          }
        }
      }
    }
  }
  .ul-mode {
    li {
      margin-bottom: 24px;
      a {
        margin-bottom: 10px;
        .play-mode {
          opacity: 0;
          bottom: 50%;
          left: 50%;
          transform: translateX(-50%) translateY(50%);
        }
        &:hover .play-mode {
          opacity: 1;
          transition: all 0.8s ease;
        }
      }
    }
  }
}
</style>