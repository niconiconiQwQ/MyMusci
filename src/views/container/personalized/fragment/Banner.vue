<template>
  <div class="swiper">
    <div class="slider" @mouseover="stopAutoPlay" @mouseleave="setAutoPlay">
      <div class="slider-list">
        <div
          :class="['slider-item', setItemClass(index)]"
          v-for="(item, index) of banners"
          :key="index"
        >
          <a href="#" class="img-box"
            ><img :src="item.imageUrl" />
            <div
              class="tag"
              :style="{
                backgroundColor:
                  item.titleColor == 'blue' ? '#cc4a4a' : '#4a79cc',
              }"
            >
              {{ item.typeTitle }}
            </div></a
          >
        </div>
        <span @click="prev" class="arrow arrow-left" v-show="isShow">
          <i class="icon iconfont icon-left"></i
        ></span>
        <span @click="next" class="arrow arrow-right" v-show="isShow">
          <i class="icon iconfont icon-right"></i
        ></span>
      </div>
      <div class="dots">
        <span
          v-for="(item, index) of banners"
          :key="index"
          :style="setDotActiveStyl(index)"
          @mouseover="currentIndex = index"
        ></span>
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref, computed, onBeforeMount } from "vue";
import { home } from "@/store/index";
import { storeToRefs } from "pinia";
const homeStore = home();
const { banners } = storeToRefs(homeStore);
let isShow = ref(false);
let timer = null;
// 当前图片索引
let currentIndex = ref(0);
let listLength = computed(() => banners.value.length - 1);
const setItemClass = (i) => {
  const prev =
    currentIndex.value == 0 ? listLength.value : currentIndex.value - 1;
  const next =
    currentIndex.value == listLength.value ? 0 : currentIndex.value + 1;
  switch (i) {
    case currentIndex.value:
      return "active";
    case prev:
      return "prev";
    case next:
      return "next";
    default:
      return "";
  }
};
const prev = () => {
  currentIndex.value == 0
    ? (currentIndex.value = listLength.value)
    : currentIndex.value--;
  console.log(currentIndex.value);
};
const next = () => {
  currentIndex.value == listLength.value
    ? (currentIndex.value = 0)
    : currentIndex.value++;
};
const setAutoPlay = () => {
  timer = setInterval(() => {
    next();
  }, 5000);
  isShow.value = false;
};
const stopAutoPlay = () => {
  clearInterval(timer);
  isShow.value = true;
};
const setDotActiveStyl = (i) => {
  if (i == currentIndex.value) {
    return { backgroundColor: "#D33A31" };
  }
};
// 发请求，捞数据
homeStore.getBanners();
onBeforeMount(() => {
  console.log(homeStore.banners);
});
</script>
<style lang="scss" scoped>
.swiper {
  margin-bottom: 30px;
  .slider {
    width: 100%;
    height: 200px;
    user-select: none;
  }
  .slider-list {
    position: relative;
    margin-top: 20px;
    height: 100%;
    transform-style: preserve-3d;
    // z-index: 1;
  }
  .slider-item {
    position: absolute;
    margin: 0 50%;
    width: 500px;
    height: 100%;
    transform: translate3d(-50%, 0, -300px) scale(0.8);
    transition: all 0.6s ease-in-out;
    border-radius: 8px;
    overflow: hidden;
    cursor: pointer;
  }
  .slider-item .img-box {
    position: relative;
    .tag {
      position: absolute;
      bottom: 0;
      right: 0;
      height: 20px;
      line-height: 20px;
      padding: 0px 10px;
      color: #fff;
      border-radius: 8px 0px 8px 0px;
    }
  }
  .slider-item img {
    // position: absolute;
    top: 0;
    left: 0;
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-fit: cover;
  }

  .slider-item.prev {
    margin: 0;
    transform: translate3d(0, 0, -200px) scale(0.8);
    transform-origin: left;
  }
  .slider-item.next {
    margin: 0 100%;
    transform: translate3d(-100%, 0, -100px) scale(0.8);
    transform-origin: right;
  }
  .slider-item.active {
    transform: translate3d(-50%, 0, 0) scale(1);
  }
  .slider-item::after {
    content: " ";
    position: absolute;
    top: 0;
    left: 0;
    display: block;
    width: 100%;
    height: 100%;
    background-color: #000;
    opacity: 0.7;
    transition: all 0.6s;
  }
  .slider-item.active::after {
    opacity: 0;
  }
  .arrow {
    position: absolute;
    top: 50%;
    display: block;
    width: 30px;
    cursor: pointer;
    transform: translate3d(0, -50%, 0);
    color: #fff;
    i {
      font-size: 3.2rem;
    }
  }
  .arrow.arrow-right {
    right: 0;
  }
  .dots {
    text-align: center;
  }
  .dots span {
    display: inline-block;
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background-color: #ccc;
    margin: 10px 5px;
    cursor: pointer;
  }
}
</style>
