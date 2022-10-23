// 对 axios 进行二次封装
import axios from "axios";
/* 引入进度条 以及 样式*/
import nProgress from "nprogress"; // 含start / done方法控制进度条开始/结束
import "nprogress/nprogress.css";
// 引入全局状态
import store from "@/store/index";
// 利用axios对象的方法create，创建一个axios实例
const requests = axios.create({
  // 配置根路径
  baseURL: " http://localhost:3000",
  // 配置超时时间
  timeout: 5000,
});
// 请求拦截器
requests.interceptors.request.use((config) => {
  nProgress.start();
  // config: 配置对象，对象里包含 headers 请求头属性
  if (false) {
    // 做业务逻辑
    // 请求头添加一个字段，这个字段是和后台商量好的
    // config.headers.userTempId = store.state.detail.uuid_token;
  }
  // 携带token给服务器
  // if (store.state.user.token) {
  //   // config.headers.token = store.state.user.token;
  // }
  return config;
});
// 响应拦截器：包含成功和失败的回调
requests.interceptors.response.use(
  (res) => {
    // 成功: 服务器响应的数据回来后，响应拦截器可以检测到，可以做一些事情
    // promise.resolved(res);
    nProgress.done();
    return res;
  },
  (error) => {
    // 失败：
    return Promise.reject(new Error("faile"));
  }
);
// 对外暴露
export default requests;
