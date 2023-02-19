<script>
import FilterQuotes from "@/widgets/FilterQuotes/ui/FilterQuotes.vue";
import QuotesList from "@/widgets/QuotesList/ui/QuotesList.vue";

const handleInputChange = (evt) => console.log(evt.target.value);

export default {
  components: {
    FilterQuotes,
    QuotesList,
  },
  methods: {
    handleInputChange,
  },
  data: () => ({
    options: [
      {
        value: 1,
        label: "hello",
      },
      {
        value: 2,
        label: "mello",
      },
    ],
  }),
};
</script>

<template>
  <div class="row">
    <div class="col-3">
      <FilterQuotes />
    </div>
    <div class="col-9">
      <QuotesList />
    </div>
  </div>
</template>
