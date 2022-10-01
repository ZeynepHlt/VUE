<template>
  <p>
    <!-- !store içindeki state içindeki person objesini yazdır -->
    {{ $store.state.user }}
    <!-- !store içindeki state içindeki permission dizisini yazdır -->
    {{ $store.state.permission }}
      <!-- !iterate ederkende $ ile ulaşabiliriz -->
  <ul>
    <li v-for="p in $store.state.permission" :key="p">
      {{ p }}
    </li>
  </ul>
  <ul>
    <li v-for="u in $store.state.userList" :key="u">
      {{ u }}
    </li>
  </ul>
  <!-- !state in içindeki bilgiyi güncelleme -->

  {{$store.state.fullName}}
  <button @click="updateName">İsim değiştir</button>
  </p>

</template>

<script>
export default {
  name: "App",
  created() {
    
    console.log(this.$store.state.person);
    console.log(this.$store.state.theme);
    //normal erişim-filtreleyerek
    console.log(this.$store.state.itemList.filter((i)=>i.type==="mobilya"));
    //getters ile filtreledikten sonra erişim
    console.log(this.$store.getters.woodItems)
    // getters ile password bilgisini silerek erişim
    console.log(this.$store.getters.activeUser)
  },
  methods:{
    //state içindeki bilgiyi güncellemek için fonksiyon
    updateName(){
      this.$store.state.fullName="Arif Daban";
    }
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
