<template>
    <div class="w-full h-full flex flex-col justify-center items-center">
        <h1 class="text-5xl p-10">Oops 404</h1>
        <h1 class="text-2xl text-center p-10">{{ randomString }}</h1>
        <rounded-button @click="$router.push('/')"> 溝杯 </rounded-button>
    </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import RoundedButton from "@/components/RoundedButton.vue";
import { randomString } from "@/ts/random";
export default defineComponent({
    data() {
        return {
            randomString:
                randomString[Math.floor(Math.random() * randomString.length)],
        };
    },
    components: {
        RoundedButton,
    },
});
</script>
