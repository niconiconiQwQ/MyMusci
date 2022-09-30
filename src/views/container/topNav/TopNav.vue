<template>
  <div class="nav-mode">
    <ul>
      <li><router-link to="/">个性推荐</router-link></li>
      <li><router-link to="/main/customized">专属定制</router-link></li>
      <li><router-link to="/main/playlists">歌单</router-link></li>
      <li><router-link to="/main/toplist">排行榜</router-link></li>
      <li><router-link to="/main/artist">歌手</router-link></li>
      <li><router-link to="/main/latest">最新音乐</router-link></li>
    </ul>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
.nav-mode {
  margin-bottom: 30px;
  a {
    font-size: 18px;
    &.router-link-active {
      font-size: 20px;
    }
  }
}
</style>
