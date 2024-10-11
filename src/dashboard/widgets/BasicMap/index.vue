<template>
  <div ref="container" class="base-map" />
</template>
<script setup>
import { onMounted } from "vue";
import { useMap } from "./hooks/useMap";
const geojsons_1 = ["@/dashboard/geojson/350000.json"];

const { container, scene, bootstrap } = useMap();
onMounted(async () => {
  console.log("加载地图");
  const geojsonData = geojsons_1;
  bootstrap({
    geojsons: [geojsonData]
  });
});
console.log("加载地图");
</script>
<style lang="scss" scoped>
.base-map {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
</style>
