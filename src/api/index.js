// 当前模块：为 API 进行统一管理
// 引入封装的axios
import requests from "./request";
// 请求歌手分类列表
// /artist/list 或 /artist/list?type=1&area=96&initial=b
export const reqArtistList = (query) => {
  return requests({
    url: `/artist/list?${query || ""}`,
    method: "get",
  });
};
// 请求排行榜榜单内容
export const reqTopList = () => {
  return requests({
    url: "/toplist",
    method: "get",
  });
};
// 请求首页banner
export const reqBanners = () => {
  return requests({
    url: "/banner?type=0",
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
// 请求 独家放送(入口列表)
export const reqList = () => {
  return requests({
    url: "/personalized/privatecontent",
    method: "get",
  });
};
// 请求 推荐歌单 9个
export const reqPersonalized = (query) => {
  return requests({
    url: `personalized?limit=${query}`,
    method: "get",
  });
};
// 请求 推荐MV列表
export const reqMV = () => {
  return requests({
    url: "/personalized/mv",
    method: "get",
  });
};
// 请求 推荐新音乐
export const reqLatestMusic = () => {
  return requests({
    url: "/personalized/newsong",
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
// 请求歌手描述 desc
export const reqArtistDesc = (id) => {
  return requests({
    url: `/artist/desc?id=${id}`,
    method: "get",
  });
};
// 请求歌手 详情 detail
export const reqDetail = (id) => {
  return requests({
    url: `/artist/detail?id=${id}`,
    method: "get",
  });
};
// 请求歌手MV
export const reqArtistMV = (id) => {
  return requests({
    url: `/artist/mv?id=${id}`,
    method: "get",
  });
};
// 请求歌手粉丝数量
export const reqFans = (id) => {
  return requests({
    url: `/artist/follow/count?id=${id}`,
    method: "get",
  });
};
// 请求歌手热门50首歌曲--没渲染
export const reqArtistTopSong = (id) => {
  return requests({
    url: `/artist/top/song?id=${id}`,
    method: "get",
  });
};
// 请求获取歌手专辑--没渲染
export const reqArtistAlbum = (id, limit) => {
  return requests({
    url: `/artist/album?id=${id}&limit=${limit}`,
    method: "get",
  });
};
// 请求获取歌单详情
export const reqPlayListDetail = (id) => {
  return requests({
    url: `/playlist/detail?id=${id}`,
    method: "get",
  });
};
// 请求歌单中的歌曲
export const reqSongs = (id, limit, offset) => {
  return requests({
    url: `/playlist/track/all?id=${id}&limit=${limit}&offset=${offset}`,
    method: "get",
  });
};
// 请求歌单评论
export const reqComment = (id) => {
  return requests({
    url: `/comment/playlist?id=${id}`,
    method: "get",
  });
};
// 请求歌单收藏者
export const reqCollectors = (id, limit) => {
  return requests({
    url: `/playlist/subscribers?id=${id}&limit=${limit}`,
    method: "get",
  });
};
// 请求用户详情
export const reqUserDetail = (id) => {
  return requests({
    url: `/user/detail?uid=${id}`,
    method: "get",
  });
};
// 请求用户粉丝列表
export const reqFolloweds = (id, limit = 20, offset = 0) => {
  return requests({
    url: `/user/followeds?uid=${id}&limit=${limit}&offset=${offset}`,
    method: "get",
  });
};
// 请求用户关注列表
export const reqFollows = (id, limit = 20, offset = 0) => {
  return requests({
    url: `/user/follows?uid=${id}&limit=${limit}&offset=${offset}`,
    method: "get",
  });
};
// 请求音乐 url https://music.163.com/song/media/outer/url?id=id.mp3
export const reqSongUrl = (id, level = "standard") => {
  return requests({
    url: `/song/url/v1?id=${id}&level=${level}`,
    method: "get",
  });
};
// 请求歌曲详情
export const reqSongDetail = (id) => {
  return requests({
    url: `/song/detail?ids=${id}`,
    method: "get",
  });
};