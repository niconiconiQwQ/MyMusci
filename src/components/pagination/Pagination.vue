<template>
  <div class="pagi">
    <el-pagination background layout="prev, pager, next" :total="100" small />
  </div>
</template>

<script setup>
import { computed } from "vue";
</script>

<style lang="scss" scoped>
.pagi {
  margin-bottom: 20px;
  .el-pagination {
    justify-content: center;

    :deep(.el-pager) {
      .number {
        background-color: transparent;
        border: 1px solid #e5e5e5;
      }
      li:not(.is-disabled).is-active {
        background-color: #38b2a8;
        color: var(--el-color-white);
        font-weight: 700;
      }
    }
  }
}
</style>
