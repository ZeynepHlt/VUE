<template>
  <ModalApp>
    <!-- !slot ile html bilgi aktarımı -->
    <template #title>
      <h2>Slot ile gelen başlık bilgisi</h2>
    </template>
    <template #content>
      <p class="text-green">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis
        voluptas quos hic blanditiis nihil accusantium nulla? Autem, dolorum
        provident? Repellendus pariatur ut itaque exercitationem in dolor ad
        ducimus, quas totam.
      </p>
    </template>
    <template #default> default olarak görünecek metin </template>
    <template #asd>ikinci metin</template>
  </ModalApp>
</template>
<script>
import ModalApp from "./components/ModalApp.vue";
export default {
  components: {
    ModalApp,
  },
};
</script>
