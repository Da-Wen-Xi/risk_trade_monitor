<template>
  <div id="map" class="map" />
</template>

<script>
import * as echarts from "echarts";
import sichuan from "@/json/sichuan.json";
export default {
  data() {
    return {
      geoCoordMap: {
        成都市: [104.065735, 30.659462],
        绵阳市: [104.741722, 31.46402]
      },
      testData: [
        {
          name: "成都市",
          value: "80"
        },
        {
          name: "绵阳市",
          value: "20"
        }
      ]
    };
  },
  created() {},
  mounted() {
    this.drawMap();
  },
  methods: {
    drawMap() {
      // 判断地图是否渲染
      let myChart = echarts.getInstanceByDom(document.getElementById("map"));
      // 如果渲染则清空地图
      if (myChart != null) {
        myChart.dispose();
      }
      // 初始化地图
      myChart = echarts.init(document.getElementById("map"));

      echarts.registerMap("sichuan", sichuan);

      var option = {
        geo: [
          {
            map: "sichuan",
            zoom: 1.2, // 默认显示级别
            itemStyle: {
              //设置地图板块配置选项
              normal: {
                // 图形的描边颜色
                borderColor: "#55aaff",
                // 描边线宽。
                borderWidth: 1,
                // 柱条的描边类型。
                borderType: "solid",
                areaColor: "#083D7E"
              },
              // // 鼠标放上去后，样式改变
              emphasis: {
                // 图形的描边颜色
                borderColor: "#1DF9FC",
                borderWidth: "2",
                // 阴影色
                areaColor: "#3099E2"
              }
            },
            label: {
              show: false,
              formatter: ""
            }
          }
        ],
        series: [
          // 柱状体的主干
          {
            type: "lines",
            zlevel: 5,
            effect: {
              show: false,
              symbolSize: 5 // 图标大小
            },
            lineStyle: {
              width: 20, // 尾迹线条宽度
              color: "rgb(22,255,255, .6)",
              opacity: 1, // 尾迹线条透明度
              curveness: 0 // 尾迹线条曲直度
            },
            silent: true,
            data: this.lineData()
          },
          // 柱状体的顶部
          {
            type: "scatter",
            coordinateSystem: "geo",
            geoIndex: 0,
            zlevel: 5,
            label: {
              show: true,
              formatter: function (e) {
                return `数值：${e.data[2]}`;
              },
              position: "top"
            },
            symbol: "circle",
            symbolSize: [20, 10],
            itemStyle: {
              color: "rgb(22,255,255, 1)",
              opacity: 1
            },
            silent: true,
            data: this.scatterTopData()
          },
          // 柱状体的底部
          {
            type: "scatter",
            coordinateSystem: "geo",
            geoIndex: 0,
            zlevel: 4,
            label: {
              // 这儿是处理的
              formatter: "{b}",
              position: "bottom",
              color: "#fff",
              fontSize: 12,
              distance: 10,
              show: true
            },
            symbol: "circle",
            symbolSize: [20, 10],
            itemStyle: {
              // color: '#F7AF21',
              color: "rgb(22,255,255, 1)",
              opacity: 1
            },
            silent: true,
            data: this.scatterBottomData()
          },
          // 底部外框
          {
            type: "effectScatter",
            rippleEffect: {
              //涟漪特效相关配置
              period: 4, //动画的周期，秒数，值越小速度越快
              brushType: "stroke", //波纹的绘制方式，可选 'stroke' 和 'fill'
              scale: 2, //动画中波纹的最大缩放比例，值越大波纹越大 4
              color: "rgb(22,255,255, 1)", //涟漪的颜色
              number: 2 //波纹的数量
            },
            coordinateSystem: "geo",
            geoIndex: 0,
            zlevel: 4,
            label: {
              show: false
            },
            symbol: "circle",
            symbolSize: [40, 20],
            itemStyle: {
              color: {
                type: "radial",
                x: 0.5,
                y: 0.5,
                r: 0.5,
                colorStops: [
                  {
                    offset: 0,
                    color: "rgb(22,255,255, 0)" // 0% 处的颜色
                  },
                  {
                    offset: 0.74,
                    color: "rgb(22,255,255, 0)" // 100% 处的颜色
                  },
                  {
                    offset: 0.75,
                    color: "rgb(22,255,255, 1)" // 100% 处的颜色
                  },
                  {
                    offset: 1,
                    color: "rgb(22,255,255, 1)" // 100% 处的颜色
                  }
                ]
              }
            },
            data: this.scatterBottomData()
          }
        ]
      };
      myChart.setOption(option);
    },

    // 动态计算柱形图的高度
    lineMaxHeight() {
      const maxValue = Math.max(...this.testData.map(item => item.value));
      return 0.9 / maxValue;
    },
    // 柱状体的主干
    lineData() {
      let { testData, geoCoordMap } = this;
      return testData.map(item => {
        return {
          coords: [
            geoCoordMap[item.name],
            [
              geoCoordMap[item.name][0],
              geoCoordMap[item.name][1] + item.value * this.lineMaxHeight()
            ]
          ]
        };
      });
    },
    // 柱状体的顶部
    scatterTopData() {
      let { testData, geoCoordMap } = this;
      return testData.map(item => {
        return [
          geoCoordMap[item.name][0],
          geoCoordMap[item.name][1] + item.value * this.lineMaxHeight(),
          item.value
        ];
      });
    },
    // 柱状体的底部
    scatterBottomData() {
      let { testData, geoCoordMap } = this;
      return testData.map(item => {
        return {
          name: item.name,
          value: geoCoordMap[item.name]
        };
      });
    }
  }
};
</script>

<style scoped>
.map {
  width: 800px;
  height: 800px;
  position: relative;
}
</style>
