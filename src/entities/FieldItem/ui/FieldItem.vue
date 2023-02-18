<script>
export default {
  props: ["label", "name", "error"],
};
</script>

<template>
  <div class="mb-3">
    <label class="form-label" :for="name">{{ label }}</label>
    <slot />
    <div v-if="error" class="invalid-feedback d-block">{{ error }}</div>
  </div>
</template>
