import { createWebHashHistory, createRouter } from "vue-router";
import { App } from "vue";
const routes = [
  {
    path: "/",
    component: () => import("@/layouts/index.vue"),
    redirect: "/login",
    children: [
      {
        path: "index",
        name: "Index",
        component: () => import("@/components/Test.vue")
      },
      {
        path: "configManage/configList",
        name: "ConfigList",
        component: () => import("@/views/config-manage/index.vue")
      }
    ]
  },
  { path: "/login", name: "Login", component: () => import("@/views/Login/index.vue") }
];
const router = createRouter({
  history: createWebHashHistory(),
  routes
});

export const setupRouter = (app: App<Element>) => {
  app.use(router);
};
export default router;
