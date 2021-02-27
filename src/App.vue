<template>
  <div id="app" class="min-h-screen">
    <Header title="Markdown Editor" />
    <Markdown />
  </div>
</template>

<script>
import Header from "@/components/Header";
import Markdown from "@/components/Markdown";
export default {
  name: "App",
  components: {
    Header,
    Markdown,
  },
};
</script>
