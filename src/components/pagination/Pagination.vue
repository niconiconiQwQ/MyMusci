<template>
  <div class="pagination">
    <button :disabled="pageNo == 1" @click="$emit('getPageNo', pageNo - 1)">
      上一页
    </button>

    <button
      v-if="startNumAndEndNum.start > 1"
      @click="$emit('getPageNo', 1)"
      :class="{ active: pageNo == 1 }"
    >
      1
    </button>
    <button v-if="startNumAndEndNum.start > 2">···</button>
    <!-- 这里v-for和v-if一起，其实是不推荐的，但就这么写了 -->
    <button
      v-for="index in startNumAndEndNum.end"
      :key="index"
      v-if="index <= startNumAndEndNum.end && index > startNumAndEndNum.end - 5"
      :class="{ active: pageNo == index }"
    >
      {{ page }}
    </button>

    <button v-if="startNumAndEndNum.end < totalPage - 1">···</button>
    <button
      v-if="startNumAndEndNum.end < totalPage"
      @click="$emit('getPageNo', totalPage)"
      :class="{ active: pageNo == totalPage }"
    >
      {{ totalPage }}
    </button>
    <button
      :disabled="pageNo == totalPage"
      @click="$emit('getPageNo', pageNo + 1)"
    >
      下一页
    </button>

    <button style="margin-left: 30px">共 {{ total }} 条</button>
  </div>
</template>

<script setup>
import { computed } from "vue";
const props = defineProps(["pageNo", "pageSize", "total", "continues"]);
const totalPage = computed(() => {
  // 总页数
  return Math.ceil(props.total / props.pageSize);
});
//计算出连续的页面的起始数字与结束数字【连续页面的数字至少5】
const startNumAndEndNum = () => {
  const { continues, pageNo } = props;
  // 先定义两个变量存储起始数字与结束数字
  let start,
    end = 0;
  // 如果总页数少于5(不正常现象)
  if (continues > totalPage) {
    start = 1;
    end = totalPage;
  } else {
    // 正常现象
    start = pageNo - parseInt(continues / 2);
    end = pageNo + parseInt(continues / 2);
    // start 小于等于0，就要纠正
    if (start <= 0) {
      start = 1;
      end = continues;
    }
    // end 大于 总页数要纠正
    if (end > totalPage) {
      start = totalPage - continues + 1;
      end = totalPage;
    }
  }
  return { end, start };
};
</script>

<style lang="scss" scoped>
.pagination {
  display: flex;
  justify-content: center;
  margin-bottom: 30px;
  button {
    margin: 0 5px;
    background-color: #f4f4f5;
    color: #606266;
    outline: none;
    border-radius: 2px;
    padding: 0 4px;
    vertical-align: top;
    display: inline-block;
    font-size: 13px;
    min-width: 35.5px;
    height: 28px;
    line-height: 28px;
    cursor: pointer;
    box-sizing: border-box;
    text-align: center;
    border: 0;

    &[disabled] {
      color: #c0c4cc;
      cursor: not-allowed;
    }

    &.active {
      cursor: not-allowed;
      background-color: #409eff;
      color: #fff;
    }
  }
  .active {
    background: skyblue;
  }
}
</style>
