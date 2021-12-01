<template>
  <div>
    <AutoImport />
    <h1>Index</h1>

    <div></div>

    <router-link to="/about">About</router-link>
  </div>
</template>

<script setup>
import { useHead } from "@vueuse/head";

useHead({
  title: "Index",
  meta: [
    {
      name: `description`,
      content: `Website description`,
    },
  ],
});
/* export default {
  computed: {
    ...mapGetters(["todos"]),
  },
}; */
</script>

<style lang="scss" scoped></style>
