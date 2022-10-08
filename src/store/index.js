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
  reqBanners,
  reqUserDetail,
  reqFolloweds,
  reqFollows,
  reqUserPlayList,
} from "@/api/index";
import { province, city } from "@/utils/area";
// 首页仓库
export const home = defineStore("home", {
  state: () => {
    return {
      banners: [],
    };
  },
  actions: {
    async getBanners() {
      try {
        let { data } = await reqBanners();
        if (data.code == 200) {
          this.banners = datga.banners;
        }
      } catch (error) {
        console.log(error.message, "请求首页轮播图error");
      }
    },
  },
  getters: {},
});
// 排行榜列表数据仓库
export const topList = defineStore("topList", {
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
export const palyListTag = defineStore("palyListTag", {
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
    // 获取dj
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
// 用户详情仓库
export const userDetail = defineStore("userDetail", {
  state: () => {
    return {
      level: 0, // 等级
      listenSongs: 0, // 听歌数
      profile: {}, // 用户详情
      followedsList: [], // 用户粉丝列表
      followList: [], // 关注列表
      playList: [],
    };
  },
  actions: {
    // 获取用户详情
    async getUserDetail(id) {
      try {
        let { data } = await reqUserDetail(id);
        if (data.code == 200) {
          this.level = data.level;
          this.listenSongs = data.listenSongs;
          this.profile = data.profile;
        }
      } catch (error) {
        console.log(error.message, "请求用户详情 error");
      }
    },
    // 获取用户粉丝列表
    async getFolloweds(id, limit, offset) {
      try {
        let { data } = await reqFolloweds(id, limit, offset);
        if (data.code == 200) {
          this.followedsList = data.followeds;
        }
      } catch (error) {
        console.log(error.message, "请求用户粉丝列表 error");
      }
    },
    // 获取用户关注列表
    async getFollows(id, limit, offset) {
      try {
        let { data } = await reqFollows(id, limit, offset);
        if (data.code == 200) {
          this.followList = data.follow;
        }
      } catch (error) {
        console.log(error.message, "请求用户关注列表 error");
      }
    },
    // 获取用户歌单
    async getUserPlayList(id, limit, offset) {
      try {
        let { data } = await reqUserPlayList(id, limit, offset);
        if (data.code == 200) {
          this.playList = data.playlist;
        }
      } catch (error) {
        console.log(error.message, "请求用户歌单 error");
      }
    },
  },
  getters: {
    userId: (state) => state.profile.userId, // 用户id
    nickname: (state) => state.profile.nickname, // 昵称
    avatarUrl: (state) => state.profile.avatarUrl, // 头像地址
    gender: (state) => state.profile.gender, // 性别
    followeds: (state) => state.profile.followeds, // 粉丝
    follows: (state) => state.profile.follows, // 关注
    eventCount: (state) => state.profile.eventCount, // 动态数
    playlistCount: (state) => state.profile.playlistCount, // 创建的歌单数
    signature: (state) => state.profile.signature, // 标签
    province: (state) => province(state.profile.province), // 省(编号)
    city: (state) => city(state.profile.city), // 城市
  },
});
