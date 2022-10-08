//!modülü oluştur ve dışarı aktar(ana store.js dosyamızda bunu import ederiz---createStore u burada import etmemize gerek yok)
export default {
  namespaced: true,
  state: {
    contactName: "puresol",
    contactAddress: "antalya",
  },
  mutations: {
    //state içindeki contactName verisini gelen name ile değiştir set et(değiştir)
    setItem(state, name) {
      state.contactName = name;
    },
  },
  getters: {
    //state içindeki bilgiyi _contactName adında get et(gönder)
    _contactName: (state) => state.contactName,
  },
};
