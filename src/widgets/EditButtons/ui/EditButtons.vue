<script setup>
import MainBtn from "@/shared/ui/MainBtn.vue";
</script>
<template>
  <div class="d-flex justify-content-end">
    <MainBtn type="reset" color="danger" class="me-auto">Delete</MainBtn>

    <MainBtn type="reset" color="secondary" class="me-2">Reset</MainBtn>
    <MainBtn type="submit" color="primary">Edit</MainBtn>
  </div>
</template>
