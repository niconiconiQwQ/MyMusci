import { defineStore } from "pinia";
import {
  reqTopList,
  reqHotPlayListTag,
  reqSubPlayListTag,
  reqList,
  reqPersonalized,
  reqMV,
  reqLatestMusic,
  reqBanners,
  reqUserDetail,
  reqFolloweds,
  reqFollows,
  reqUserPlayList,
  reqMVUrl,
  reqMVDetail,
  reqMVDetailNum,
  reqMVcomment,
  reqSimiMV,
  reqSearchDefault,
  reqSearchSuggest,
  reqSearchHot,
  reqHotSingle,
  reqMulSearch,
  reqSearch,
  reqFirstMV,
  reqAllMV,
  reqExclusive,
  reqTopMV,
  reqNewAlbum,
  reqAlbumComment,
  reqAlbum,
  reqAlbumDynamic,
  reqNewSongs,
  reqHotPlayList,
  reqQrKey,
  reqQrCreate,
  reqQrCheck,
  reqPhoneLogin,
  reqLoginStatus,
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
      playlists: [],
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
    // 获取歌单 ( 网友精选碟 )
    async getHotPlayList(options) {
      try {
        let { data } = await reqHotPlayList(options);
        if (data.code == 200) {
          // console.log(data);
          this.playlists = data.playlists;
        }
      } catch (error) {
        console.log(error.message, "获取获取歌单 ( 网友精选碟 ) error");
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
// MV列表仓库
export const RecommendMV = defineStore("MVList", {
  state: () => {
    return {
      list: [],
      latestMV: [],
      Exclusive: [],
      Allmv: [],
      topMV: [],
    };
  },
  actions: {
    // 获取推荐MV
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
    // 获取最新MV
    async getFirstMV(options) {
      try {
        let { data } = await reqFirstMV(options);
        if (data.code == 200) {
          this.latestMV = data.data;
        }
      } catch (error) {
        console.log(error.message, "请求最新MV error");
      }
    },
    // 获取全部
    async getAllMV(option) {
      try {
        let { data } = await reqAllMV(option);
        if (data.code == 200) {
          this.Allmv = data.data;
        }
      } catch (error) {
        console.log(error.message, "请求全部MV error");
      }
    },
    // 获取网易出品 mv
    async getExclusive(options) {
      try {
        const { data } = await reqExclusive(options);
        if (data.code == 200) {
          this.Exclusive = data.data;
        }
      } catch (error) {
        console.log(error.message, "请求网易出品 mv error");
      }
    },
    // 获取MV排行
    async getTopMV(options) {
      try {
        const { data } = await reqTopMV(options);
        if (data.code == 200) {
          this.topMV = data.data;
        }
      } catch (error) {
        console.log(error.message, "请求MV排行 error");
      }
    },
  },
  getters: {
    hotMV: (state) => state.Allmv.slice(0, 8),
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
    async getFolloweds(id, options) {
      try {
        let { data } = await reqFolloweds(id, options);
        if (data.code == 200) {
          this.followedsList = data.followeds;
        }
      } catch (error) {
        console.log(error.message, "请求用户粉丝列表 error");
      }
    },
    // 获取用户关注列表
    async getFollows(id, options) {
      try {
        let { data } = await reqFollows(id, options);
        if (data.code == 200) {
          this.followList = data.follow;
        }
      } catch (error) {
        console.log(error.message, "请求用户关注列表 error");
      }
    },
    // 获取用户歌单
    async getUserPlayList(id, options) {
      try {
        let { data } = await reqUserPlayList(id, options);
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
// MV仓库
export const MV = defineStore("MV", {
  state: () => {
    return {
      url: "",
      likedCount: 0,
      shareCount: 0,
      commentCount: 0,
      data: {},
      comments: [],
      hotComments: [],
      simiMVs: [],
    };
  },
  actions: {
    // 获取MV的Url
    async getUrl(id) {
      try {
        let { data } = await reqMVUrl(id);
        if (data.code == 200) {
          this.url = data.data.url;
        }
      } catch (error) {
        console.log(error.message, "请求MVUrl error");
      }
    },
    // 获取MV的详情
    async getMVDetail(id) {
      try {
        let { data } = await reqMVDetail(id);
        if (data.code == 200) {
          this.data = data.data;
        }
      } catch (error) {
        console.log(error.message, "请求MVUrl error");
      }
    },
    // 获取MV的点赞分享收藏数量
    async getMVDetailNum(id) {
      try {
        let { data } = await reqMVDetailNum(id);
        if (data.code == 200) {
          this.likedCount = data.likedCount;
          this.shareCount = data.shareCount;
          this.commentCount = data.commentCount;
        }
      } catch (error) {
        console.log(error.message, "请求MVUrl error");
      }
    },
    // 获取MV评论
    async getMVcomment(id, offset) {
      try {
        let { data } = await reqMVcomment(id, offset);
        if (data.code == 200) {
          this.comments = data.comments;
          this.hotComments = data.hotComments;
        }
      } catch (error) {
        console.log(error.message, "请求MV评论 error");
      }
    },
    // 获取相似歌曲
    async getSimiMV(id) {
      try {
        let { data } = await reqSimiMV(id);
        if (data.code == 200) {
          this.simiMVs = data.mvs;
        }
      } catch (error) {
        console.log(error.message, "请求相似MV error");
      }
    },
  },
  getters: {
    name: (state) => state.data.name,
    artistName: (state) => state.data.artistName,
    cover: (state) => state.data.cover,
    playCount: (state) => state.data.playCount,
    subCount: (state) => state.data.subCount,
    publishTime: (state) => state.data.publishTime,
    img1v1Url: (state) => state.data.artists[0].img1v1Url,
    desc: (state) => state.data.desc,
    videoGroup: (state) => state.data.videoGroup,
  },
});
// 搜索仓库
export const Search = defineStore("search", {
  state: () => {
    return {
      defaultKeyword: "",
      searchHot: [],
      hotSingle: [],
      suggests: { albums: [], artists: [], songs: [], playlists: [] },
      MulSearchRes: { new_mlog: [], artist: [] },
    };
  },
  actions: {
    // 获取默认关键词
    async getDefault() {
      try {
        let { data } = await reqSearchDefault();
        if (data.code == 200) {
          this.defaultKeyword = data.data.showKeyword;
        }
      } catch (error) {
        console.log(error.message, "请求默认关键词 error");
      }
    },
    // 获取热搜列表(详细)
    async getSearchHot() {
      try {
        let { data } = await reqSearchHot();
        if (data.code == 200) {
          this.searchHot = data.data;
        }
      } catch (error) {
        console.log(error.message, "请求热搜列表(详细) error");
      }
    },
    // 获取热搜列表(简略)
    async getHotSingle() {
      try {
        let { data } = await reqHotSingle();
        if (data.code == 200) {
          this.hotSingle = data.result.hots;
        }
      } catch (error) {
        console.log(error.message, "请求热搜列表(简略) error");
      }
    },
    // 获取搜索建议
    async getSearchSuggest(keywords) {
      try {
        let { data } = await reqSearchSuggest(keywords);
        if (data.code == 200) {
          this.suggests = data.result;
        }
      } catch (error) {
        console.log(error.message, "请求搜索建议 error");
      }
    },
    // 获取搜索多重匹配
    async getMulSearch(keywords) {
      try {
        let { data } = await reqMulSearch(keywords);
        if (data.code == 200) {
          this.MulSearchRes = data.result;
        }
      } catch (error) {
        console.log(error.message, "请求搜索多重匹配 error");
      }
    },
    //获取搜索
    async getSearch(keywords, limit, offset, type) {
      try {
        let { data } = await reqSearch(keywords, limit, offset, type);
        if (data.code == 200) {
          this.MulSearchRes = data.result;
        }
      } catch (error) {
        console.log(error.message, "请求搜索 error");
      }
    },
  },
  getters: {
    // name: (state) => state.data.name,
  },
});
// 新碟，新歌仓库
export const newAlbumSong = defineStore("new", {
  state: () => {
    return {
      newAlbum: [],
      newSongs: [],
    };
  },
  actions: {
    // 获取全部新碟
    async getNewAlbum(options) {
      try {
        let { data } = await reqNewAlbum(options);
        if (data.code == 200) {
          this.newAlbum = data.albums;
        }
      } catch (error) {
        console.log(error.message, "请求全部新碟 error");
      }
    },
    // 获取新歌速递
    async getNewSongs(type) {
      try {
        let { data } = await reqNewSongs(type);
        if (data.code == 200) {
          this.newSongs = data.data.slice(0, 20);
        }
      } catch (error) {
        console.log(error.message, "请求新歌速递 error");
      }
    },
  },
  getters: {},
});
// 专辑仓库
export const album = defineStore("album", {
  state: () => {
    return {
      albumSongs: [],
      albumDetail: { artist: {} },
      shareCount: 0,
      subCount: 0,
      commentCount: 0,
      hotComments: [],
      comments: [],
    };
  },
  actions: {
    // 获取专辑评论
    async getAlbumComment(id, options) {
      try {
        let { data } = await reqAlbumComment(id, options);
        if (data.code == 200) {
          this.hotComments = data.hotComments;
          this.comments = data.comments;
        }
      } catch (error) {
        console.log(error.message, "请求专辑评论 error");
      }
    },
    // 获取专辑内容
    async getAlbum(id) {
      try {
        let { data } = await reqAlbum(id);
        if (data.code == 200) {
          this.albumSongs = data.songs;
          this.albumDetail = data.album;
        }
      } catch (error) {
        console.log(error.message, "请求专辑内容 error");
      }
    },
    // 获取专辑动态信息
    async getAlbumDynamic(id) {
      try {
        let { data } = await reqAlbumDynamic(id);
        if (data.code == 200) {
          this.commentCount = data.commentCount;
          this.shareCount = data.shareCount;
          this.subCount = data.subCount;
        }
      } catch (error) {
        console.log(error.message, "请求专辑动态信息 error");
      }
    },
  },
  getters: {
    name: (state) => state.albumDetail.name,
    blurPicUrl: (state) => state.albumDetail.blurPicUrl,
    publishTime: (state) => state.albumDetail.publishTime,
    description: (state) => state.albumDetail.description,
    artistName: (state) => state.albumDetail.artist.name,
  },
});
// 登录注册仓库
export const login = defineStore("login", {
  state: () => {
    return {
      unikey: "", // 二维码生成的 key 字符串
      qrimg: "",
      cookie: "",
      loginStatus: {},
    };
  },
  actions: {
    // 手机号密码登录
    async getPhoneLogin() {
      try {
        let { data } = await reqPhoneLogin();
        if (data.code == 200) {
          this.cookie = data.data.cookie;
        }
      } catch (error) {
        console.log(error.message, "请求手机登录 error");
      }
    },
    // 获取二维码生成的key
    async getQrKey() {
      try {
        let { data } = await reqQrKey();
        if (data.code == 200) {
          this.unikey = data.unikey;
        }
      } catch (error) {
        console.log(error.message, "请求二维码生成的key error");
      }
    },
    // 获取二维码生成的key
    async getQrKey() {
      try {
        let { data } = await reqQrKey();
        if (data.code == 200) {
          this.unikey = data.unikey;
        }
      } catch (error) {
        console.log(error.message, "请求二维码生成的key error");
      }
    },
    // 获取二维码生成接口
    async getQrCreate() {
      try {
        let { data } = await reqQrCreate();
        if (data.code == 200) {
          this.qrimg = data.data.qrimg;
        }
      } catch (error) {
        console.log(error.message, "请求二维码生成的key error");
      }
    },
    // 获取登录状态
    async getLoginStatus(cookie) {
      try {
        let { data } = await reqLoginStatus(cookie);
        if (data.code == 200) {
          // this.qrimg = data.data.qrimg;
          this.loginStatus = data.data;
        }
      } catch (error) {
        console.log(error.message, "请求二维码生成的key error");
      }
    },
  },
  getters: {
    name: (state) => state.albumDetail.name,
  },
});
