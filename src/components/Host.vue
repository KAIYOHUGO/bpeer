<template>
    <div class="h-full w-full">
        <nav-bar class="fixed top-0 w-full">
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
        </nav-bar>
        <steam-video></steam-video>
        <div class="fixed bottom-0 w-full">
            <nav-bar>
                <rounded-button @click="close()">Close</rounded-button>
                <rounded-button @click="share()">Share</rounded-button>
            </nav-bar>
        </div>
    </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
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
        peer.onopen = () => {
            if (!peer.peer.id) this.close();
        };
        (window as any).peer = peer;
    },
    methods: {
        share() {
            peer.shareScreen();
        },
        close() {
            peer.close();
            this.$router.push("/");
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
