<template>
    <div class="w-full h-screen flex flex-col bg-gray-200">
        <router-view v-slot="{ Component }">
            <transition name="fade">
                <component :is="Component" />
            </transition>
        </router-view>
    </div>
</template>

<script lang="ts">
</script>
