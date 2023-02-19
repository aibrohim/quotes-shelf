<script>
import FilterQuotes from "@/widgets/FilterQuotes/ui/FilterQuotes.vue";
import QuotesList from "@/widgets/QuotesList/ui/QuotesList.vue";

import { store } from "@/app/store";
import { onMounted } from "vue";

export default {
  components: {
    FilterQuotes,
    QuotesList,
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
  <div class="row">
    <div class="col-12 col-lg-3 mb-3">
      <FilterQuotes />
    </div>
    <div class="col-12 col-lg-9">
      <QuotesList />
    </div>
  </div>
</template>
