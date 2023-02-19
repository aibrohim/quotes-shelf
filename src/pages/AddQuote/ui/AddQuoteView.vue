<script setup>
import { ref } from "vue";

import { store } from "@/app/store";

import QuoteForm from "@/widgets/QuoteForm/ui/QuoteForm.vue";
import AddButtons from "@/widgets/AddButtons/ui/AddButtons.vue";
import { useRouter } from "vue-router";

const isSubmitting = ref(false);

const router = useRouter();

const handleFormSubmit = (values) => {
  isSubmitting.value = true;
  store
    .dispatch("addQuote", values)
    .then(() => {
      router.push("/");
    })
    .finally(() => {
      isSubmitting.value = false;
    });
};
</script>

<template>
  <QuoteForm title="Add Quote" @submit="handleFormSubmit"
    ><AddButtons
  /></QuoteForm>
</template>
