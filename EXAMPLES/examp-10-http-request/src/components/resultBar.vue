<template>
  <small class="text-green d-flex justify-content-end align-items-center mt-2"
    >{{ itemCount }} adet alınacak ürün vardır..</small
  >
</template>
<script>
export default {
  //   inject: ["itemCount"],
  props: ["itemCount"],
};
</script>
