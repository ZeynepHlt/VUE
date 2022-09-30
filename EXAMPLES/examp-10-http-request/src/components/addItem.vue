<template>
  <div class="my-2">
    <input
      type="text"
      placeholder="ne alacaksın?"
      @keydown.enter="$emit('onSave', $event)"
    />
  </div>
</template>
<script>
export default {
  //   inject: ["onSave"],
  props: ["onSave"],
};
</script>
