<template>
  <div class="similar">
    <ul>
      <li v-for="item in simiArtists" :key="item.id">
        <a href="#" @click="goArtist(item.id)"
          ><img v-lazy="item.picUrl" alt=""
        /></a>
        <div>
          <a href="#">{{ item.name }}</a>
        </div>
      </li>
    </ul>
  </div>
</template>
<script setup>
import { ref, onBeforeMount,watch } from "vue";
import { artistListStore } from "@/store/artist";
import { useRouter, useRoute } from "vue-router";
import { storeToRefs } from "pinia";
const route = useRoute(),
  router = useRouter();
const ArtistStore = artistListStore();
const { simiArtists } = storeToRefs(ArtistStore);
ArtistStore.getSimiArtist(route.query.id);
onBeforeMount(() => {
  console.log(simiArtists.value);
});
watch(()=>route.query.id, () => {
  
})
const goArtist = (id) => {
  router.push({
    path: "/artist",
    query: {
      id,
    },
  });
};
</script>
<style lang="scss" scoped>
.similar {
  ul {
    width: 100%;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    li {
      width: 19%;
      height: 180px;
      margin-bottom: 30px;
      a {
        display: inline-block;
        width: 100%;
        height: 80%;
        margin-bottom: 10px;
        img {
          width: 100%;
          height: 100%;
          border-radius: 4px;
        }
      }
      div {
        padding-left: 10px;
      }
    }
  }
}
</style>
