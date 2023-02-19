<script>
import { watch } from "vue";

import { useForm } from "vee-validate";

import FieldItem from "@/entities/FieldItem/ui/FieldItem.vue";
import FieldInput from "@/shared/ui/FieldInput.vue";
import GenresSelect from "@/entities/GenresSelect/ui/GenresSelect.vue";

import { validationSchema } from "../constants";

export default {
  props: ["title"],
  emits: ["onsubmit"],
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
        body: "",
        author: "",
        genres: [],
      },
    });

    const [body, author] = useFieldModel(["body", "author"]);

    const handlesGenreSelect = (selectedGenres) => {
      setFieldValue("genres", selectedGenres);
    };

    const onSubmit = handleSubmit((values) => {
      emit(values);
    });

    const onReset = () => {
      resetForm();
    };

    watch(values, () => {
      console.log({ ...values });
    });

    return {
      body,
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
        <FieldItem label="Quote" :error="errors.body">
          <FieldInput v-model="body" name="body" />
        </FieldItem>
        <FieldItem label="Author" :error="errors.author">
          <FieldInput name="author" v-model="author" />
        </FieldItem>

        <FieldItem label="Genres" :error="errors.genres">
          <GenresSelect
            @onchange="handlesGenreSelect"
            :genres="values.genres"
          />
        </FieldItem>
        <slot />
      </form>
    </div>
  </div>
</template>
