<!-- eslint-disable vue/require-v-for-key -->
<template>
  <BasePanel title="总体攻击情况">
    <div class="overall-attacks-situation">
      <div
        v-for="(item, index) in list"
        class="body-item"
        :class="{ active: index === 0 }"
      >
        <div class="item-bg">
          <div class="title-cn">{{ item.cn }}</div>
          <div class="title-en">{{ item.en }}</div>
          <div class="value">{{ item.value }}</div>
        </div>
        <div class="item-bg-1" />
      </div>
    </div>
  </BasePanel>
</template>
<script setup lang="ts">
const list = [
  {
    cn: "已限制风险交易",
    en: "password cracking",
    value: "283491"
  },
  {
    cn: "未限制风险交易",
    en: "privilege escalation",
    value: "1348"
  }
];
</script>
<style lang="scss" scoped>
.overall-attacks-situation {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 10px;
  .body-item {
    position: relative;
    width: 100%;
    cursor: pointer;

    $size-1: 28px;
    &.active,
    &:hover {
      .item-bg {
        color: #fff;
        background-color: rgba(225, 137, 70, 50%);
        background-image: radial-gradient(rgb(255 110 0) 50%, transparent 0);
        border-color: #ff6e00;
        &::before {
          background-color: #ff6e00;
        }
      }
      .item-bg-1 {
        background-color: rgba(225, 137, 70, 50%);
        background-image: radial-gradient(rgb(255 110 0) 50%, transparent 0);
        border-color: #ff6e00;
        &::before {
          background-color: #ff6e00;
        }
      }
    }
    .item-bg {
      position: relative;
      width: 100%;
      height: 100%;
      padding: 6px 6px 2px;
      clip-path: polygon(
        0 0,
        100% 0,
        100% calc(100% - #{$size-1}),
        calc(100% - #{$size-1}) 100%,
        0 100%
      );
      color: #c8c8c8;
      background-color: #565857;
      background-image: radial-gradient(#4b4d4c 50%, transparent 0);
      background-size: 4px 4px;
      border: 2px solid #848381;
      .title-cn {
        font-size: 16px;
        font-weight: bold;
      }
      .title-en {
        font-size: 12px;
        font-weight: lighter;
      }
      .value {
        font-family: DengJuGengShaHeiTi;
        font-size: 30px;
        font-weight: bold;
      }

      $size-1-1: 38px; /* $size-1 * 1.4142; */
      &::before {
        position: absolute;
        top: calc(100% - #{$size-1-1 / 2});
        left: calc(100% - #{$size-1-1 / 2});
        width: $size-1-1;
        height: $size-1-1;
        content: "";
        background-color: #848381;
        transform: rotate(45deg);
      }
    }

    $size-2: 14px;
    .item-bg-1 {
      position: absolute;
      right: 0;
      bottom: 0;
      width: $size-2;
      height: $size-2;
      clip-path: polygon(100% 0, 100% 0, 100% 100%, 0 100%);
      background-color: #565857;
      background-image: radial-gradient(#4b4d4c 50%, transparent 0);
      background-size: 4px 4px;
      border: 2px solid #848381;

      $size-2-2: 18px; /* $size-2 * 1.4142 */
      &::before {
        position: absolute;
        top: calc(-#{$size-2-2 / 2});
        left: calc(-#{$size-2-2 / 2});
        width: $size-2-2;
        height: $size-2-2;
        content: "";
        background-color: #848381;
        transform: rotate(45deg);
      }
    }
  }
}
</style>
