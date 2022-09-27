import { defineStore } from "pinia";
import {
  reqArtistList,
  reqTopList,
  reqHotPlayListTag,
  reqSubPlayListTag,
  reqList,
  reqPersonalized,
  reqMV,
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
// 首页仓库
export const homePageStore = defineStore("home", {
  state: () => {
    return {};
  },
  actions: {},
  getters: {},
});
// 排行榜列表数据仓库
export const topListStore = defineStore("topList", {
  state: () => {
    return {
      list: [],
    };
  },
  actions: {
    async getTopList() {
      try {
        let { data } = await reqTopList();
        if (data.code == 200) {
          this.list = data.list || [];
        }
      } catch (error) {
        console.log(error.message, "请求歌单排行榜error");
      }
    },
  },
  getters: {
    officialList: (state) => state.list.slice(0, 4),
    globalList: (state) => state.list.slice(4),
  },
});
// 歌单仓库
export const palyList = defineStore("palyList", {
  state: () => {
    return {
      hotTags: [], // 热门分类
      sub: [],
      categories: {},
    };
  },
  getters: {
    //语种
    category0: (state) =>
      state.sub.filter((item) => {
        return item.category == 0;
      }),
    // 风格
    category1: (state) =>
      state.sub.filter((item) => {
        return item.category == 1;
      }),
    // 场景
    category2: (state) =>
      state.sub.filter((item) => {
        return item.category == 2;
      }),
    // 情感
    category3: (state) =>
      state.sub.filter((item) => {
        return item.category == 3;
      }),
    // 主题
    category4: (state) =>
      state.sub.filter((item) => {
        return item.category == 4;
      }),
  },
  actions: {
    // 获取热门标签
    async getHotPlayListTag() {
      try {
        let { data } = await reqHotPlayListTag();
        if (data.code == 200) {
          this.hotTags = data.tags;
        }
      } catch (error) {
        console.log(error.message, "获取热门分类失败了");
      }
    },
    // 获取sub歌单标签
    async getSubPlayListTag() {
      try {
        let { data } = await reqSubPlayListTag();
        if (data.code == 200) {
          // 获取categories
          this.categories = data.categories;
          this.sub = data.sub;
          // console.log(this.sub);
        }
      } catch (error) {
        console.log(error.message, "获取所有sub歌单分类失败了");
      }
    },
  },
});
// 独家放送(入口列表)仓库
export const Personalized = defineStore("personalized", {
  state: () => {
    return {
      list: ["1", "2", "3"],
    };
  },
  actions: {
    async getList() {
      try {
        let { data } = await reqList();
        if (data.code == 200) {
          this.list = data.result || [];
        }
      } catch (error) {
        console.log(error.message, "请求独家放送error");
      }
    },
  },
});
// 推荐歌单仓库
export const RecommendPalyList = defineStore("playList", {
  state: () => {
    return {
      list: [],
    };
  },
  actions: {
    async getPlayList(query) {
      try {
        let { data } = await reqPersonalized(query);
        if (data.code == 200) {
          this.list = data.result || [];
        }
      } catch (error) {
        console.log(error.message, "请求推荐歌单error");
      }
    },
  },
});
// 推荐MV仓库
export const RecommendMV = defineStore("MVList", {
  state: () => {
    return {
      list: [],
    };
  },
  actions: {
    async getMVList() {
      try {
        let { data } = await reqMV();
        if (data.code == 200) {
          this.list = data.result || [];
        }
      } catch (error) {
        console.log(error.message, "请求MV error");
      }
    },
  },
});
