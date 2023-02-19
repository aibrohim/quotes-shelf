<script>
import { watch } from "vue";

import { useForm } from "vee-validate";

import FieldItem from "@/entities/FieldItem/ui/FieldItem.vue";
import FieldInput from "@/shared/ui/FieldInput.vue";
import GenresSelect from "@/entities/GenresSelect/ui/GenresSelect.vue";

import { validationSchema } from "../constants";

export default {
  props: ["title"],
  emits: ["submit"],
  setup(_, { emit }) {
    const {
      errors,
      values,
      handleSubmit,
      useFieldModel,
      setFieldValue,
      resetForm,
    } = useForm({
      validationSchema,
      initialValues: {
        quote: "",
        author: "",
        genres: [],
      },
    });

    const [quote, author] = useFieldModel(["quote", "author"]);

    const handlesGenreSelect = (selectedGenres) => {
      setFieldValue("genres", selectedGenres);
    };

    const onSubmit = handleSubmit((values) => {
      emit("submit", values);
    });

    const onReset = () => {
      resetForm();
    };

    watch(values, () => {
      console.log({ ...values });
    });

    return {
      quote,
      author,
      errors,
      values,
      onSubmit,
      onReset,
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
  <div class="card col-12 col-md-9 col-lg-6 mx-auto">
    <div class="card-body">
      <h1 class="h3 text-left card-title">{{ title }}</h1>
      <form @submit="onSubmit" @reset="onReset">
        <FieldItem name="quote" label="Quote" :error="errors.quote">
          <FieldInput v-model="quote" name="quote" placeholder="Quote text" />
        </FieldItem>
        <FieldItem label="Author" name="author" :error="errors.author">
          <FieldInput name="author" v-model="author" placeholder="Author" />
        </FieldItem>

        <FieldItem label="Genres" name="genres" :error="errors.genres">
          <GenresSelect
            name="genres"
            @onchange="handlesGenreSelect"
            :genres="values.genres"
          />
        </FieldItem>
        <slot />
      </form>
    </div>
  </div>
</template>
