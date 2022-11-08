import { ElLoading } from "element-plus";
// 需要单独引入样式才有效果
import "element-plus/theme-chalk/el-loading.css";
// 定义一个请求次数的变量，用来记录当前页面总共请求的次数
let loadingRequestCount = 0;
// 初始化loading
let loadingInstance;
// 编写一个显示loading的函数 并且记录请求次数 ++
const showLoading = () => {
  if (loadingRequestCount === 0) {
    // loading样式
    loadingInstance = ElLoading.service({
      background: "rgba(255, 255, 255, 0.9)",
    });
  }
  loadingRequestCount++;
};
const hideLoading = () => {
  if (loadingRequestCount <= 0) return;
  loadingRequestCount--;
  if (loadingRequestCount === 0) {
    loadingInstance.close();
  }
};
export { showLoading, hideLoading };
