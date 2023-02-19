<script>
import MainBtn from "@/shared/ui/MainBtn.vue";

export default {
  props: ["isSubmitting"],
  components: { MainBtn },
};
</script>
<template>
  <div class="d-flex justify-content-end">
    <MainBtn type="reset" color="secondary" class="me-2">Reset</MainBtn>
    <MainBtn :disabled="isSubmitting" type="submit" color="primary">{{
      isSubmitting ? "Submitting..." : "Submit"
    }}</MainBtn>
  </div>
</template>
