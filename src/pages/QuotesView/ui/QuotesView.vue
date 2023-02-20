<script>
import { onMounted } from "vue";

import FilterQuotes from "@/widgets/FilterQuotes/ui/FilterQuotes.vue";
import QuotesList from "@/widgets/QuotesList/ui/QuotesList.vue";

import { store } from "@/shared/store";
import LoadingSpinner from "@/shared/ui/LoadingSpinner.vue";

export default {
  components: {
    FilterQuotes,
    QuotesList,
    LoadingSpinner,
  },
  setup() {
    onMounted(() => {
      if (!store.state.quotes) {
        store.dispatch("getQuotes");
      }
    });
  },
};
</script>

<template>
  <LoadingSpinner v-if="$store.state.loading" />
  <div v-else class="row">
    <div class="col-12 col-lg-3 mb-3">
      <FilterQuotes />
    </div>
    <div class="col-12 col-lg-9">
      <QuotesList />
    </div>
  </div>
</template>
