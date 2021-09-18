<template>
    <h1 class="text-lg">
        Room ID:
        <span>
            <input
                type="text"
                :value="id"
                disabled
                class="border-2 border-gray-900 rounded w-28"
            />
            <rounded-button :data-clipboard-text="id" class="copy">
                Copy
            </rounded-button>
        </span>
    </h1>
    <steam-video></steam-video>
    <div class="fixed bottom-0 w-full">
        <nav-bar>
            <rounded-button>Close</rounded-button>
            <rounded-button @click="share()">Share</rounded-button>
        </nav-bar>
    </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import { useRoute } from "vue-router";
import SteamVideo from "@/components/SteamVideo.vue";
import NavBar from "@/components/NavBar.vue";
import RoundedButton from "@/components/RoundedButton.vue";
import { Host } from "@/ts/host";
import ClipboardJS from "clipboard";

var peer: Host;

export default defineComponent({
    mounted() {
        peer = new Host(
            this.id,
            document.querySelector("video#stream") as HTMLVideoElement
        );
        new ClipboardJS(".copy");
        (window as any).peer = peer;
    },
    methods: {
        share() {
            peer.shareScreen();
        },
    },
    computed: {
        id() {
            return typeof this.$route.params.id == "string"
                ? this.$route.params.id
                : this.$route.params.id[0];
        },
    },
    components: {
        SteamVideo,
        NavBar,
        RoundedButton,
    },
});
</script>
