<!-- !anasayfada header,sidebar -->
<template>
  <appHeader></appHeader>
  <div class="flex flex-row">
    <sideBar></sideBar>
    <appBookmarkList></appBookmarkList>
  </div>
</template>

<script>
import sideBar from "@/components/Home/sideBar.vue";

export default {
  components: {
    sideBar,
  },
};
</script>
