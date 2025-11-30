<script setup lang="ts">
function enableCustomLayout() {
    setPageLayout('keren')
}
function enableDefaultLayout() {
    setPageLayout('default')
}
definePageMeta({
    layout: false
})
</script>

<template>
    Welcome to index page
    <br>
    <NuxtLink to="/keren">Keren</NuxtLink>
    <br>
    <AppAlert>
        This is an auto-imported component.
    </AppAlert>
    <button @click="enableCustomLayout">Ganti layout</button>
    <button @click="enableDefaultLayout">Default Layout</button>

</template>