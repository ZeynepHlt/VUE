import { createStore } from "vuex";
const store = createStore({
  state: {
    sifre: "",
    pas: "",
    sifreLength: 12,
    char: "0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*ABCDEFGHIJKLMNOPQRSTUVWXYZ",
    random: "",
  },
  // mutations: {
  //   uret(state) {
  //     for (let i = 0; i <= state.sifreLength; i++) {
  //       state.random = Math.floor(Math.random() * state.char.length);
  //       state.sifre += state.char.substring(state.random, state.random + 1);
  //     }
  //     state.pas = state.sifre;
  //   },
  // },
  getters: {
    uret(state) {
      for (let i = 0; i <= state.sifreLength; i++) {
        state.random = Math.floor(Math.random() * state.char.length);
        state.sifre += state.char.substring(state.random, state.random + 1);
      }
      state.pas = state.sifre;

      return state.pas;
    },
  },
});
export default store;
