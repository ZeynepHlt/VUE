<template>
  <ul>
    <li
      class="d-flex justify-content-between align-items-center"
      v-for="i in userList"
      :key="i"
    >
      <span>{{ i }} </span>
      <button @click="removeItem(i)" class="red">Sil</button>
    </li>
  </ul>
</template>
<script>
export default {
  inject: ["item", "userList", "removeItem"],
};
</script>
