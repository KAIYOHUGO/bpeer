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
            <rounded-button @click="connect()" :disable="isopen"
                >Connect</rounded-button
            >
            <rounded-button @click="fullscreen()">Fullscreen</rounded-button>
        </nav-bar>
    </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import SteamVideo from "@/components/SteamVideo.vue";
import NavBar from "@/components/NavBar.vue";
import RoundedButton from "@/components/RoundedButton.vue";
import { Room } from "@/ts/room";
import ClipboardJS from "clipboard";
var peer: Room;
export default defineComponent({
    data() {
        return {
            isopen: false,
        };
    },
    mounted() {
        peer = new Room(
            document.querySelector("video#stream") as HTMLVideoElement
        );
        peer.onopen = () => {
            this.isopen = true;
        };
        new ClipboardJS(".copy");
        (window as any).peer = peer;
    },
    methods: {
        connect() {
            console.log(this.id);
            peer.dail(this.id);
        },
        fullscreen() {
            peer.fullscreen();
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
