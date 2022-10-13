import { createWebHashHistory } from "vue-router";
import { createRouter } from "vue-router";
import store from "@/store/index"; //kullanıcının kimliğinin doğrulanmış olup olmadığına burada ihtiyacımız olduğu için import ederriz
const routes = [
  {
    name: "homePage",
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
const router = createRouter({
  routes,
  history: createWebHashHistory(),
});
//dışarıdan içeriye (homePage e ) giriş olmamalı aynı zamanda içeriden dışarıya(loginPage ve registerPage) çıkış olmamalıdır. (tarayıcıda /login vs. yazdığımızda gitmemeli)
//Kullanıcı giriş yapmadığı sürece homaPage e ulaşamasın ve onu tekrar login sayfasına atsın
router.beforeEach((to, _, next) => {
  const _isAuthenticated = store.getters._isAuthenticated; //store daki authenticated durumunu alıyoruz
  const authRequiredRoutes = ["homePage"]; //gidilebilecek rotalar yetkilendirme gerekli
  const authNotRequiredRoutes = ["loginPage", "registerPage"]; //yetkilendirme gerekli olanmayan sayfalar. yani giriş yapılmadan da ulaşılacak sayfalar
  if (authNotRequiredRoutes.indexOf(to.name) > -1 && _isAuthenticated) next(false); //eğer gidilecek sayfalar login ve register ise ve giriş yapılmışsa gidemez
  //eğer kullanıcının giriş yapmış olduğu yerlerden birine denk geliyorsa giriş yapmak istediği yer
  if (authRequiredRoutes.indexOf(to.name) > -1) {
    if (_isAuthenticated) next(); //kimlik doğrulanmışmı kontrol et. doğrulanmışsa yoluna devam et
    else next({ name: "loginPage" }); //kimlik doğrulanmamışsa gitme login e yönlendir
  } else {
    next(); //eğer bunlardan biri değilse zaten yoluna devam et
  }
  // console.log("to :>> ", to);
  // console.log("from :>> ", from);
  // next();
});

export default router;
