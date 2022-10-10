<template>
  <h2>Home</h2>
  <p>
    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Temporibus
    consectetur nisi vel ducimus, suscipit quo repellat voluptatibus est aperiam
    incidunt quisquam ea vitae. Voluptates rerum recusandae quam sit,
    consequuntur neque.
  </p>
  <input type="text" @keydown.enter="goDetails" />
</template>
<script>
export default {
  //detay sayfasına giderken parametre olarak inputa girilen değeri göndeririz
  methods: {
    goDetails(e) {
      // this.$router.push(`/detay/${e.target.value}`); ---1. yöntem
      //2.yöntem
      this.$router.push({
        name: "detailPage",
        params: {
          userID: e.target.value,
        },
        query: {
          user: "zeynep",
          klan: "abcd",
          type: "perfect",
        },
      });
    },
  },
};
</script>
