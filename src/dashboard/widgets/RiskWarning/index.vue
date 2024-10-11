<!-- eslint-disable vue/require-v-for-key -->
<template>
  <BasePanel>
    <div class="risk-warning">
      <div
        v-for="item in list"
        class="row"
        :class="{ warning: item.value === 1, error: item.value === 2 }"
      >
        <div class="column">{{ item.address }}</div>
        <div class="column">{{ item.type }}</div>
        <div class="column">{{ item.value }}</div>
      </div>
    </div>
  </BasePanel>
</template>
<script setup lang="ts">
const list = [
  // {
  //   cn: '情报收集',
  //   en: 'INFOMATION GATHERING',
  //   value: '50%',
  // },
  // {
  //   cn: '漏洞入侵',
  //   en: 'vulnerability intrusion',
  //   value: '25%',
  // },
  {
    address: "乐山农商银行",
    type: "高风险交易笔数",
    value: 28
  },
  {
    address: "凉山农商银行",
    type: "中风险交易笔数",
    value: 20
  },
  {
    address: "巴中农商银行",
    type: "低风险交易笔数",
    value: 35
  },
  {
    address: "自贡农商银行",
    type: "低风险交易笔数",
    value: 18
  },
  {
    address: "绵阳农商银行",
    type: "中风险交易笔数",
    value: 22
  },
  {
    address: "南充农商银行",
    type: "中风险交易笔数",
    value: 40
  },
  {
    address: "达州农商银行",
    type: "高风险交易笔数",
    value: 40
  },
  {
    address: "巴中农商银行",
    type: "中风险交易笔数",
    value: 35
  },
  {
    address: "广元农商银行",
    type: "高风险交易笔数",
    value: 32
  },
  {
    address: "雅安农商银行",
    type: "低风险交易笔数",
    value: 40
  }
];
</script>
<style lang="scss" scoped>
.risk-warning {
  display: flex;
  flex-direction: column;
  gap: 4px;
  width: 100%;
  height: 440px;
  overflow: hidden;
  .row {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 40px;
    padding: 10px;
    &:nth-child(odd) {
      background-color: #565857;
      background-image: radial-gradient(#4b4d4c 50%, transparent 0);
      background-size: 4px 4px;
    }
    &.warning {
      background-color: rgba(225, 137, 70, 50%);
      background-image: radial-gradient(rgb(255, 110, 0) 50%, transparent 0);
      background-size: 3px 3px;
      border-color: #ff6e00;
    }

    // &.error {
    //   background-color: rgba(213, 18, 24, 50%);
    //   background-image: radial-gradient(
    //     rgb(213, 18, 24, 100%) 50%,
    //     transparent 0
    //   );
    //   background-size: 3px 3px;
    // }

    // border: 1px solid #888;
  }
}
</style>
