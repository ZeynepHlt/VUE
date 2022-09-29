<template>
  <div class="container">
    <div class="d-flex justify-content-between aling-items-center">
      <button class="red" @click="activeComponent = 'redApp'">Red</button>
      <button class="green" @click="activeComponent = 'greenApp'">Green</button>
      <button class="blue" @click="activeComponent = 'blueApp'">Blue</button>
    </div>
    <!-- <redApp v-if="activeComponent"></redApp>
    <greenApp v-if="activeComponent"></greenApp>
    <blueApp v-if="activeComponent"></blueApp> -->
    {{ activeComponent }}
    <!-- !<component> componentler içerisinde dolanır ve active olan componenti bulur -->
    <!-- !<keep-alive> componentler arası değişimde mounted olduğu için önceki componentte yapılan değişikliik kaydedilmediği için değişikliği kaydetmemize yarar fakat mounted i çalıltırmaz bunun için kendine özel 2 adet life cycle hook u bulunur -->
    <keep-alive>
      <component :is="activeComponent" />
    </keep-alive>
  </div>
</template>

<script>
import redApp from "@/components/redApp.vue";
import greenApp from "@/components/greenApp.vue";
import blueApp from "@/components/blueApp.vue";

export default {
  components: {
    redApp,
    greenApp,
    blueApp,
  },
  data() {
    return {
      activeComponent: "redApp", //varsayılan olarak red butonlarla değişecek değer
    };
  },
};
</script>
