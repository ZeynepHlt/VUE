import { createStore } from "vuex";
import createPersistedState from "vuex-persistedstate"; //state te gelen bilgilerin kalıcı olması için
//aşağıdaki iki arkadaş localstroge da olan kullanıcı bilgilerini şifrelemek içindir
import SecureLS from "secure-ls";
var ls = new SecureLS({ isCompression: false });
export default createStore({
  state: {
    //db.js ten obje olarak gelecek olan user
    user: null,
    saltKey: "Booklike12345?!", //şifreleme yaparken kullanılacak key
  },
  plugins: [
    createPersistedState({
      storage: {
        getItem: (key) => ls.get(key),
        setItem: (key, value) => ls.set(key, value),
        removeItem: (key) => ls.remove(key),
      },
    }),
  ],
  mutations: {
    //loginden girilen kullanıcıyı state e at /güncelle
    setUser(state, user) {
      state.user = user;
    },
    //çıkış yaparken state i güncelle tekrar null yap
    logoutUser(state) {
      state.user = null;
    },
  },
  getters: {
    //user null den farklı ise kimliğin doğrulanmış olduğunu söyler. doğrulanmadıysa false döndürür(false/true)
    _isAuthenticated: (state) => state.user != null,
    //mevcut kullanıcıyı verir(password u vermez onu siler)
    _getCurrentUser(state) {
      const user = state.user;
      //optional channing (?) : store içinde password öz. var ise sil yok ise silme
      delete user?.password;
      return user;
    },
    _saltKey: (state) => state.saltKey,
  },
});
