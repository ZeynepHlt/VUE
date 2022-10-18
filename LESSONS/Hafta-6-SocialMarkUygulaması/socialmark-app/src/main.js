import { createApp } from "vue";
import App from "./App.vue";
//router,store,axios u import ettik
import router from "./router";
import store from "./store";
import axios from "axios";
//style dosyamızı import ettik
import "@/assets/style.css";

//Application seviyesinde kullanılacak olan componentleri bu şekilde import ediyoruz
import appHeader from "@/components/Shared/appHeader.vue";
import appBookmarkList from "@/components/Shared/appBookmarkList/indexBookmark.vue";

const app = createApp(App);
//application seviyesindeki componentler
app.component("appHeader", appHeader);
app.component("appBookmarkList", appBookmarkList);
//axios u import ettik
app.config.globalProperties.axios = axios;
//vue-router kullanmak için
app.use(router);
//vuex-store kullanmak için
app.use(store);
app.mount("#app");
