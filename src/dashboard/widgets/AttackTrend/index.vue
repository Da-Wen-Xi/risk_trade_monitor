<template>
  <BasePanel>
    <div ref="container" class="attack-trend" />
  </BasePanel>
</template>
<script setup lang="ts">
import { onMounted } from "vue";
import { map, max, min, sampleSize, range } from "lodash";
import useEcharts from "@/dashboard/hooks/useEcharts";

const { container, echarts, setOption } = useEcharts();

const generateOptions = (sources: any[][]) => {
  const minValue = map(sources, source => min(source));
  const maxValue = map(sources, source => max(source));
  return {
    tooltip: {
      trigger: "axis",
      backgroundColor: "#2f2f48",
      borderColor: "#2f2f48",
      textStyle: {
        color: "#fff"
      }
    },
    grid: {
      left: "1%",
      right: "3%",
      bottom: "0%",
      top: "3%",
      containLabel: true
    },
    xAxis: {
      type: "category",
      boundaryGap: false,
      axisLine: {
        show: false
      },
      axisTick: {
        show: false
      },
      axisLabel: {
        color: "#c8c8c8",
        margin: 20,
        fontFamily: "DengJuGengShaHeiTi"
      },
      data: ["11:00", "12:00", "13:00", "14:00", "15:00", "16:00", "17:00"]
    },
    yAxis: {
      type: "value",
      //   show: false,
      axisLabel: {
        color: "#c8c8c8",
        fontFamily: "DengJuGengShaHeiTi"
      },
      splitLine: {
        lineStyle: {
          color: "#c8c8c830",
          type: "dashed"
        }
      }
    },
    series: [
      {
        name: "今天",
        type: "line",
        symbol: "none",
        smooth: true,
        itemStyle: {
          color: "#00CBFE"
        },
        lineStyle: {
          normal: {
            width: 2,
            color: "#df5e32"
            // color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
            //   { offset: 0, color: '#32fedb' },
            //   { offset: 1, color: '#319cfc' },
            // ]),
          }
        },
        data: sources[0]
      },
      {
        name: "昨天",
        type: "line",
        symbol: "none",
        smooth: true,
        itemStyle: {
          color: "#c8c8c8"
        },
        lineStyle: {
          normal: {
            width: 2,
            color: "#c8c8c8"
          }
        },
        data: sources[1]
      },
      {
        name: "昨天",
        type: "line",
        symbol: "none",
        smooth: true,
        itemStyle: {
          color: "#c8c8c8"
        },
        lineStyle: {
          normal: {
            width: 2,
            color: "#c8c8c8"
          }
        },
        data: sources[1]
      },
      {
        name: "昨天",
        type: "line",
        symbol: "none",
        smooth: true,
        itemStyle: {
          color: "#c8c8c8"
        },
        lineStyle: {
          normal: {
            width: 2,
            color: "#c8c8c8"
          }
        },
        data: sources[2]
      },
      {
        name: "昨天",
        type: "line",
        symbol: "none",
        smooth: true,
        itemStyle: {
          color: "#c8c8c8"
        },
        lineStyle: {
          normal: {
            width: 2,
            color: "#c8c8c8"
          }
        },
        data: sources[3]
      }
    ]
  };
};

onMounted(() => {
  setTimeout(() => {
    const sources = [
      sampleSize(range(1000, 200), 7),
      sampleSize(range(1000, 200), 7),
      sampleSize(range(1000, 200), 7),
      sampleSize(range(1000, 200), 7)
    ];
    const options = generateOptions(sources);
    setOption(options);
  }, 1000);
});
</script>
<style lang="scss" scoped>
.attack-trend {
  width: 100%;
  height: 200px;
  padding: 10px;

  //   background-color: #565857;
  //   background-image: radial-gradient(#4b4d4c 50%, transparent 0);
  background-size: 4px 4px;
}
</style>
