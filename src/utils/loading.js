import { ElLoading } from "element-plus";
// 需要单独引入样式才有效果
import "element-plus/theme-chalk/el-loading.css";
// 初始化loading
let loadingInstance;
const showLoading = () => {
  // 全局实现loading效果，不⽤每个页⾯单独去v-loading
  // loading样式
  loadingInstance = ElLoading.service({
    // lock: true,
    text: "加载中……",
    background: "rgba(255,255,255,.9)",
  });
};
const hideLoading = () => {
  loadingInstance.close();
};
export { showLoading, hideLoading };
