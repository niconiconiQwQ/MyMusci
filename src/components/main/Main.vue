<template>
  <div class="container">
    <SideBar></SideBar>
    <Container></Container>
  </div>
</template>

<script>
import SideBar from "@/components/main/sidebar/SideBar";
import Container from "@/views/container/Container";
export default {
  components: {
    SideBar,
    Container,
  },
};
</script>

<style lang="scss" scoped>
.container {
  display: flex;
  height: 682px;
  border-bottom: 1px solid #e0e0e0;
}
</style>