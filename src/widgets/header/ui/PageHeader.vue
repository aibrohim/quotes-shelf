<script setup>
import { ref } from "vue";
import { RouterLink } from "vue-router";

import RandomQuote from "@/features/RandomQuote/ui/RandomQuote.vue";

const show = ref(false);

const handleTogglerClick = () => (show.value = !show.value);
</script>

<template>
  <div class="navbar navbar-expand-lg navbar-light bg-light mt-0 pt-3 pb-3">
    <div class="container d-flex">
      <a class="navbar-brand me-auto" href="#"><em>Clever words</em></a>

      <RandomQuote />
      <button
        class="navbar-toggler"
        type="button"
        @click="handleTogglerClick"
        data-bs-toggle="collapse"
        data-bs-target="#navbarTogglerDemo01"
        aria-controls="navbarTogglerDemo01"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <nav
        class="collapse navbar-collapse flex-grow-0"
        :class="{ show: show }"
        id="navbarTogglerDemo01"
      >
        <ul class="navbar-nav mb-2 mb-lg-0">
          <li class="nav-item">
            <RouterLink class="nav-link active" to="/">List</RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink class="nav-link" to="/add">Add</RouterLink>
          </li>
        </ul>
      </nav>
    </div>
  </div>
</template>
