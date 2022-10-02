import { defineStore } from "pinia";
import {
  reqTopList,
  reqHotPlayListTag,
  reqSubPlayListTag,
  reqList,
  reqPersonalized,
  reqMV,
  reqLatestMusic,
  reqDjRecommend,
} from "@/api/index";
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
// 歌单分类仓库
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
// 推荐新音乐仓库
export const Latest = defineStore("latestMusic", {
  state: () => {
    return {
      list: [],
    };
  },
  actions: {
    async getLatestList() {
      try {
        let { data } = await reqLatestMusic();
        if (data.code == 200) {
          this.list = data.result || [];
        }
      } catch (error) {
        console.log(error.message, "请求推荐新音乐 error");
      }
    },
  },
  getters: {
    nineList: (state) => state.list.slice(0, 9),
  },
});
// 推荐电台仓库
export const DjRecommend = defineStore("djRecommend", {
  state: () => {
    return {
      DjList: [],
    };
  },
  actions: {
    async getDjList() {
      try {
        let { data } = await reqDjRecommend();
        if (data.code == 200) {
          this.DjList = data.data || [];
        }
      } catch (error) {
        console.log(error.message, "请求推荐电台 error");
      }
    },
  },
});
