export default {
  path: "/data/",
  redirect: "/data/data_clean",
  meta: {
    icon: "ri:information-line",
    // showLink: false,
    title: "数据清理",
    rank: 8
  },
  children: [
    {
      path: "/data/data_clean",
      name: "data_clean",
      component: () => import("@/views/data/data_clean.vue"),
      meta: {
        icon: "ep:lollipop",
        title: "数据清理"
      }
    }
  ]
} satisfies RouteConfigsTable;
