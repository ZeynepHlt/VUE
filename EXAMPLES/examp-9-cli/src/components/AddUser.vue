<template>
  <input v-model="item" type="text" />
  <button @click="addItem(item)" class="red btn">Ekle</button>
</template>
<script>
export default {
  inject: ["item", "addItem"],
};
</script>
