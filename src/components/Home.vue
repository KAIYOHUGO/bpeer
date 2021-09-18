<template>
    <div class="w-full h-full flex flex-col justify-center items-center">
        <h1 class="text-5xl p-10">BPeer</h1>
        <div class="flex flex-col">
            <input
                type="text"
                class="rounded self-center p-2 m-2 text-lg"
                placeholder="ROOM ID"
                v-model="id"
            />
            <rounded-button @click="$router.push(`/r/${id}`)" :disabled="!id">
                Join Peer
            </rounded-button>
            <h1 class="text-2xl text-center">OR</h1>
            <rounded-button @click="$router.push(`/h/${id}`)" :disabled="!id">
                Host Peer
            </rounded-button>
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
