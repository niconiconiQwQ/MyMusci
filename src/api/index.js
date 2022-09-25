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
    url: "/toplist/detail",
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
// 请求所有/sub歌单分类
export const reqSubPlayListTag = () => {
  return requests({
    url: "/playlist/catlist",
    method: "get",
  });
};
