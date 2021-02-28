<template>
  <div id="app" class="min-h-screen">
    <Header title="Markdown Editor" />
    <section class="flex px-6 py-4 h-section">
      <Markdown @getHTMLContent="setContent" />
      <Preview :content="content" />
    </section>
  </div>
</template>

<script>
import Header from "@/components/Header";
import Markdown from "@/components/Markdown";
import Preview from "@/components/Preview";
export default {
  name: "App",
  components: {
    Header,
    Markdown,
    Preview,
  },
  data() {
    return {
      content: "",
    };
  },
  methods: {
    setContent(value) {
      this.content = value;
    },
  },
};
</script>
