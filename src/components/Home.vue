<template>
    <div class="h-full w-full">
        <div
            id="bg"
            class="
                bg-no-repeat bg-contain bg-center
                filter
                blur-lg
                opacity-50
                w-full
                h-full
            "
        ></div>
        <div
            class="
                w-full
                h-full
                flex flex-col
                justify-center
                items-center
                absolute
                top-0
            "
        >
            <h1 class="text-5xl p-10">BPeer</h1>
            <div class="flex flex-col">
                <input
                    type="text"
                    class="rounded self-center p-2 m-2 text-lg"
                    placeholder="ROOM ID"
                    v-model="id"
                />
                <rounded-button
                    @click="$router.push(`/r/${id}`)"
                    :disabled="!id"
                >
                    Join Peer
                </rounded-button>
                <h1 class="text-2xl text-center">OR</h1>
                <rounded-button
                    @click="$router.push(`/h/${id}`)"
                    :disabled="!id"
                >
                    Host Peer
                </rounded-button>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import RoundedButton from "@/components/RoundedButton.vue";

export default defineComponent({
    data() {
        return {
            id: "",
        };
    },
    components: {
        RoundedButton,
    },
});
</script>
<style lang="sass" scoped>
#bg
    background-image: url("/favicon.svg")
</style>