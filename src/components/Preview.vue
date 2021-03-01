<template>
  <div
    class="w-1/2 h-full max-w-2xl px-4 overflow-y-auto prose-sm prose border border-black sm:prose lg:prose-lg xl:prose-xl"
    v-html="compiledMarkdown"
  />
</template>

<script>
const marked = require("marked");

export default {
  name: "Preview",
  props: {
    content: String,
  },
  computed: {
    compiledMarkdown() {
      return marked(this.content);
    },
  },
};
</script>
