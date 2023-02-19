<script>
import { ref, computed, watch } from "vue";

import FieldSelect from "@/shared/ui/FieldSelect.vue";
import { allGenres } from "@/shared/constants";

export default {
  props: ["genres"],
  emits: ["onchange"],
  setup(props, { emit }) {
    const selectedGenres = ref(props.genres || []);

    const genresOptions = computed(() =>
      allGenres.map((genre) => ({
        value: genre,
        label: genre,
        disabled: selectedGenres.value.includes(genre),
      }))
    );

    const handleGenreSelect = (genre) =>
      (selectedGenres.value = [...selectedGenres.value, genre]);

    const handleGenreDeselect = (removingGenre) =>
      (selectedGenres.value = selectedGenres.value.filter(
        (genre) => genre !== removingGenre
      ));

    watch(selectedGenres, () => {
      emit("onchange", [...selectedGenres.value]);
    });

    watch(props.genres, () => {
      console.log(props.genres);
      selectedGenres.value = props.genres;
    });

    return {
      genresOptions,
      selectedGenres,
      handleGenreSelect,
      handleGenreDeselect,
    };
  },
  components: {
    FieldSelect,
  },
};
</script>

<template>
  <FieldSelect
    name="genres"
    :options="genresOptions"
    @change="handleGenreSelect($event.target.value)"
  />

  <div class="mt-1">
    <button
      type="button"
      class="btn badge rounded-pill btn-danger me-1"
      v-for="genre in selectedGenres"
      :key="genre"
      @click="handleGenreDeselect(genre)"
    >
      {{ genre }}
    </button>
  </div>
</template>
