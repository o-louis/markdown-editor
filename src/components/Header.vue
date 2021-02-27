<template>
  <header
    class="w-full h-14 bg-black text-white px-6 flex items-center text-xl"
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
