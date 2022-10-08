//!modülü oluştur ve dışarı aktar(ana store.js dosyamızda bunu import ederiz---createStore u burada import etmemize gerek yok)
export default {
  namespaced: true,
  state: {
    itemList: [],
    userList: [],
  },
  mutations: {
    //state içindeki itemList e gelen item ı push et
    setItem(state, item) {
      state.itemList.push(item);
    },
  },
  getters: {
    //state içindeki bilgiyi _itemList adında get et(gönder)
    _itemList: (state) => state.itemList,
  },
};
