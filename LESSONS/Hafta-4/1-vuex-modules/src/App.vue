<template>
  <!-- !ana store içinden erişim -->
  <p>{{ $store.state.mainName }}</p>
  <!-- !modül store içinden erişim -->
  <p>{{ $store.state.musteri.contactName }}</p>
  <pre>
    <!-- !mapGetters ile aldığımız veriyi yazdırdık -->
    {{ musteriAdi }}
  </pre>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "App",
  created() {
    //modüllerin içinde bulunan getters ve verilere erişim(bunu mapGetters ilede yapabiliriz)
    console.log("store :>> ", this.$store.getters["musteri/_contactName"]);
  },
  computed: {
    ...mapGetters({
      // veriyi alırken modülü belirterek alıyoruz
      musteriAdi: "musteri/_contactName",
    }),
  },
};
</script>
