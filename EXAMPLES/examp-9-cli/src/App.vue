<template>
  <div class="container">
    <h1>Todo List (provide-inject)</h1>
    <AddUser></AddUser>
    <ListUser></ListUser>
  </div>
</template>
<script>
import AddUser from "./components/AddUser.vue";
import ListUser from "./components/ListUser.vue";
export default {
  components: {
    AddUser,
    ListUser,
  },
  //veriler
  data() {
    return {
      provideData: {
        item: "",
        userList: ["fdg"], //provide liste oluşturduk
      },
    };
  },
  provide() {
    return {
      item: this.provideData.item,
      userList: this.provideData.userList, //veriyi userList adında yay
      addItem: this.addItem, //fonksiyonu addItem adında yay
      removeItem: this.removeItem,
    };
  },
  //methodlar
  methods: {
    removeItem(item) {
      console.log(item);

      this.provideData.userList = this.provideData.userList.filter(
        (i) => i !== item
      );
      console.log(this.provideData.userList);
    },
    addItem(item) {
      this.provideData.userList.push(item); //provideData içindeki userlist e ekleme yap
      console.log(this.provideData.userList);
    },
  },
  //dışarıya yayılacak olan provide veri ve fonksiyonlar
};
</script>
