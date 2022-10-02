<template>
  <div class="similar">
    <ul>
      <li v-for="index in 20" :key="index">
        <a href=""><img src="@/assets/images/avatar2.png" alt="" /></a>
        <div><a href="#">凉宫</a></div>
      </li>
    </ul>
  </div>
</template>
<script setup>
import {
  ref, onMounted, onBeforeMount
} from "vue";
import { useRouter, useRoute } from "vue-router";
import { xxx } from "@/store/index";
onBeforeMount(() => {});
onMounted(() => {});
</script>
<style lang="scss" scoped>
.similar {
  ul {
    width: 100%;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    li {
      width: 19%;
      margin-bottom: 30px;
      a {
        display: inline-block;
        width: 100%;
        margin-bottom: 10px;
        img {
          width: 100%;
          border-radius: 4px;
        }
      }
      div {
        padding-left: 10px;
      }
    }
  }
}
</style>
