<!-- eslint-disable vue/require-v-for-key -->
<!-- eslint-disable vue/no-unused-vars -->

<template>
  <BasePanel title="总体攻击情况">
    <div class="threat-distribution">
      <div v-for="item in list" class="item">
        <div class="item-info">
          <span>{{ item.address }}</span>
          <span>{{ item.value }}</span>
        </div>
        <div class="item-bar">
          <div v-for="item in 20" :class="{ full: item < 4 }" />
        </div>
      </div>
    </div>
  </BasePanel>
</template>
<script setup lang="ts">
const list = [
  {
    address: "梓潼农商银行城北支行",
    value: "10%"
  },
  {
    address: "富顺农商银行双鹿支行",
    value: "9%"
  },
  {
    address: "屏山农商银行书楼支行",
    value: "7%"
  },
  {
    address: "泸县农商银行石马支行",
    value: "8%"
  },
  {
    address: "内江农商银行白马支行",
    value: "10%"
  },
  {
    address: "隆昌农商银行油房支行",
    value: "10%"
  },
  {
    address: "安岳农商银行乾龙支行",
    value: "10%"
  },
  {
    address: "自贡农商银行贡井支行",
    value: "10%"
  }
];
</script>
<style lang="scss" scoped>
.threat-distribution {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 20px 60px;
  .item {
    color: #fff;
    .item-info {
      display: flex;
      justify-content: space-between;
      span:first-child {
        font-size: 16px;

        // font-weight: bold;
      }
      span:last-child {
        font-family: DengJuGengShaHeiTi;
        font-size: 18px;
        font-weight: bold;
      }
    }
    .item-bar {
      display: grid;
      grid-template-columns: repeat(20, 1fr);
      grid-gap: 4px;
      width: 100%;
      height: 10px;
      margin-top: 10px;
      div {
        // background-color: #999;
        background: #454545;
        &.full {
          background-color: #ed772f;
        }
      }
    }

    // background-color: red;
  }
}
</style>
