import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
// 引入初始化样式
import "@/assets/css/reset.scss";
// 先引入全部element组件，后续再按需引入
// import ElementPlus from "element-plus";
// import "element-plus/dist/index.css";
// 引入pinia
import { createPinia } from "pinia";
const pinia = createPinia();
const app = createApp(App);
// app.use(ElementPlus);
app.use(router).use(pinia).mount("#app");
