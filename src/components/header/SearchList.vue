<template>
  <div class="searchList">
    <div class="searchList1 ctn-mode" v-if="props.keywords == ''">
      <div class="history">
        <div class="title">
          <div class="top">
            <div>
              <span>搜索历史</span><span class="iconfont icon-shanchu"></span>
            </div>
            <span>查看全部</span>
          </div>
        </div>
      </div>
      <div class="hot">
        <h4>热搜榜</h4>
        <ul>
          <li v-for="(item, index) in searchHot" :key="item.score">
            <div class="num">{{ index }}</div>
            <div class="msg">
              <div class="art">
                <span class="name">{{ item.searchWord }}</span
                ><span>192333</span>
              </div>
              <div class="desc">{{ item.content }}</div>
            </div>
          </li>
        </ul>
      </div>
    </div>
    <div class="searchList2 ctn-mode" v-else>
      <ul>
        <li class="guess">
          <div class="title">
            <span class="iconfont icon-seach"></span><span>猜你想搜</span>
          </div>
          <ul>
            <li v-for="(item, index) in hotSingle" :key="item.index">
              {{ item.first }}
            </li>
          </ul>
        </li>
        <li class="songs">
          <div class="title">
            <span class="iconfont icon-music-player"></span> <span>单曲</span>
          </div>
          <ul>
            <li v-for="item in suggests.songs">{{ item.name }}</li>
          </ul>
        </li>
        <li class="artists">
          <div class="title">
            <span class="iconfont icon-jingjiren"></span> <span>歌手</span>
          </div>
          <ul>
            <li v-for="item in suggests.artists">{{ item.name }}</li>
          </ul>
        </li>
        <li class="albums">
          <div class="title">
            <span class="iconfont icon-zhuanji"></span> <span>专辑</span>
          </div>
          <ul>
            <li v-for="item in suggests.albums">{{ item.name }}</li>
          </ul>
        </li>
        <li class="palyLists">
          <div class="title">
            <span class="iconfont icon-liebiao1"></span> <span>歌单</span>
          </div>
          <ul>
            <li v-for="item in suggests.playlists">{{ item.name }}</li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
</template>
<script setup>
import { ref, onMounted, onBeforeMount, defineProps } from "vue";
import { useRouter, useRoute } from "vue-router";
import { Search } from "@/store/index";
import { storeToRefs } from "pinia";
const SearchStore = Search();
const { searchHot, suggests, hotSingle } = storeToRefs(SearchStore);
const props = defineProps(["keywords"]);
// 发请求捞数据
SearchStore.getSearchHot();
SearchStore.getSearchSuggest(props.keywords);
onBeforeMount(() => {});
onMounted(() => {});
</script>
<style lang="scss" scoped>
.searchList {
  background-color: white;
  color: #999999;
  box-shadow: -4px 2px 5px #e8e8f9;
  .searchList1,
  .searchList2 {
    height: 600px;
    padding: 0;
    padding-top: 20px;
    width: 350px;
  }
  .searchList1 {
    .history {
      margin-bottom: 20px;
      padding: 0px 20px;
      color: #666666;
      .title {
        .top {
          display: flex;
          justify-content: space-between;
          & > div {
            .iconfont {
              margin-left: 10px;
            }
          }
        }
      }
    }
    .hot {
      h4 {
        margin-bottom: 10px;
        color: #666666;
        padding: 0px 20px;
      }
      ul {
        li {
          height: 60px;
          padding: 6px 0px;
          display: flex;
          padding: 5px 20px;

          &:hover {
            background-color: #f2f2f2;
          }
          .num {
            display: flex;
            align-items: center;
            width: 30px;
            font-size: 1.6rem;
          }
          .msg {
            display: flex;
            flex-direction: column;
            justify-content: space-evenly;
            overflow: hidden;
            .art {
              span {
                &:first-child {
                  color: #333;
                  margin-right: 16px;
                  font-size: 1.5rem;
                }
                &:last-child {
                  color: #cccccc;
                }
              }
            }
          }
          .desc {
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
          }
        }
      }
    }
  }
  .searchList2 {
    color: #373737;
    > ul {
      > li {
        margin-bottom: 10px;
        .title {
          margin-bottom: 10px;
          padding: 0px 10px;
          color: #9f9f9f;
          &:hover {
            color: #676767;
          }
          .iconfont {
            margin-right: 10px;
          }
        }
        > ul {
          > li {
            // background-color: #ccc;
            padding: 10px 40px;
            height: 38px;
            &:hover {
              background-color: #f2f2f2;
            }
          }
        }
      }
    }
  }
}
</style>
