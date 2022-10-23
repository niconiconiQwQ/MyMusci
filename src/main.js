import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
// 引入图片懒加载
import { lazyImg } from "@/utils/lazy";
// 引入pinia
import { createPinia } from "pinia";
const pinia = createPinia();
const app = createApp(App);
app
  .use(router)
  .use(pinia)
  .use(lazyImg.lazyPlugin, lazyImg.lazyOptions)
  .mount("#app");
