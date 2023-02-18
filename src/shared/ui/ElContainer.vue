<script>
export default {
  props: {
    fluid: String,
  },
};
</script>
<template>
  <div v-bind="props" :class="fluid ? 'container-fluid' : 'container'">
    <slot />
  </div>
</template>
