export default {
  path: "/dashboard/",
  redirect: "/dashboard/index",
  meta: {
    icon: "ri:information-line",
    // showLink: false,
    title: "风险交易统计",
    rank: 9
  },
  children: [
    {
      path: "/dashboard/index",
      name: "DATA_RISK",
      component: () => import("@/dashboard/index.vue"),
      meta: {
        title: "风险交易统计"
      }
    }
  ]
} satisfies RouteConfigsTable;
