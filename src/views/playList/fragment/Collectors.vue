<template>
  <div class="collectors">
    <ul>
      <li v-for="index in 10" :key="index">
        <div class="left">
          <a href="" class=""
            ><img src="@/assets/images/avatar2.png" alt=""
          /></a>
        </div>
        <div class="right">
          <div class="nickname">
            <a href="">凉宫柚希</a><span class="sex iconfont icon-sexw"></span>
          </div>
          <span class="desc">我太菜了</span>
        </div>
      </li>
    </ul>
    <Pagination></Pagination>
  </div>
</template>
<script setup>
import { ref, onMounted, onBeforeMount } from "vue";
import { useRouter, useRoute } from "vue-router";
import Pagination from "@/components/pagination/Pagination";
onBeforeMount(() => {});
onMounted(() => {});
</script>
<style lang="scss" scoped>
.collectors {
  ul {
    display: flex;
    flex-wrap: wrap;
    margin-bottom: 20px;
    li {
      display: flex;
      width: 50%;
      height: 90px;
      margin-bottom: 20px;
      font-size: 14px;
      .left {
        a {
          display: inline-block;
          height: 100%;
          img {
            height: 100%;
            border-radius: 50%;
          }
        }
      }
      .right {
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        .nickname {
          a {
            margin-right: 6px;
            &:hover {
              color: #000;
            }
          }
          .sex {
            background-color: #ffcce7;
            border-radius: 50%;
            padding: 2px;
            font-size: 12px;
            color: #ef77aa;
          }
        }
        .desc {
          font-size: 12px;
        }
      }
    }
  }
}
</style>
