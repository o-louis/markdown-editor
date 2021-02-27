<template>
  <div class="w-1/2 h-full max-w-2xl p-4 overflow-y-auto border border-black">
    {{ content }}
  </div>
</template>

<script>
export default {
  name: "Preview",
  props: {
    content: String,
  },
};
</script>
