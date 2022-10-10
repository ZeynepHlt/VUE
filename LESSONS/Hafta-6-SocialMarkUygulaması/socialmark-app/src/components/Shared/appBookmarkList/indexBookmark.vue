<!-- !İtem ları kapsayan component--->
<template>
  <div>
    <div class="p-2 grid grid-cols-8 gap-4">
      <!-- !itemlardan 10 tane üret -->
      <bookmarkListitem v-for="i in 10" :key="i"></bookmarkListitem>
    </div>
  </div>
</template>
<script>
import bookmarkListitem from "./bookmarkListitem.vue";
export default {
  components: {
    bookmarkListitem,
  },
};
</script>
