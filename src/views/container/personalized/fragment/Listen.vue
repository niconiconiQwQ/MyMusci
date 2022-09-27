<template>
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
<script setup></script>
<style lang="scss" scoped>
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
