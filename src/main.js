import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
// 引入pinia
import { createPinia } from "pinia";
const pinia = createPinia();
// 引入初始化样式
import "@/assets/css/reset.css";
const app = createApp(App);
app.use(router);
app.use(pinia);
app.mount("#app");