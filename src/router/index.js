import {
  createRouter,
  createWebHashHistory,
  createWebHistory,
} from "vue-router";
// 默认导入， routers，是一个数组
import routers from "@/router/routers";
const router = createRouter({
  history: createWebHistory(),
  routes: routers,
});

export default router;
