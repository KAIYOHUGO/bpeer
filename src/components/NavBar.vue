<template>
  <nav class="w-full flex justify-center bg-gray-50"><slot></slot></nav>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "nav-bar",
});
</script>
