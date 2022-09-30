//!createStore fonksiyonunu import et
import { createStore } from "vuex";
//!createStore fonksiyonundan bir obje oluştur
const store = createStore({
  //!state objesinin içerisine istediğin veriyi yazabilirsin
  state: {
    person: {
      name: "zeynep",
      lname: "holat",
      age: 25,
    },
    theme: "dark",
    permission: [1, 2, 3, 4],
  },
});
export default store; //!oluşturduğun sabiti dışarı export et
