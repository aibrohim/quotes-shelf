<script>
import { useForm } from "vee-validate";

import FieldItem from "@/entities/FieldItem/ui/FieldItem.vue";
import FieldInput from "@/shared/ui/FieldInput.vue";

import { validationSchema } from "../consts";
import GenresSelect from "@/entities/GenresSelect/ui/GenresSelect.vue";

export default {
  props: ["title"],
  emits: ["onsubmit"],
  setup(_, { emit }) {
    const { errors, values, handleSubmit, useFieldModel, setFieldValue } =
      useForm({
        validationSchema,
        initialValues: {
          body: "",
          author: "",
          genres: [],
        },
      });

    const [body, author] = useFieldModel(["body", "author"]);

    const onSubmit = handleSubmit((values) => {
      emit(values);
    });

    const handlesGenreSelect = (selectedGenres) => {
      setFieldValue("genres", selectedGenres);
    };

    return {
      body,
      author,
      errors,
      values,
      onSubmit,
      handlesGenreSelect,
    };
  },
  components: {
    FieldItem,
    FieldInput,
    GenresSelect,
  },
};
</script>

<template>
  <div class="card">
    <div class="card-body">
      <h1 class="h3 text-left card-title">{{ title }}</h1>
      <form @submit="onSubmit">
        <FieldItem label="Quote" :error="errors.body">
          <FieldInput v-model="body" name="body" />
        </FieldItem>
        <FieldItem label="Author" :error="errors.author">
          <FieldInput name="author" v-model="author" />
        </FieldItem>

        <FieldItem label="Genres" :error="errors.genres">
          <GenresSelect @onchange="handlesGenreSelect" />
        </FieldItem>
        <button type="submit">Submit</button>
      </form>
    </div>
  </div>
</template>
