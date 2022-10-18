<!-- !İtem ları kapsayan component--->
<template>
  <div>
    <div class="p-2 grid grid-cols-8 gap-4">
      <!-- !itemlardan 10 tane üret--- items ın içindeki itemları  tekrar bookmarkListitem a props olarak gönder-->
      <bookmarkListitem v-for="item in items" :key="item.id" :item="item"></bookmarkListitem>
    </div>
  </div>
</template>
<script>
import bookmarkListitem from "./bookmarkListitem.vue";
export default {
  components: {
    bookmarkListitem,
  },
  props: {
    items: {
      type: Array, //gelen verinin tipi
      required: true, //gereklilik
      default: () => [], //herhangi bir sorun oluşursa
    },
  },
};
</script>
