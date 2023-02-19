<script>
import MainBtn from "@/shared/ui/MainBtn.vue";
import { RouterLink } from "vue-router";

export default {
  props: ["quote"],
  components: { MainBtn, RouterLink },
};
</script>
<template>
  <div class="card position-relative">
    <div class="card-body">
      <blockquote class="blockquote">
        <p>"{{ quote.text }}"</p>
      </blockquote>
      <p class="fst-italic">- {{ quote.author }}</p>
    </div>

    <div class="me-0 position-absolute top-0 end-0">
      <RouterLink
        :to="/quote/ + quote.id + '/edit'"
        class="btn btn-secondary me-1"
        >Edit</RouterLink
      >
      <MainBtn color="danger">Delete</MainBtn>
    </div>
  </div>
</template>
