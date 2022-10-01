export default [
  // 首页 -个性推荐
  {
    path: "/",
    component: () => import("@/views/container/Container.vue"),
  },
  {
    // 主内容展示区
    path: "/main",
    children: [
      // 专属定制
      {
        path: "customized",
        component: () => import("@/views/container/customized/Customized.vue"),
      },
      // 歌单
      {
        path: "playlists",
        component: () => import("@/views/container/playLists/PlayLists.vue"),
      },
      // 排行榜
      {
        path: "toplist",
        component: () => import("@/views/container/topList/TopList.vue"),
      },
      // 歌手
      {
        path: "artist",
        component: () => import("@/views/container/artist/Artist.vue"),
      },
      // 最新音乐
      {
        path: "latest",
        component: () => import("@/views/container/latest/Latest.vue"),
      },
    ],
  },
  // 播客
  {
    path: "/podcast",
    component: () => import("@/views/podcast/Podcast.vue"),
  },
  // 我的
  {
    path: "/user",
    component: () => import("@/views/User/User.vue"),
  },
  // 我喜欢的音乐
  {
    path: "/myfond",
    component: () => import("@/views/myFond/MyFond.vue"),
  },
  // 视频
  {
    path: "/video",
    component: () => import("@/views/video/Video.vue"),
  },
  // 私人FM
  {
    path: "/myfm",
    component: () => import("@/views/MyFM/MyFM.vue"),
  },
  // 直播
  {
    path: "/live",
    component: () => import("@/views/live/Live.vue"),
  },
  // 我的粉丝
  {
    path: "/myfollow",
    component: () => import("@/views/myFollow/MyFollow.vue"),
  },
  // 我的收藏
  {
    path: "/mycollection",
    component: () => import("@/views/MyCollection/MyCollection.vue"),
  },
  // 我的关注
  {
    path: "/focus",
    component: () => import("@/views/focus/Focus.vue"),
  },
  // 歌手首页
  {
    path: "/artist",
    component: () => import("@/views/artistHome/ArtistHome.vue"),
    redirect: "/artist/album",
    children: [
      // album专辑
      {
        // path: "", // 默认子路由
        path: "album",
        component: () => import("@/views/artistHome/fragment/Album.vue"),
      },
      // MV
      {
        path: "mv",
        component: () => import("@/views/artistHome/fragment/MV.vue"),
      },
      // 歌手详情
      {
        path: "detail",
        component: () => import("@/views/artistHome/fragment/Detail.vue"),
      },
      // 相似歌手
      {
        path: "similar",
        component: () => import("@/views/artistHome/fragment/Similar.vue"),
      },
    ],
  },
  // 歌单页面路由
  {
    path: "/playlist",
    component: () => import("@/views/playList/PlayList.vue"),
    redirect: "/playlist/songlist",
    children: [
      {
        path: "songlist",
        component: () => import("@/views/playList/fragment/SongList.vue"),
      },
      {
        path: "comment",
        component: () => import("@/views/playList/fragment/Comment.vue"),
      },
      {
        path: "collectors",
        component: () => import("@/views/playList/fragment/Collectors.vue"),
      },
    ],
  },
  {
    path: "/login",
    component: () => import("@/components/login/Login.vue"),
  },
  /*   { path: "/", redirect: "/home" },路由重定向
  {
    //在注册路由的时候,如果这里占位，切记务必要传递params
    path: "/search/:keyword?",
    component: Search,
    props: true,
    name: "search",
  },
  {
    path: "/detail/:skuid",
    component: Detail,
    meta: { show: true },
  }, */
];
