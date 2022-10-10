<template>
  <h1>Details</h1>

  <p>userID: {{ $route.params.userID }}</p>
  <p>
    query içindeki değerler: {{ $route.query.user }} ,{{ $route.query.klan }}
  </p>
  <button class="blue" @click="goBack">Anasayfaya Geri Dön</button>
</template>
<script>
export default {
  created() {
    //router hakkında bilgilere $route ile erişebiliriz
    console.log(this.$route);
  },
  methods: {
    //anasayfaya dönmek için method
    goBack() {
      this.$router.push("/");
    },
  },
};
</script>
