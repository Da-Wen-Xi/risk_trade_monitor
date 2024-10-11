export default {
  path: "/data",
  redirect: "/data/data_model",
  meta: {
    icon: "ri:information-line",
    // showLink: false,
    title: "模型广场",
    rank: 2
  },
  children: [
    {
      path: "/data/data_model",
      name: "DATA_MODEL",
      component: () => import("@/views/data/list/data_model.vue"),
      meta: {
        icon: "ep:home-filled",
        title: "模型广场"
      }
    }
  ]
} satisfies RouteConfigsTable;
