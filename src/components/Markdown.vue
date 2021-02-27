<template>
  <form
    class="w-1/2 h-full max-w-2xl overflow-y-auto border border-black"
    submit.prevent
  >
    <textarea
      name="markdown"
      class="w-full h-full p-4 border-0 outline-none"
      v-model="input"
    ></textarea>
  </form>
</template>

<script>
export default {
  name: "Markdown",
  data() {
    return {
      input: "",
    };
  },
  watch: {
    input: function() {
      this.$emit("getHTMLContent", this.input);
    },
  },
};
</script>
