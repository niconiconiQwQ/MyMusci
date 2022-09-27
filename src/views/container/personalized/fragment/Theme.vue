<template>
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
</template>
<script setup></script>
<style lang="scss" scoped>
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
</style>
