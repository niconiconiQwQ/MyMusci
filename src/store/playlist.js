import { defineStore } from "pinia";
import {
  reqPlayListDetail,
  reqPersonalized,
  reqSongs,
  reqComment,
  reqCollectors,
  reqSongUrl,
  reqSongDetail,
  reqLyric,
  reqSongComment,
  reqSimiSong,
} from "@/api/index";
import dayjs from "dayjs";
import {
  formatNumber,
  formatTxt,
  formatPlayTime,
  createLrcObj,
} from "@/utils/Format/format";
// 推荐歌单仓库
export const RecommendPalyList = defineStore("playList", {
  state: () => {
    return {
      list: [],
    };
  },
  actions: {
    async getRecPlayList(query) {
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
// 歌单数据仓库
export const playList = defineStore("playList", {
  state: () => {
    return {
      recommentPlayList: [],
      // 具体歌单数据
      playListDetail: {
        coverImgUrl: "",
        creator: {},
      },
      songs: [],
      // 歌单id
      playListId: -1,
      // 歌单热门评论
      hotComments: [],
      // 普通评论
      comments: [],
      // 歌单收藏者
      subscribers: [],
    };
  },
  actions: {
    // 获取推荐歌单
    async getRecPlayList(limit) {
      try {
        let { data } = await reqPersonalized(limit);
        if (data.code == 200) {
          this.recommentPlayList = data.result || [];
        }
      } catch (error) {
        console.log(error.message, "请求推荐歌单error");
      }
    },
    // 请求歌单详情
    async getPlayListDetail(id) {
      try {
        let { data } = await reqPlayListDetail(id);
        if (data.code == 200) {
          this.playListDetail = data.playlist;
        }
      } catch (error) {
        console.log(error.message, "请求歌单详情error");
      }
    },
    // 请求歌单所有歌曲
    async getSongs(id, options) {
      try {
        let { data } = await reqSongs(id, options);
        if (data.code == 200) {
          this.songs = data.songs;
        }
      } catch (error) {
        console.log(error.message, "请求歌单所有歌曲error");
      }
    },
    // 请求歌单的评论
    async getComment(id) {
      try {
        let { data } = await reqComment(id);
        if (data.code == 200) {
          this.hotComments = data.hotComments.splice(0, 5);
          this.comments = data.comments.splice(0, 10);
        }
      } catch (error) {
        console.log(error.message, "请求歌单评论error");
      }
    },
    // 请求歌单的收藏者
    async getColletors(id, limit) {
      try {
        let { data } = await reqCollectors(id, limit);
        if (data.code == 200) {
          this.subscribers = data.subscribers;
        }
      } catch (error) {
        console.log(error.message, "请求歌单收藏者 error");
      }
    },
  },
  getters: {
    // 具体歌单数据
    playListName: (state) => state.playListDetail.name || "",
    coverImgUrl: (state) => state.playListDetail.coverImgUrl || "",
    description: (state) => formatTxt(state.playListDetail.description || ""),
    createTime: (state) =>
      dayjs(state.playListDetail.createTime || 0).format("YYYY-MM-DD"),
    playCount: (state) => formatNumber(state.playListDetail.playCount || 0),
    subscribedCount: (state) =>
      formatNumber(state.playListDetail.subscribedCount || 0),
    tags: (state) => state.playListDetail.tags || [],
    commentCount: (state) =>
      formatNumber(state.playListDetail.commentCount || 0),
    shareCount: (state) => formatNumber(state.playListDetail.shareCount || 0),
    trackCount: (state) => state.playListDetail.trackCount || 0,
    avatarUrl: (state) => state.playListDetail.creator.avatarUrl || "",
    nickname: (state) => state.playListDetail.creator.nickname || "",
    // 歌单创建者id
    userId: (state) => state.playListDetail.userId || 0,
    playCount: (state) => state.playListDetail.playCount || 0,
  },
});
// 歌曲数据仓库
export const songDetail = defineStore("song", {
  state: () => {
    return {
      data: {},
      songDetail: { al: [] },
      lrc: {},
      // tlyric: {},
      simiSongs: [],
      refAudio: {},
      hotComments: [],
      comments:[],
    };
  },
  actions: {
    // 获取歌曲url
    async getSongUrl(id) {
      try {
        let { data } = await reqSongUrl(id);
        if (data.code == 200) {
          this.data = data.data[0];
        }
      } catch (error) {
        console.log("获取歌曲url失败", error.message);
      }
    },
    // 获取歌曲详情
    async getSongDetail(id) {
      try {
        let { data } = await reqSongDetail(id);
        if (data.code == 200) {
          this.songDetail = data.songs[0];
        }
      } catch (error) {
        console.log("获取歌曲详情失败", error.message);
      }
    },
    // 获取歌词
    async getLyric(id) {
      try {
        let { data } = await reqLyric(id);
        if (data.code == 200) {
          this.lrc = createLrcObj(data.lrc.lyric);
        }
      } catch (error) {
        console.log("获取歌词", error.message);
      }
    },
    // 获取歌曲评论===no
    async getSongComment(id, options) {
      try {
        let { data } = await reqSongComment(id, options);
        if (data.code == 200) {
          this.hotComments = data.hotComments;
          this.comments = data.comments;
        }
      } catch (error) {
        console.log("获取歌曲评论", error.message);
      }
    },
    // 获取相似音乐  ===no
    async getSimiSong(id) {
      try {
        let { data } = await reqSimiSong(id);
        if (data.code == 200) {
          this.simiSongs = data.songs;
        }
      } catch (error) {
        console.log("获取相似音乐", error.message);
      }
    },
  },
  getters: {
    url: (state) => state.data.url || "", // 歌曲url
    id: (state) => state.songDetail.id || 0, // 歌曲id
    time: (state) => formatPlayTime(state.songDetail.dt || 0), // 歌曲时间
    name: (state) => state.songDetail.name || "", //歌名
    ar: (state) => state.songDetail.ar || [], // 作者
    alia: (state) => state.songDetail.alia || "", // 副标题
    fee: (state) => state.songDetail.fee || 0, // 0为免费 1为vip歌曲
    picUrl: (state) => state.songDetail.al.picUrl || "", // 歌曲的封面
  },
});
