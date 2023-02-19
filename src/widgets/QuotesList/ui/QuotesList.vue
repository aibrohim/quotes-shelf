<script setup>
import QuoteCard from "@/features/QuoteCard/ui/QuoteCard.vue";
</script>
<template>
  <h2 class="h3">Quotes List</h2>
  <QuoteCard
    v-for="quote in $store.state.quotes"
    :key="quote.id"
    :quote="quote"
  />
</template>
