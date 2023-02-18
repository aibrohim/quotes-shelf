<template>
  <select class="form-control" v-bind="props">
    <option v-for="option in options" :key="option.value" :value="option.value">
      {{ option.label }}
    </option>
  </select>
</template>

<script>
export default {
  props: ["options"],
};
</script>
