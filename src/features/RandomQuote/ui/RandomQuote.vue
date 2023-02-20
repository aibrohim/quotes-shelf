<script setup>
import MainBtn from "@/shared/ui/MainBtn.vue";

import { store } from "@/shared/store";

import { ref } from "vue";

const isAdding = ref(false);

const handleBtnClick = () => {
  isAdding.value = true;
  store
    .dispatch("addQuote", {
      quote: "Random Quote",
      author: "Someone",
      genres: ["Motivation"],
    })
    .finally(() => {
      isAdding.value = false;
    });
};
</script>

<template>
  <MainBtn @click="handleBtnClick" :disabled="isAdding" class="ms-auto me-2">{{
    isAdding ? "Generating..." : "Generate Random Quote"
  }}</MainBtn>
</template>
