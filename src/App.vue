<template>
  <div class="body">
    <div class="content">
      <Header></Header>
      <Main></Main>
      <Footer></Footer>
    </div>
  </div>
</template>
<script setup>
import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";
import Main from "@/components/main/Main";
// 初始化样式
import "@/assets/css/reset.scss";
import { login } from "@/store/index";
const loginSotre = login();
loginSotre.getStorage();
</script>
<style lang="scss" scoped>
.body {
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--greyLight-1);
  // background-image: linear-gradient(to top, #fad0c4 0%, #ffd1ff 100%);
  // 背景图片
  // background: transparent url("@/assets/images/adv2.png") no-repeat fixed;
  // background-size: cover;
  // background-attachment: fixed;
  .content {
    height: 87vh;
    width: 68vw;
    display: flex;
    flex-direction: column;
    border-radius: 2rem;
    overflow: hidden;
    background-color: var(--greyLight-1);
    box-shadow: 0.8rem 0.8rem 1.4rem var(--greyLight-2),
      -0.2rem -0.2rem 1.8rem var(--white);
  }
}
</style>
