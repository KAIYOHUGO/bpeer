<template>
    <div class="flex items-center w-full h-full">
        <video
            id="stream"
            autoplay
            class="bg-gray-700 rounded-lg w-full h-full pointer-events-none"
        ></video>
    </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
    name: "steam-video",
});
</script>
