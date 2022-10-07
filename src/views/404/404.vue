<template>
  <div class="notFound">
    <div class="drop-shadow">
      <div class="glass"></div>
      <span>404</span>
      <button class="btn-3" @click="goIndex"><span>返回首页</span></button>
    </div>
  </div>
</template>
<script setup>
import { useRouter } from "vue-router";
const router = useRouter();
const goIndex = () => {
  router.push("/");
};
</script>
<style lang="scss" scoped>
$blur: 20px;
$shadow-opacity: 0.3;
.notFound {
  width: 100%;
  @import url("https://fonts.googleapis.com/css?family=Rajdhani:300&display=swap");
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url("@/assets/images/adv2.png");
  background-size: cover;
  background-position: center;
  font-family: "Rajdhani", sans-serif;
  .glass {
    height: 100%;
    width: 100%;
    background-image: url("@/assets/images/adv2.png");
    background-size: cover;
    background-position: center;
    clip-path: inset(10em);
    filter: blur($blur);
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .drop-shadow {
    height: 100%;
    width: 100%;
    filter: drop-shadow(0px 20px 10px rgba(0, 0, 0, $shadow-opacity));
    display: flex;
    justify-content: center;
    align-items: center;
    @keyframes shine {
      /*创建动画*/
      0% {
        background-position: 0 0;
      }
      100% {
        background-position: 100% 100%;
      }
    }
    > span {
      position: absolute;
      z-index: 5;
      color: white;
      font-size: 18rem;
      letter-spacing: 14rem;
      padding-left: 14rem;
      background: -webkit-linear-gradient(left, #0f0, #00f) 0 0 no-repeat;
      background-size: 160px; /*设置背景大小*/
      background-clip: text; /*背景被裁剪到文字*/
      -webkit-text-fill-color: rgba(255, 255, 255, 0.5); /*设置文字的填充颜色*/
      animation: shine 3s infinite; /*设置动画*/
    }
    .btn-3 {
      position: absolute;
      z-index: 5;
      cursor: pointer;
      width: 20rem;
      height: 6rem;
      line-height: 6rem;
      box-shadow: rgba(255, 255, 255, 0.17) 0px -23px 25px 0px inset,
        rgba(255, 255, 255, 0.15) 0px -36px 30px 0px inset,
        rgba(255, 255, 255, 0.1) 0px -79px 40px 0px inset,
        rgba(255, 255, 255, 0.06) 0px 2px 1px,
        rgba(255, 255, 255, 0.09) 0px 4px 2px,
        rgba(255, 255, 255, 0.09) 0px 8px 4px,
        rgba(255, 255, 255, 0.09) 0px 16px 8px,
        rgba(255, 255, 255, 0.09) 0px 32px 16px;
      bottom: 25%;
      &::before,
      &::after {
        position: absolute;
        content: "";
        right: 0;
        top: 0;
        background: rgba(2, 126, 251, 1);
        // background-color: white;
        transition: all 0.4s ease;
      }
      &::before {
        height: 0%;
        width: 2px;
      }
      &::after {
        width: 0%;
        height: 2px;
      }
      &:hover {
        background: transparent;
        // box-shadow: none;
      }
      &:hover:before {
        height: 100%;
      }
      &:hover:after {
        width: 100%;
      }
      span {
        position: relative;
        display: block;
        width: 100%;
        height: 100%;
        font-size: 3rem;
        color: white;
        &:hover {
          color: rgba(2, 126, 251, 1);
        }
        &::before,
        &::after {
          position: absolute;
          content: "";
          left: 0;
          bottom: 0;
          background: rgba(2, 126, 251, 1);
          transition: all 0.3s ease;
        }
        &::before {
          width: 2px;
          height: 0%;
        }
        &::after {
          width: 0%;
          height: 2px;
        }
        &:hover::before {
          height: 100%;
        }
        &:hover::after {
          width: 100%;
        }
      }
    }
  }
}
</style>
