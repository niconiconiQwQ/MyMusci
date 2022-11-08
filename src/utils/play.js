import { storeToRefs } from "pinia";
import { songDetail } from "@/store/playlist";
const songDetailStore = songDetail();
const { isPlaying } = storeToRefs(songDetailStore);
// 双击播放歌曲
export default (id) => {
  isPlaying.value = false;
  // 双击之后去更新歌曲的数据
  songDetailStore.getSongDetail(id);
  songDetailStore.getSongUrl(id);
  setTimeout(() => {
    isPlaying.value = true;
  }, 2000);
};
