import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import axios from "axios";
import { appAxios } from "./utils/appAxios"; //appAxios dosyasını import et

const app = createApp(App);
app.use(router);
//!axios u her yerde ayrı ayrı import etmek yerine burada bir kez import ederiz
app.config.globalProperties.axios = axios;
app.config.globalProperties.appAxios = appAxios;
app.mount("#app");
