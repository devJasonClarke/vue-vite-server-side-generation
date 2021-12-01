<template>
  <div>
    <h2>about</h2>
    <router-link to="/hope">Hope</router-link>
  </div>
</template>

<script setup>
import { useHead } from "@vueuse/head";

useHead({
  title: "About",
  meta: [
    {
      name: `description`,
      content: `Website description`,
    },
  ],
});
</script>

<style lang="scss" scoped></style>
