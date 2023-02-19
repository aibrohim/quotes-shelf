<script setup>
import FieldItem from "@/entities/FieldItem/ui/FieldItem.vue";
import FieldInput from "@/shared/ui/FieldInput.vue";
import FieldSelect from "@/shared/ui/FieldSelect.vue";

const genresOptions = [
  {
    value: "science",
    label: "Science",
  },
  {
    value: "comedy",
    label: "Comedy",
  },
];

const sortOptions = [
  { value: "created_date:asc", label: "Created Date (ascending)" },
  { value: "created_date:desc", label: "Created Date (descending)" },
  { value: "modified_date:asc", label: "Modified Date (ascending)" },
  { value: "modified_date:desc", label: "Modified Date (descending)" },
];
</script>

<template>
  <h2 class="h3">Filter</h2>
  <form>
    <FieldItem label="Search (by text)">
      <FieldInput placeholder="Quote text" />
    </FieldItem>
    <FieldItem label="Search (by author)">
      <FieldInput placeholder="Author name" />
    </FieldItem>
    <FieldItem label="By Genre">
      <FieldSelect multiple :options="genresOptions" />
    </FieldItem>
    <FieldItem label="Sort">
      <FieldSelect :options="sortOptions" />
    </FieldItem>
  </form>
</template>
