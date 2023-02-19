<script setup>
import QuoteCard from "@/features/QuoteCard/ui/QuoteCard.vue";

const quotes = [
  {
    id: 1,
    text: "Yurtimizda islohotlar olib borilmoqda!",
    author: "Hokim Buva",
    addedDate: "2022-12-12",
    modifiedDate: "2023-01-02",
  },
];
</script>
<template>
  <h2 class="h3">Quotes List</h2>
  <QuoteCard v-for="quote in quotes" :key="quote.id" :quote="quote" />
</template>
