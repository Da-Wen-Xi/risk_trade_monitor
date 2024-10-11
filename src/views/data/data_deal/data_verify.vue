<script setup lang="ts">
import { tableDataVerify } from "@/views/data/data";

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
    label: "推理结果集名称",
    prop: "name",
    width: "380",
    fixed: true
  },
  {
    label: "状态",
    prop: "state",
    width: "160"
  },
  {
    label: "数据来源",
    prop: "import",
    width: "260"
  },
  {
    label: "推理模型",
    prop: "model",
    width: "260"
  },
  {
    label: "数据量",
    prop: "number",
    width: "200"
  },
  {
    label: "更新时间",
    prop: "update",
    width: "260"
  },
  {
    label: "操作",
    width: "180",
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
          ? tableDataVerify.concat(tableDataVerify).concat(tableDataVerify)
          : tableDataVerify
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
