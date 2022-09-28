import { defineStore } from "pinia";
import {
  reqArtistList,
} from "@/api/index";
// 歌手列表的仓库
export const artistListStore = defineStore("main", {
  // state 类似组件打data，存储数据/状态
  // 要写成函数且是箭头函数：
  // 好处：1.避免在服务端渲染的时候交叉请求导致的数据状态污染 2.更好的TS类型推断
  state: () => {
    return {
      artistsList: [],
    };
  },
  getters: {},
  actions: {
    async getArtist(query) {
      try {
        let { data } = await reqArtistList(query);
        if (data.code == 200) {
          this.artistsList = data.artists;
        }
      } catch (error) {
        console.log(error.message, "请求歌手列表error");
      }
    },
  },
});
// 歌手描述仓库
export const desc = defineStore("desc", {
  // state 类似组件打data，存储数据/状态
  // 要写成函数且是箭头函数：
  // 好处：1.避免在服务端渲染的时候交叉请求导致的数据状态污染 2.更好的TS类型推断
  state: () => {
    return {
      descList: [],
    };
  },
  actions: {
    async getArtist(id) {
      try {
        let { data } = await reqArtistDesc(id);
        if (data.code == 200) {
          this.descList = data.introduction;
        }
      } catch (error) {
        console.log(error.message, "请求歌手描述error");
      }
    },
  },
});