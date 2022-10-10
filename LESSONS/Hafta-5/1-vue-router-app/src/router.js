import { createWebHashHistory } from "vue-router";
import { createRouter } from "vue-router";
const routes = [
  {
    name: "homePage",
    path: "/",
    component: () => import("@/views/homePage.vue"),
  },
  {
    name: "newBookmark",
    path: "/new",
    component: () => import("@/views/newBookmark.vue"),
  },
];
const router = createRouter({
  routes,
  history: createWebHashHistory(),
});
export default router;
