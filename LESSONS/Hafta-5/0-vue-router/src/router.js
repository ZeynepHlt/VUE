import { createRouter } from "vue-router";
import homeCmp from "@/views/homeApp";
import aboutCmp from "@/views/aboutApp";
import detailsCmp from "@/views/detailsApp";
import { createWebHashHistory } from "vue-router";
//!routes dizisi içerisinde gideceğimiz componentleri ve path lerini tanımlarız. componentleri kullanabilmek için import etmemiz gerekir
const routes = [
  {
    name: "homePage",
    path: "/",
    component: homeCmp,
  },
  {
    name: "aboutPage",
    path: "/hakkimda",
    component: aboutCmp,
  },
  //aşağıdaki component id li bilgiye bakar
  {
    name: "detailPage",
    path: "/detay/:userID",
    component: detailsCmp,
  },
];
//! router adında bir değişken oluşturup createStore da olduğu gibi fonksiyon içinde tanımlıyoruz
const router = createRouter({
  routes,
  history: createWebHashHistory(),
});
export default router;
