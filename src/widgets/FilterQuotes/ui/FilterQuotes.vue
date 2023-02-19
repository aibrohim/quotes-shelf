<script setup>
import { store } from "@/app/store";

import FieldItem from "@/entities/FieldItem/ui/FieldItem.vue";

import FieldInput from "@/shared/ui/FieldInput.vue";
import FieldSelect from "@/shared/ui/FieldSelect.vue";
import MainBtn from "@/shared/ui/MainBtn.vue";

const sortOptions = [
  { value: "quote:asc", label: "Quote (ascending)" },
  { value: "quote:desc", label: "Quote (descending)" },
  { value: "author:asc", label: "Author (ascending)" },
  { value: "author:desc", label: "Author (descending)" },
  { value: "createdAt:asc", label: "Created Date (ascending)" },
  { value: "createdAt:desc", label: "Created Date (descending)" },
  { value: "modifiedAt:asc", label: "Modified Date (ascending)" },
  { value: "modifiedAt:desc", label: "Modified Date (descending)" },
];

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
    _sort: sort.split(":")[0],
    _order: sort.split(":")[1],
  });
};
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
    <FieldItem name="sort" label="Sort">
      <FieldSelect name="sort" :options="sortOptions" />
    </FieldItem>

    <MainBtn :disabled="$store.state.loading" class="d-block w-100">{{
      $store.state.loading ? "Fetching..." : "Filter"
    }}</MainBtn>
  </form>
</template>
