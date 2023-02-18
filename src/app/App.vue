<script setup>
import { RouterView } from "vue-router";
import PageHeader from "@/widgets/header/ui/PageHeader.vue";
import Container from "@/shared/ui/ElContainer.vue";
</script>

<template>
  <PageHeader />

  <Vueform>
    <TextElement name="hello_world" label="Hello" placeholder="World" />
  </Vueform>

  <Container class="pt-4 pb-4">
    <RouterView />
  </Container>
</template>
