<template>
  <div class="dashboard">
    <div class="home-left">
      <AppHeader />
      <OverallAttacksSituation title="总体交易情况" />
      <ThreatLevel title="风险交易等级" en="threat level" />
      <AttackTrend title="交易趋势" en="attack trend" />
      <BugRepair title="已限制风险交易" en="bug repair" />
    </div>
    <div class="home-right">
      <RiskWarning title="网点交易详情" en="risk warning" />
      <GlobalThreats title="风险交易统计" en="risk warning" />
      <ThreatDistribution title="风险交易分布" />
    </div>
    <div class="home-main">
      <!-- <BasicMap /> -->
    </div>
  </div>
</template>
<script setup lang="ts">
console.log("加载地图");
import AppHeader from "./widgets/AppHeader/index.vue";
import OverallAttacksSituation from "./widgets/OverallAttacksSituation/index.vue";
import ThreatLevel from "./widgets/ThreatLevel/index.vue";
import AttackTrend from "./widgets/AttackTrend/index.vue";
import BugRepair from "./widgets/BugRepair/index.vue";
import RiskWarning from "./widgets/RiskWarning/index.vue";
import GlobalThreats from "./widgets/GlobalThreats/index.vue";
import ThreatDistribution from "./widgets/ThreatDistribution/index.vue";
import BasicMap from "./widgets/BasicMap/index.vue";
</script>
<style lang="scss" scoped>
.dashboard {
  position: relative;
  width: 100%;
  height: 100%;
  color: #fff;
  background-color: #333;
  .home-left {
    position: absolute;
    top: 10px;
    left: 10px;
    z-index: 999;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    grid-gap: 10px;
    width: 500px;
    height: calc(100% - 10px);
  }
  .home-right {
    position: absolute;
    top: 15px;
    right: 30px;
    z-index: 999;
    display: flex;
    flex-direction: column;
    grid-gap: 10px;
    width: 500px;
    height: calc(100% - 1000px);
    // background-color: red;
  }
  .home-main {
    position: absolute;
    z-index: 9;
    width: 100%;
    height: 100%;
  }
}
</style>
