// 1. 引入pinia的 defineStore 函数
import { defineStore } from "pinia";
// 2. 定义并导出容器/仓库
// 参数1：容器的名字或ID,
// 参数2：配置对象
export const useCounterStore = defineStore("main", {
  // state 类似组件打data，存储数据/状态
  // 要写成函数且是箭头函数：
  // 好处：1.避免在服务端渲染的时候交叉请求导致的数据状态污染 2.更好的TS类型推断
  state: () => {
    return {
      count: 0,
      goods_name: "华为",
      arr: [1, 2, 3],
    };
  },
  //  getters 类似组件的computed，用来封装计算属性，有缓存功能，
  getters: {},
  // 类似于method，封装业务逻辑,修改state数据
  actions: {},
});