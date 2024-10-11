<script setup lang="ts">
import { tableDataMore } from "@/views/data/data";

withDefaults(
  defineProps<{
    height?: string;
  }>(),
  {
    height: null
  }
);

const columns: TableColumnList = [
  {
    label: "数据集名称",
    prop: "name",
    width: "280",
    fixed: true
  },
  {
    label: "版本号",
    prop: "version",
    width: "160"
  },
  {
    label: "导入状态",
    prop: "import",
    width: "160"
  },
  {
    label: "发布状态",
    prop: "publish",
    width: "160"
  },
  {
    label: "数据用途",
    prop: "purpose",
    width: "260"
  },
  {
    label: "数据格式",
    prop: "format",
    width: "260"
  },
  {
    label: "数据量",
    prop: "number",
    width: "160"
  },
  {
    label: "更新时间",
    prop: "update",
    width: "160"
  },
  {
    label: "操作",
    width: "120",
    fixed: "right",
    slot: "operation"
  }
];

function handleClick(row) {
  console.log(
    "%crow===>>>: ",
    "color: MidnightBlue; background: Aquamarine; font-size: 20px;",
    row
  );
}
</script>

<template>
  <div>
    <div>
      <el-row>
        <el-button type="primary" round class="my-button"
          >+导入数据集</el-button
        >
      </el-row>
    </div>
    <pure-table
      class="my-table"
      :data="
        height
          ? tableDataMore.concat(tableDataMore).concat(tableDataMore)
          : tableDataMore
      "
      :columns="columns"
      :height="height"
    >
      <template #operation="{ row }">
        <el-button link type="primary" size="default" @click="handleClick(row)">
          详情
        </el-button>
        <el-button link type="primary" size="default">编辑</el-button>
      </template>
    </pure-table>
  </div>
</template>

<style>
.my-button {
  position: relative;
  margin-top: 20px;
  margin-bottom: 15px;
  margin-left: 15px;
}
.el-table .cell {
  line-height: 40px;
  font-size: 20px;
}
.el-table {
  margin-left: 10px;
}
.el-button > span {
  font-size: 16px;
}
</style>
