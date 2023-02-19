<script>
import MainBtn from "@/shared/ui/MainBtn.vue";
import { RouterLink } from "vue-router";

export default {
  props: ["quote"],
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
      <MainBtn color="danger" class="mt-2 btn-sm">Delete</MainBtn>
    </div>
  </div>
</template>
