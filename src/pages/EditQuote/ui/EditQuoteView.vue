<script>
import { ref, reactive, onMounted } from "vue";
import { useRoute, useRouter } from "vue-router";

import { store } from "@/shared/store";

import QuoteForm from "@/widgets/QuoteForm/ui/QuoteForm.vue";
import EditButtons from "@/widgets/EditButtons/ui/EditButtons.vue";

import { axiosInstance } from "@/shared/config/api";

export default {
  setup() {
    const isSubmitting = ref(false);
    const quote = reactive({ quote: null });

    const id = useRoute().params.id;
    const router = useRouter();

    onMounted(() => {
      axiosInstance.get("" + id).then((data) => (quote.quote = data.data));
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
  components: { QuoteForm, EditButtons },
};
</script>

<template>
  <QuoteForm
    v-if="quote.quote"
    :title="'Edit #' + id"
    @submit="handleFormSubmit"
    :initialValues="quote.quote"
  >
    <EditButtons :isSubmitting="isSubmitting" />
  </QuoteForm>
</template>
