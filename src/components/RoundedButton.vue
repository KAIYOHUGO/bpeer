<template>
    <button
        class="
            rounded-full
            py-2
            px-4
            m-2
            bg-gray-800
            text-gray-50 text-lg
            hover:bg-blue-900
            transition-colors
            duration-300
            active:bg-blue-600
        "
    >
        <slot></slot>
    </button>
</template>
<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
    name: "rounded-button",
});
</script>
