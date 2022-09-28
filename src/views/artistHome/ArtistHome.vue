<template>
  <div class="artist">
    <div class="head">
      <div class="left">
        <img src="@/assets/images/m3.jpg" alt="" />
      </div>
      <div class="right">
        <h1>陈奕迅</h1>
        <div class="nickname">
          <span>Eason Chan;</span><span>Chan Yick Shun</span>
        </div>
        <a href="#" class="btn">
          <span class="iconfont icon-yulanshoucang"></span><span>收藏</span></a
        >
        <div class="number">
          <span>单曲数:123</span><span>专辑数:126</span><span>MV数:123</span>
        </div>
      </div>
    </div>
    <div class="nav">
      <ul>
        <li><router-link to="/artist/album">专辑</router-link></li>
        <li><router-link to="/artist/mv">MV</router-link></li>
        <li><router-link to="/artist/detail">歌手详情</router-link></li>
        <li><router-link to="/artist/similar">相似歌手</router-link></li>
      </ul>
    </div>
    <router-view></router-view>
  </div>
</template>
<script setup>
import { onMounted, onBeforeMount, ref, watch } from "vue";
import { useRouter, useRoute } from "vue-router";
const router = useRouter();
const route = useRoute();
watch(
  () => route.params.id,
  async (newId) => {
    // userData.value = await fetchUser(newId)
    // 带着新的id重新发起请求
    console.log(newId);
  }
);
onBeforeMount(() => {
  // 发起请求
});
onMounted(() => {
  // console.log(router);
  // console.log(route);
});
</script>
<style lang="scss" scoped>
.artist {
  color: #373737;
  width: 100%;
  background-color: #fff;
  padding: 30px 30px 0px 30px;
  .head {
    margin-bottom: 36px;
    display: flex;
    .left {
      width: 184px;
      height: 184px;
      margin-right: 20px;
      img {
        width: 100%;
        height: 100%;
        border-radius: 6px;
      }
    }
    .right {
      h1 {
        font-size: 20px;
        font-weight: 700;
        margin-bottom: 8px;
      }
      .nickname {
        span {
          padding-right: 10px;
        }
      }
      .btn {
        width: 80px;
        height: 32px;
        display: block;
        border: 1px solid #d9d9d9;
        border-radius: 32px;
        text-align: center;
        line-height: 32px;
        margin: 14px 0;
        span {
          padding: 0 2px;
          font-size: 15px;
        }
      }
      .number {
        span {
          padding-right: 20px;
        }
      }
    }
  }
  .nav {
    margin-bottom: 20px;
    ul {
      display: flex;

      li {
        margin-right: 22px;
        font-size: 18px;
      }
    }
  }
}
</style>
