<template>
  <header
    class="flex items-center w-full px-6 py-4 text-xl text-white bg-black"
  >
    <h1>{{ title }}</h1>
  </header>
</template>

<script>
export default {
  name: "Header",
  props: {
    title: String,
  },
};
</script>

<style lang="scss" scoped></style>
