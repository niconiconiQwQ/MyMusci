<template>
  <div class="nav">
    <router-link to="/" class="active"><div>个性推荐</div></router-link>
    <router-link to="/main/customized"><div>专属定制</div></router-link>
    <router-link to="/main/playlists"><div>歌单</div></router-link>
    <router-link to="/main/toplist"><div>排行榜</div></router-link>
    <router-link to="/main/artist"><div>歌手</div></router-link>
    <router-link to="/main/latest"><div>最新音乐</div></router-link>
  </div>
</template>

<script setup>
</script>

<style lang="scss" scoped>
.nav {
  display: flex;
  margin-bottom: 30px;
  a {
    font-size: 18px;
    padding-right: 20px;
    &.active {
      font-size: 20px;
      font-weight: 700;
      div {
        border-bottom: 2px solid #389cb2;
      }
    }
    &:hover {
      color: #000;
    }
  }
}
</style>