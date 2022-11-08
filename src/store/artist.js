import { defineStore } from "pinia";
import {
  reqArtistList,
  reqArtistDesc,
  reqDetail,
  reqArtistMV,
  reqFans,
  reqArtistTopSong,
  reqArtistAlbum,
  reqAlbum,
  reqSimiArtist,
} from "@/api/index";
// 歌手列表的仓库
export const artistListStore = defineStore("artistList", {
  state: () => {
    return {
      // 歌手列表
      artistsList: [],
      // 某歌手描述 desc
      descList: [],
      // 某歌手详情 detail
      detail: { artist: {}, identify: {} },
      // 某歌手 id
      id: 0,
      // 某歌手简介
      briefDesc: "",
      // 某歌手MV
      mvs: [],
      // 某歌手粉丝数
      fans: {},
      // 某歌手热门50首
      songs: [],
      // 某歌手的专辑
      hotAlbums: [],
      // 某歌手的相似歌手
      simiArtists: [],
      // 更多
      hasMore: true,
    };
  },
  getters: {
    // 某歌手名
    name: (state) => state.detail.artist.name || "",
    // 某歌手身份
    imageDesc: (state) => state.detail.identify.imageDesc || "null",
    // 某歌手封面
    cover: (state) => state.detail.artist.cover || "",
    // 某歌手专辑数：
    albumSize: (state) => state.detail.artist.albumSize || "",
    // 某歌手MV数
    mvSize: (state) => state.detail.artist.mvSize || "",
    // 某歌手音乐数
    musicSize: (state) => state.detail.artist.musicSize || "",
    // 某歌手10首热门
    TenSongs: (state) => state.songs.slice(0, 10) || [],
  },
  actions: {
    // 请求歌手列表
    async getArtist(params) {
      try {
        let { data } = await reqArtistList(params);
        if (data.code == 200) {
          // 如果offset不为 0 或 undefined ,则追加数组，否则覆盖数组
          if (params.offset > 0) {
            this.artistsList = [...this.artistsList, ...data.artists];
            this.hasMore = data.more;
          } else {
            this.artistsList = data.artists;
            this.hasMore = data.more;
          }
        }
      } catch (error) {
        console.log(error.message, "请求歌手列表error");
      }
    },
    // 请求歌手描述 desc
    async getDesc(id) {
      try {
        let { data } = await reqArtistDesc(id);
        if (data.code == 200) {
          this.descList = data.introduction;
          this.briefDesc = data.briefDesc;
        }
      } catch (error) {
        console.log(error.message, "请求歌手描述error");
      }
    },
    // 请求歌手详情 detail
    async getDetail(id) {
      try {
        let { data } = await reqDetail(id);
        if (data.code == 200) {
          this.detail = data.data;
        }
      } catch (error) {
        console.log(error.message, "请求歌手详情error");
      }
    },
    // 请求歌手MV
    async getArtistMV(id) {
      try {
        let { data } = await reqArtistMV(id);
        if (data.code == 200) {
          this.mvs = data.mvs;
        }
      } catch (error) {
        console.log(error.message, "请求歌手MV error");
      }
    },
    // 请求歌手粉丝数
    async getFans(id) {
      try {
        let { data } = await reqFans(id);
        if (data.code == 200) {
          this.fans = data.data;
        }
      } catch (error) {
        console.log(error.message, "请求歌手粉丝 error");
      }
    },
    // 请求歌手热门50首歌曲
    async getArtistTopSong(id) {
      try {
        let { data } = await reqArtistTopSong(id);
        if (data.code == 200) {
          this.songs = data.songs;
        }
      } catch (error) {
        console.log(error.message, "请求歌手热门50首 error");
      }
    },
    // 请求获取歌手专辑
    async getArtistAlbum(id, limit) {
      try {
        let { data } = await reqArtistAlbum(id, limit);
        if (data.code == 200) {
          this.hotAlbums = data.hotAlbums;
        }
      } catch (error) {
        console.log(error.message, "请求获取歌手专辑 error");
      }
    },
    // 请求专辑信息 === no
    async getAblum(id) {
      try {
        let { data } = await reqAlbum(id);
        if (data.code == 200) {
          // this.hotAlbums = data.hotAlbums;
        }
      } catch (error) {
        console.log(error.message, "请求专辑信息 error");
      }
    },
    // 请求专辑前10首歌 === no
    async getAblum(id) {
      try {
        let { data } = await reqAlbum(id);
        if (data.code == 200) {
          // this.hotAlbums = data.hotAlbums;
        }
      } catch (error) {
        console.log(error.message, "请求专辑10首歌 error");
      }
    },
    // 请求相似歌手
    async getSimiArtist(id) {
      try {
        let { data } = await reqSimiArtist(id);
        if (data.code == 200) {
          this.simiArtists = data.artists;
        }
      } catch (error) {
        console.log(error.message, "请求相似歌手 error");
      }
    },
  },
});
