<script>
import FieldInput from "@/shared/ui/FieldInput.vue";
import FieldSelect from "@/shared/ui/FieldSelect.vue";

const handleInputChange = (evt) => console.log(evt.target.value);

export default {
  components: {
    FieldInput,
    FieldSelect,
  },
  methods: {
    handleInputChange,
  },
  data: () => ({
    options: [
      {
        value: 1,
        label: "hello",
      },
      {
        value: 2,
        label: "mello",
      },
    ],
  }),
};
</script>

<template>
  <FieldInput name="title" class="hello" @input="handleInputChange" />
  <FieldSelect
    name="genre"
    class="mello"
    @input="handleInputChange"
    :options="options"
  />
</template>
