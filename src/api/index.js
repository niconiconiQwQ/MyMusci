// 当前模块：为 API 进行统一管理
// 引入封装的axios
import cookie from "cookiejs";
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
/* ============================歌手相关====================== */
// 请求歌手分类列表
export const reqArtistList = ({
  limit = 20,
  offset = 0,
  type = -1,
  initial = -1,
  area = -1,
} = {}) => {
  return requests({
    url: "/artist/list",
    params: {
      limit,
      offset,
      type,
      initial,
      area,
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
// 请求歌手热门50首歌曲
export const reqArtistTopSong = (id) => {
  return requests({
    url: "/artist/top/song",
    params: {
      id,
    },
    method: "get",
  });
};
// 请求获取歌手专辑
export const reqArtistAlbum = (id, limit = 20) => {
  return requests({
    url: "/artist/album",
    params: {
      id,
      limit,
    },
    method: "get",
  });
};
// 请求相似歌手
export const reqSimiArtist = (id) => {
  return requests({
    url: "/simi/artist",
    method: "get",
    params: {
      id,
      cookie:
        "MUSIC_A_T=1491832863278; Max-Age=2147483647; Expires=Sun, 12 Nov 2090 15:45:18 GMT; Path=/eapi/feedback;;MUSIC_R_T=1491833014926; Max-Age=2147483647; Expires=Sun, 12 Nov 2090 15:45:18 GMT; Path=/weapi/feedback;;MUSIC_A_T=1491832863278; Max-Age=2147483647; Expires=Sun, 12 Nov 2090 15:45:18 GMT; Path=/wapi/feedback;;MUSIC_R_T=1491833014926; Max-Age=2147483647; Expires=Sun, 12 Nov 2090 15:45:18 GMT; Path=/wapi/clientlog;;MUSIC_A_T=1491832863278; Max-Age=2147483647; Expires=Sun, 12 Nov 2090 15:45:18 GMT; Path=/neapi/feedback;;MUSIC_R_T=1491833014926; Max-Age=2147483647; Expires=Sun, 12 Nov 2090 15:45:18 GMT; Path=/api/clientlog;;MUSIC_A_T=1491832863278; Max-Age=2147483647; Expires=Sun, 12 Nov 2090 15:45:18 GMT; Path=/weapi/feedback;;MUSIC_A_T=1491832863278; Max-Age=2147483647; Expires=Sun, 12 Nov 2090 15:45:18 GMT; Path=/openapi/clientlog;;MUSIC_A_T=1491832863278; Max-Age=2147483647; Expires=Sun, 12 Nov 2090 15:45:18 GMT; Path=/neapi/clientlog;;MUSIC_R_T=1491833014926; Max-Age=2147483647; Expires=Sun, 12 Nov 2090 15:45:18 GMT; Path=/neapi/clientlog;;MUSIC_R_T=1491833014926; Max-Age=2147483647; Expires=Sun, 12 Nov 2090 15:45:18 GMT; Path=/weapi/clientlog;;MUSIC_R_T=1491833014926; Max-Age=2147483647; Expires=Sun, 12 Nov 2090 15:45:18 GMT; Path=/eapi/clientlog;;MUSIC_A_T=1491832863278; Max-Age=2147483647; Expires=Sun, 12 Nov 2090 15:45:18 GMT; Path=/weapi/clientlog;;MUSIC_R_T=1491833014926; Max-Age=2147483647; Expires=Sun, 12 Nov 2090 15:45:18 GMT; Path=/openapi/clientlog;;MUSIC_A_T=1491832863278; Max-Age=2147483647; Expires=Sun, 12 Nov 2090 15:45:18 GMT; Path=/eapi/clientlog;;MUSIC_R_T=1491833014926; Max-Age=2147483647; Expires=Sun, 12 Nov 2090 15:45:18 GMT; Path=/eapi/feedback;;__remember_me=true; Max-Age=1296000; Expires=Wed, 09 Nov 2022 12:31:11 GMT; Path=/;;__csrf=6f90fe00e991baad9be5374e33987144; Max-Age=1296010; Expires=Wed, 09 Nov 2022 12:31:21 GMT; Path=/;;MUSIC_A_T=1491832863278; Max-Age=2147483647; Expires=Sun, 12 Nov 2090 15:45:18 GMT; Path=/api/clientlog;;MUSIC_R_T=1491833014926; Max-Age=2147483647; Expires=Sun, 12 Nov 2090 15:45:18 GMT; Path=/neapi/feedback;;MUSIC_SNS=; Max-Age=0; Expires=Tue, 25 Oct 2022 12:31:11 GMT; Path=/;MUSIC_R_T=1491833014926; Max-Age=2147483647; Expires=Sun, 12 Nov 2090 15:45:18 GMT; Path=/api/feedback;;MUSIC_U=6ab8b348ed7c49b265a3039aff106aea9fe98b2b5eff4ea29f3a4eb6529afda8993166e004087dd38ae7e4856452dbcc96353d4bd4ee878be7e4a22688f94b73b43adb1f74255295a89fe7c55eac81f3; Max-Age=1296000; Expires=Wed, 09 Nov 2022 12:31:11 GMT; Path=/;;MUSIC_A_T=1491832863278; Max-Age=2147483647; Expires=Sun, 12 Nov 2090 15:45:18 GMT; Path=/wapi/clientlog;;MUSIC_R_T=1491833014926; Max-Age=2147483647; Expires=Sun, 12 Nov 2090 15:45:18 GMT; Path=/wapi/feedback;;MUSIC_A_T=1491832863278; Max-Age=2147483647; Expires=Sun, 12 Nov 2090 15:45:18 GMT; Path=/api/feedback;",
    },
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
export const reqSongs = (id, { limit = 50, offset = 0 } = {}) => {
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
export const reqCollectors = (id, limit = 0) => {
  return requests({
    url: "/playlist/subscribers",
    params: {
      id,
      limit,
    },
    method: "get",
  });
};
// 请求歌单 ( 网友精选碟 )
export const reqHotPlayList = ({
  cat = "ACG",
  limit = 30,
  offset = 0,
} = {}) => {
  return requests({
    url: "/top/playlist",
    params: {
      cat,
      limit,
      offset,
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
// 请求歌词
export const reqLyric = (id) => {
  return requests({
    url: "/lyric",
    params: { id },
    method: "get",
  });
};
// 请求歌曲评论
export const reqSongComment = (id, { limit = 20, offset = 0 } = {}) => {
  return requests({
    url: "/comment/music",
    params: { id, limit, offset },
    method: "get",
  });
};
// 请求相似音乐
export const reqSimiSong = (id) => {
  return requests({
    url: "/simi/song",
    params: { id },
    method: "get",
  });
};
// 喜欢音乐
export const likeSong = (id) => {
  return requests({
    url: "/like",
    method: "get",
    params: {
      id,
      cookie: localStorage.getItem("cookie"),
    },
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
export const reqFolloweds = (uid, { limit = 20, offset = 0 } = {}) => {
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
export const reqFollows = (uid, { limit = 20, offset = 0 } = {}) => {
  return requests({
    url: "/user/follows",
    params: { uid, limit, offset },
    method: "get",
  });
};
// 请求用户歌单
export const reqUserPlayList = (uid, { limit, offset, timestamp } = {}) => {
  return requests({
    url: "/user/playlist",
    params: { uid, limit, offset, timestamp },
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
// 请求全部 MV
export const reqAllMV = ({
  area = "全部",
  type = "全部",
  older = "上升最快",
  limit = 10,
  offset = 0,
} = {}) => {
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
export const reqFirstMV = ({ area = "内地", limit = 8 } = {}) => {
  return requests({
    url: "/mv/first",
    params: {
      area,
      limit,
    },
    method: "get",
  });
};
// 请求网易出品 mv
export const reqExclusive = ({ limit = 8, offset = 0 } = {}) => {
  return requests({
    url: "/mv/exclusive/rcmd",
    params: {
      limit,
      offset,
    },
    method: "get",
  });
};
// 请求mv 排行
export const reqTopMV = ({ limit = 10, offset = 0, area = "" } = {}) => {
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
// 请求搜索 ===no
export const reqSearch = (
  keywords,
  { limit = 30, offset = 0, type = 1 } = {}
) => {
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
/* ===============================新歌速递和新碟上架==================== */
// 请求全部新碟
export const reqNewAlbum = ({ limit = 30, offset = 0, area = "ALL" } = {}) => {
  return requests({
    url: "/album/new",
    params: { limit, offset, area },
    method: "get",
  });
};
// 请求专辑评论
export const reqAlbumComment = (id, { limit = 20, offset = 0 } = {}) => {
  return requests({
    url: "/comment/album",
    params: { id, offset, limit },
    method: "get",
  });
};
// 请求专辑内容
export const reqAlbum = (id) => {
  return requests({
    url: "/album",
    params: { id },
    method: "get",
  });
};
// 请求专辑动态信息
export const reqAlbumDynamic = (id) => {
  return requests({
    url: "/album/detail/dynamic",
    params: { id },
    method: "get",
  });
};
// 请求新歌速递
export const reqNewSongs = (type = 0) => {
  return requests({
    url: "/top/song",
    params: { type },
    method: "get",
  });
};
/* ===================================登录注册相关========================== */
// 手机密码登录 ===no
export const reqPhoneLogin = (phone, password) => {
  return requests({
    url: "/login/cellphone",
    params: {
      phone,
      password,
    },
    method: "post",
  });
};
// 1. 二维码 key 生成接口 ===no
export const reqQrKey = () => {
  return requests({
    url: "/login/qr/key",
    method: "get",
    timerstamp: Date.now(),
  });
};
// 2. 二维码生成接口 ===no
export const reqQrCreate = (key) => {
  return requests({
    url: "/login/qr/key",
    params: {
      key,
      qrimg: true,
      timerstamp: Date.now(),
    },
    method: "get",
  });
};
// 3. 二维码检测扫码状态接口 ===no
export const reqQrCheck = (key) => {
  return requests({
    url: "/login/qr/check",
    params: {
      key,
      timerstamp: Date.now(),
    },
    method: "get",
  });
};
// 4. 发送验证码
export const reqSendCaptcha = (phone) => {
  return requests({
    url: "/captcha/sent",
    params: {
      phone,
    },
    method: "get",
  });
};
// 5. 验证验证码
export const reqCheckCaptcha = (phone, captcha) => {
  return requests({
    url: "/captcha/verify",
    params: {
      phone,
      captcha,
    },
    method: "get",
  });
};
// 6. 登录状态
export const reqLoginStatus = (cookie) => {
  return requests({
    url: `/login/status?timerstamp=${Date.now()}`,
    method: "post",
    data: {
      cookie,
    },
  });
};
// 7. 退出登录
export const reqLogOut = () => {
  return requests({
    url: "/logout",
    method: "get",
  });
};

/* ================================其他 */
// 发送/删除评论
export const reqSendComment = ({ t, type, id, content, commentId } = {}) => {
  return requests({
    url: "/comment",
    method: "get",
    params: {
      t, //1 发送, 2 回复
      type, //0: 歌曲 1: mv 2: 歌单 3: 专辑 4: 电台 5: 视频 6: 动态
      id,
      content,
      commentId,
    },
  });
};
