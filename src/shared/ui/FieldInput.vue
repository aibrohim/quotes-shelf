<template>
  <input
    class="form-control"
    v-bind="props"
    :id="name"
    :name="name"
    :value="modelValue"
    @input="$emit('update:modelValue', $event.target.value)"
  />
</template>

<script>
export default {
  props: ["modelValue", "name"],
  emits: ["update:modelValue"],
};
</script>
