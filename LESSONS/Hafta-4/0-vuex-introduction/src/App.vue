<template>
  <p>
    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ut, architecto
    eaque non quas consequatur voluptates! Quod officia voluptatum, similique
    tempore eveniet recusandae dolores eos mollitia eaque praesentium id dolorum
    fugit?
  </p>
</template>

<script>
export default {
  name: "App",
  created() {
    console.log(this.$store);
  },
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
