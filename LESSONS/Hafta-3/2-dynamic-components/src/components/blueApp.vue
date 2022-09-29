<template>
  <h3 class="bg-blue text-white">Blue Component</h3>
  <input type="text" />
</template>

<script>
export default {
  mounted() {
    console.log("BLUE Mounted");
  },
  activated() {
    console.log("BLUE Activated");
  },
  deactivated() {
    console.log("BLUE deActivated");
  },
};
</script>
