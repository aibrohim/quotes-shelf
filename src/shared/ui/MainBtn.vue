<script>
export default {
  props: ["color"],
};
</script>

<template>
  <button
    v-bind="props"
    class="btn"
    :class="color ? 'btn-' + color : 'btn-primary'"
  >
    <slot />
  </button>
</template>
