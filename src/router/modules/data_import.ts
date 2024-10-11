export default {
  path: "/data",
  redirect: "/data/data_import",
  meta: {
    icon: "ri:information-line",
    // showLink: false,
    title: "数据集",
    rank: 3
  },
  children: [
    {
      path: "/data/403",
      name: "403",
      component: () => import("@/views/data/data_deal/data_common.vue"),
      meta: {
        title: "通用数据集"
      }
    },
    {
      path: "/error/404",
      name: "404",
      component: () => import("@/views/data/data_deal/data_verify.vue"),
      meta: {
        title: "推理数据集"
      }
    }
  ]
} satisfies RouteConfigsTable;
