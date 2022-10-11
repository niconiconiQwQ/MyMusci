// 当前模块：为 API 进行统一管理
// 引入封装的axios
import requests from "./request";
/* =========================其他======================== */
// 请求首页banner--没渲染 ====no
export const reqBanners = () => {
  return requests({
    url: "/banner?type=0",
    method: "get",
  });
};
// 请求 独家放送(入口列表)
export const reqList = () => {
  return requests({
    url: "/personalized/privatecontent",
    method: "get",
  });
};
// 请求 推荐电台
export const reqDjRecommend = () => {
  return requests({
    url: "/dj/personalize/recommend",
    method: "get",
  });
};
/* ============================歌手相关====================== */
// 请求歌手分类列表
export const reqArtistList = (artParams) => {
  return requests({
    url: "/artist/list",
    params: {
      limit: artParams.limit || 20,
      offset: artParams.offset || 0,
      type: artParams.type || -1,
      initial: artParams.initial || -1,
      area: artParams.area || -1,
    },
    method: "get",
  });
};
// 请求歌手描述 desc
export const reqArtistDesc = (id) => {
  return requests({
    url: "/artist/desc",
    params: {
      id,
    },
    method: "get",
  });
};
// 请求歌手详情 detail
export const reqDetail = (id) => {
  return requests({
    url: "/artist/detail",
    params: {
      id,
    },
    method: "get",
  });
};
// 请求歌手MV
export const reqArtistMV = (id) => {
  return requests({
    url: "/artist/mv",
    params: {
      id,
    },
    method: "get",
  });
};
// 请求歌手粉丝数量
export const reqFans = (id) => {
  return requests({
    url: "/artist/follow/count",
    params: {
      id,
    },
    method: "get",
  });
};
// 请求歌手热门50首歌曲--没渲染 ====no
export const reqArtistTopSong = (id) => {
  return requests({
    url: "/artist/top/song",
    params: {
      id,
    },
    method: "get",
  });
};
// 请求获取歌手专辑--没渲染 ====no
export const reqArtistAlbum = (id, limit) => {
  return requests({
    url: "/artist/album",
    params: {
      id,
      limit,
    },
    method: "get",
  });
};
/* ===========================歌单相关======================== */
// 请求歌单排行榜
export const reqTopList = () => {
  return requests({
    url: "/toplist",
    method: "get",
  });
};
// 请求推荐歌单 9个
export const reqPersonalized = (limit = 9) => {
  return requests({
    url: "personalized",
    params: {
      limit,
    },
    method: "get",
  });
};
// 请求热门歌单分类
export const reqHotPlayListTag = () => {
  return requests({
    url: "/playlist/hot",
    method: "get",
  });
};
// 请求所有歌单分类
export const reqSubPlayListTag = () => {
  return requests({
    url: "/playlist/catlist",
    method: "get",
  });
};
// 请求获取歌单详情
export const reqPlayListDetail = (id) => {
  return requests({
    url: "/playlist/detail",
    params: {
      id,
    },
    method: "get",
  });
};
// 请求歌单中的歌曲
export const reqSongs = (id, limit, offset) => {
  return requests({
    url: "/playlist/track/all",
    params: {
      id,
      limit,
      offset,
    },
    method: "get",
  });
};
// 请求歌单评论
export const reqComment = (id) => {
  return requests({
    url: "/comment/playlist",
    params: {
      id,
    },
    method: "get",
  });
};
// 请求歌单收藏者
export const reqCollectors = (id, limit) => {
  return requests({
    url: "/playlist/subscribers",
    params: {
      id,
      limit,
    },
    method: "get",
  });
};
/* ===========================歌曲/音乐相关======================== */
// 请求 推荐新音乐
export const reqLatestMusic = () => {
  return requests({
    url: "/personalized/newsong",
    method: "get",
  });
};
// 请求音乐 url
export const reqSongUrl = (id, level = "standard") => {
  return requests({
    url: "/song/url/v1",
    params: {
      id,
      level,
    },
    method: "get",
  });
};
// 请求歌曲详情
export const reqSongDetail = (ids) => {
  return requests({
    url: "/song/detail",
    params: { ids },
    method: "get",
  });
};
/* ==========================用户信息相关====================== */
// 请求用户详情
export const reqUserDetail = (uid) => {
  return requests({
    url: "/user/detail",
    params: {
      uid,
    },
    method: "get",
  });
};
// 请求用户粉丝列表
export const reqFolloweds = (uid, limit = 20, offset = 0) => {
  return requests({
    url: "/user/followeds",
    params: {
      uid,
      limit,
      offset,
    },
    method: "get",
  });
};
// 请求用户关注列表
export const reqFollows = (uid, limit = 20, offset = 0) => {
  return requests({
    url: "/user/follows",
    params: { uid, limit, offset },
    method: "get",
  });
};
// 请求用户歌单
export const reqUserPlayList = (uid, limit = 20, offset = 0) => {
  return requests({
    url: "/user/playlist",
    params: { uid, limit, offset },
    method: "get",
  });
};
/*  ==========================MV相关=========================== */
// 请求 推荐MV列表
export const reqMV = () => {
  return requests({
    url: "/personalized/mv",
    method: "get",
  });
};
// 请求MV地址
export const reqMVUrl = (id) => {
  return requests({
    url: "/mv/url",
    params: {
      id,
    },
    method: "get",
  });
};
// 请求MV详情
export const reqMVDetail = (mvid) => {
  return requests({
    url: "/mv/detail",
    params: { mvid },
    method: "get",
  });
};
// 请求MV评论
export const reqMVcomment = (id, offset = 0) => {
  return requests({
    url: "/comment/mv",
    params: {
      id,
      offset,
    },
    method: "get",
  });
};
// 请求相似MV
export const reqSimiMV = (mvid) => {
  return requests({
    url: "/simi/mv",
    params: { mvid },
    method: "get",
  });
};
// 请求点赞转发收藏数量
export const reqMVDetailNum = (mvid) => {
  return requests({
    url: "/mv/detail/info",
    params: { mvid },
    method: "get",
  });
};
// 请求全部 MV  ====no
export const reqAllMV = (
  area = "全部",
  type = "全部",
  older = "上升最快",
  limit = 10,
  offset = 0
) => {
  return requests({
    url: "/mv/all",
    params: {
      area,
      type,
      older,
      limit,
      offset,
    },
    method: "get",
  });
};
// 请求最新 mv
export const reqFirstMV = (area = "内地", limit = 8) => {
  return requests({
    url: "/mv/first",
    params: {
      area,
      limit,
    },
    method: "get",
  });
};
// 请求网易出品 mv === no
export const reqExclusive = (limit = 8, offset = 0) => {
  return requests({
    url: "/mv/exclusive/rcmd",
    params: {
      limit,
      offset,
    },
    method: "get",
  });
};
// 请求mv 排行 ===no
export const reqTopMV = (limit, offset, area) => {
  return requests({
    url: "/top/mv",
    params: {
      limit,
      offset,
      area,
    },
    method: "get",
  });
};
/* ===========================搜索相关============================ */
// 请求默认搜索关键词
export const reqSearchDefault = () => {
  return requests({
    url: "/search/default",
    method: "get",
  });
};
// 请求搜索建议
export const reqSearchSuggest = (keywords) => {
  return requests({
    url: "/search/suggest",
    params: { keywords },
    method: "get",
  });
};
// 请求热搜列表(简略)
export const reqHotSingle = () => {
  return requests({
    url: "/search/hot",
    method: "get",
  });
};
// 请求热搜列表(详细)
export const reqSearchHot = () => {
  return requests({
    url: "/search/hot/detail",
    method: "get",
  });
};
// 请求搜索多重匹配 ====no
export const reqMulSearch = (keywords) => {
  return requests({
    url: "/search/multimatch",
    params: { keywords },
    method: "get",
  });
};
// 请求搜索
export const reqSearch = (keywords, limit = 30, offset = 0, type = 1) => {
  return requests({
    url: "/cloudsearch",
    params: {
      keywords,
      limit,
      offset,
      type,
    },
    method: "get",
  });
};
/* ============================视频相关=========================== */
// 请求视频标签列表 ====no
export const reqVideoGroup = () => {
  return requests({
    url: "/video/group/list",
    method: "get",
  });
};
// 请求视频播放地址 ====no
export const reqVideoUrl = (id) => {
  return requests({
    url: "/video/url",
    params: { id },
    method: "get",
  });
};
// 请求相关视频 ====no
export const reqRelated = (id) => {
  return requests({
    url: "/related/allvideo",
    params: { id },
    method: "get",
  });
};
// 请求视频详情 ====no
export const reqVideoDetail = (id) => {
  return requests({
    url: "/video/detail",
    params: { id },
    method: "get",
  });
};
// 请求视频评论 ====no
export const reqVideoComment = (id) => {
  return requests({
    url: "/comment/video",
    params: { id },
    method: "get",
  });
};
// 请求视频点赞转发评论数数据 ====no
export const reqVideoNum = (vid) => {
  return requests({
    url: "/video/detail/info",
    params: { vid },
    method: "get",
  });
};
