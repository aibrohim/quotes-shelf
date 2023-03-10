<script>
import { ref, reactive, onMounted } from "vue";
import { useRoute, useRouter } from "vue-router";

import { store } from "@/shared/store";

import QuoteForm from "@/widgets/QuoteForm/ui/QuoteForm.vue";
import EditButtons from "@/widgets/EditButtons/ui/EditButtons.vue";

import LoadingSpinner from "@/shared/ui/LoadingSpinner.vue";

import { axiosInstance } from "@/shared/config/api";

export default {
  setup() {
    const isSubmitting = ref(false);
    const quote = reactive({ quote: null });

    const id = useRoute().params.id;
    const router = useRouter();

    const isLoading = ref(false);

    onMounted(() => {
      isLoading.value = true;
      axiosInstance
        .get("" + id)
        .then((data) => (quote.quote = data.data))
        .finally(() => (isLoading.value = false));
    });

    const handleFormSubmit = (values) => {
      isSubmitting.value = true;
      store
        .dispatch("editQuote", values)
        .then(() => {
          router.push("/");
        })
        .finally(() => {
          isSubmitting.value = false;
        });
    };

    return {
      id,
      quote,
      handleFormSubmit,
    };
  },
  components: { QuoteForm, EditButtons, LoadingSpinner },
};
</script>

<template>
  <LoadingSpinner v-if="!quote.quote" />
  <QuoteForm
    v-if="quote.quote && !isLoading"
    :title="'Edit #' + id"
    @submit="handleFormSubmit"
    :initialValues="quote.quote"
  >
    <EditButtons :isSubmitting="isSubmitting" />
  </QuoteForm>
</template>
