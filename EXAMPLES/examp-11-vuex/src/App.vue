<template>
  <div class="container mt-5">
    <h2 class="text-center text-green mb-3">Rastgele Şifre Üreticisi</h2>
    <input type="text" v-model="$store.state.pas" />
    <div class="mt-3 d-flex justify-content-between align-items-center">
      <button class="green" @click="uret">Üret</button>
      <button class="red">Kopyala</button>
    </div>
  </div>
</template>
<script>
import { mapGetters } from "vuex";

export default {
  created() {
    console.log(this.pas);
  },
  computed: {
    ...mapGetters(["uret"]),
  },
};
</script>
