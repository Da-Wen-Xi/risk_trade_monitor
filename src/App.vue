<template>
  <el-config-provider :locale="currentLocale">
    <router-view />
    <ReDialog />
    <!-- <Dashboard /> -->
  </el-config-provider>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { ElConfigProvider } from "element-plus";
import { ReDialog } from "@/components/ReDialog";
import zhCn from "element-plus/es/locale/lang/zh-cn";
import Dashboard from "@/dashboard/index.vue";

export default defineComponent({
  name: "app",
  components: {
    [ElConfigProvider.name]: ElConfigProvider,
    ReDialog
    // Dashboard
  },
  computed: {
    currentLocale() {
      return zhCn;
    }
  }
});
</script>
