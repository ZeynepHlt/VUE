import { createApp } from "vue";
import App from "./App.vue";
import store from "./store"; //store.js i bağladık
import "@/assets/style.css";

const app = createApp(App);
app.use(store); //store.js i kullan
app.mount("#app");
