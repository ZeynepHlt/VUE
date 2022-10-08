import { createStore } from "vuex";
//!modülleri import et
import contact from "./modules/contact";
import taskManagement from "./modules/taskManagement";
const store = createStore({
  state: {
    mainName: "zeynep",
  },
  //!modules objesi içinde de tanımla
  modules: {
    //yeni bir isim verilebilir yada modülün kendi ismi kullanılabilir
    musteri: contact,
    taskManagement,
  },
});
export default store;
