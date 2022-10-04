<template>
  <button @click="updateName">Yeni item ekle</button>
</template>
<script>
export default {
  methods: {
    //state içindeki bilgiyi güncellemek için fonksiyon
    updateName() {
      //gönderilecek data
      const userData = {
        id: new Date().getTime(),
        title: "raf" + new Date().getTime(),
        type: "mobilya",
      };
      //this.$store.state.itemList.push(userData)--önceki kullanım

      //mutations kullanımı
      // this.$store.commit("newItem", userData);

      //actions kullanımı--2 sn sonra ekleme yapar
      this.$store.dispatch("newItem", userData);

      this.$store.state.fullName = "Arif Daban"; //butona basılınca ismi değiştir
    },
  },
};
</script>
