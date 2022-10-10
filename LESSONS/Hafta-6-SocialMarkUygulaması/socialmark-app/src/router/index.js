import { createWebHashHistory } from "vue-router";
import { createRouter } from "vue-router";
const routes = [
  {
    name: "HomePage",
    path: "/",
    component: () => import("@/views/homePage.vue"),
  },
  {
    name: "loginPage",
    path: "/login",
    component: () => import("@/views/loginPage.vue"),
  },
  {
    name: "registerPage",
    path: "/register",
    component: () => import("@/views/registerPage.vue"),
  },
  {
    name: "newBookmarkPage",
    path: "/newBookmark",
    component: () => import("@/views/newBookmark.vue"),
  },
];
export default createRouter({
  routes,
  history: createWebHashHistory(),
});
