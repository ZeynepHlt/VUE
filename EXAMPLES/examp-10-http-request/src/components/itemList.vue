<template>
  <ul v-if="itemList.length > 0">
    <li
      v-for="item in itemList"
      :key="item.id"
      class="d-flex justify-content-between align-items-center"
    >
      <span>{{ item.title }}</span>
      <button @click="$emit('onDelete', item)" class="sm red">Sil</button>
    </li>
  </ul>
  <div v-else class="bg-blue text-white">Herhangi bir ürün eklemediniz...</div>
</template>
<script>
export default {
  //   inject: ["itemList", "onDelete"],
  props: ["itemList"],
};
</script>
