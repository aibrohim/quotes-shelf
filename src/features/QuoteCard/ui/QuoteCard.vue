<script>
import { ref } from "vue";
import { RouterLink } from "vue-router";

import { store } from "@/app/store";
import MainBtn from "@/shared/ui/MainBtn.vue";

export default {
  props: ["quote"],
  setup(props) {
    const isDeleting = ref(false);

    const handleDeleteClick = () => {
      const quoteId = props.quote.id;
      isDeleting.value = true;
      store.dispatch("deleteQuotes", quoteId).finally(() => {
        isDeleting.value = false;
      });
    };

    console.log(isDeleting.value);

    return {
      isDeleting,
      handleDeleteClick,
    };
  },
  components: { RouterLink, MainBtn },
};
</script>
<template>
  <div class="card position-relative mb-2">
    <div class="card-body">
      <RouterLink :to="/quote/ + quote.id + '/edit'">
        <blockquote class="blockquote">
          <p>"{{ quote.quote }}"</p>
        </blockquote>
      </RouterLink>
      <p class="fst-italic">- {{ quote.author }}</p>
      <div class="d-flex">
        <span
          class="badge bg-primary me-1"
          v-for="genre in quote.genres"
          :key="genre"
          >{{ genre }}</span
        >
      </div>

      <MainBtn
        :disabled="isDeleting"
        @click="handleDeleteClick"
        color="danger"
        class="mt-2 btn-sm"
        >{{ isDeleting ? "Deleting..." : "Delete" }}</MainBtn
      >
    </div>
  </div>
</template>
