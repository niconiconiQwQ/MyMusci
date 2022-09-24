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
</script>
<style lang="scss" scoped>
.body {
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  // background-image: linear-gradient(to top, #fad0c4 0%, #ffd1ff 100%);
  // 背景图片
  background: transparent url("@/assets/images/adv2.png") no-repeat fixed;
  background-size: cover;
  background-attachment: fixed;
  .content {
    height: 87vh;
    width: 68vw;
    display: flex;
    flex-direction: column;
    border-radius: 20px;
    // overflow: hidden;
    box-shadow: 6px 6px 9px #9d9db6, -18px -18px 37px #ffffed;
  }
}
</style>
