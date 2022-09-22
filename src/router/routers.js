// 导入一级路由组件
// 导入二级路由组件
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
    path: "/playList",
    component: () => import("@/views/palyList/playList.vue"),
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
  {
    path: "/myfollow",
    component: () => import("@/views/myFollow/MyFollow.vue"),
  },
  {
    path: "/mycollection",
    component: () => import("@/views/MyCollection/MyCollection.vue"),
  },
  {
    path: "/focus",
    component: () => import("@/views/focus/Focus.vue"),
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
