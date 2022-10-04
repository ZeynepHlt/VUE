//!createStore fonksiyonunu import et
import { createStore } from "vuex";
//!createStore fonksiyonundan bir obje oluştur
const store = createStore({
  //!state objesinin içerisine istediğin veriyi yazabilirsin
  state: {
    user: {
      name: "zeynep",
      lname: "holat",
      age: 25,
      address: {},
      password: 111134324,
      tc: 11111,
    },
    theme: "dark",
    permission: [1, 2, 3, 4],
    userList: ["zeynep", "arif", "ayşe", "fatma", "hayriye"],
    fullName: "zeynep holat",
    itemList: [
      { id: 1, title: "masa", type: "mobilya" },
      { id: 2, title: "sandalya", type: "mobilya" },
      { id: 3, title: "TV", type: "elektronik" },
      { id: 4, title: "monitor", type: "elektronik" },
      { id: 5, title: "bardak", type: "plastik" },
    ],
  },
  //!set etme
  mutations: {
    //newItem adında bir method oluştur bu state i günceller. gelen item ı ekler
    newItem(state, item) {
      state.itemList.push(item);
    },
  },
  actions: {
    //!asenkron işlem yapmak için contex içinden commit i kullanıp mutations u çalıştır
    newItem({ commit }, item) {
      setTimeout(() => {
        commit("newItem", item);
      }, 2000);
    },
  },
  //!get etme
  getters: {
    //* ahşap olan öğeleri state içindeki itemList te filtrele ve app.vue içinde woodItems adında kullan
    woodItems: (state) => state.itemList.filter((i) => i.type === "mobilya"),
    //*user bilgilerini state içinden çekip user içine at daha sonra user üzerindeki password u sil ve tekrar user ı döndür
    activeUser(state) {
      const user = {
        ...state.user,
      };
      delete user.password; //user içindeki password ve tc bilgilerini sil
      delete user.tc;
      return user;
    },
  },
});
export default store; //!oluşturduğun sabiti dışarı export et
