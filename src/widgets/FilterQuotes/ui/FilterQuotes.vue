<script setup>
import { ref } from "vue";

import { store } from "@/shared/store";

import FieldItem from "@/entities/FieldItem/ui/FieldItem.vue";
import GenresSelect from "@/entities/GenresSelect/ui/GenresSelect.vue";

import FieldInput from "@/shared/ui/FieldInput.vue";
import FieldSelect from "@/shared/ui/FieldSelect.vue";
import MainBtn from "@/shared/ui/MainBtn.vue";

import { sortOptions } from "../constants";

const selectedGenres = ref([]);

const handleFilterSubmit = (evt) => {
  evt.preventDefault();

  const {
    quote_like: { value: quote_like },
    author_like: { value: author_like },
    sort: { value: sort },
  } = evt.target.elements;

  store.dispatch("getQuotes", {
    quote_like,
    author_like,
    genres: selectedGenres.value.join(","),
    _sort: sort.split(":")[0],
    _order: sort.split(":")[1],
  });
};

const handleGenresChange = (newSelectedGenres) =>
  (selectedGenres.value = newSelectedGenres);
</script>

<template>
  <h2 class="h3">Filter</h2>
  <form @submit="handleFilterSubmit">
    <FieldItem name="quote_like" label="Search (by text)">
      <FieldInput name="quote_like" placeholder="Quote text" />
    </FieldItem>
    <FieldItem name="author_like" label="Search (by author)">
      <FieldInput name="author_like" placeholder="Author name" />
    </FieldItem>
    <FieldItem name="genres" label="Sort">
      <GenresSelect name="genres" @onchange="handleGenresChange" />
    </FieldItem>
    <FieldItem name="sort" label="Sort">
      <FieldSelect name="sort" value="createdAt:desc" :options="sortOptions" />
    </FieldItem>

    <MainBtn :disabled="$store.state.loading" class="d-block w-100">{{
      $store.state.loading ? "Fetching..." : "Filter"
    }}</MainBtn>
  </form>
</template>
