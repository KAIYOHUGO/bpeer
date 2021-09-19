<template>
    <div class="absolute right-0 top-0 flex w-full h-full justify-center p-16">
        <div>
            <video
                id="stream"
                autoplay
                class="bg-gray-700 rounded-lg h-full pointer-events-none"
            ></video>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
    name: "steam-video",
});
</script>
<style lang="sass" scoped>
video
//     animation: loading 1s linear infinite both

// @keyframes loading {
//     from
//         background-position-x: 0
//     to
//         background-position-x: 100%
// }
</style>