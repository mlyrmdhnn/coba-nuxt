<script setup>
const { count, inc, dec } = useCounter()
const { data } = await useFetch('api/hello')
const config = useRuntimeConfig()
console.log(config.public.apiBase)
useHead({
    title: 'Dashboard | Mulya',
    meta: [
        { name: 'content halaman untuk coba', content: 'Halaman coba nuxt' }
    ]
})
</script>
<template>
    ini adalah halaman keren
    <NuxtLink to="/">index</NuxtLink>
    <div>
        <p>{{ count }}</p>
        <div>
            <button @click="inc">+</button>
            <br>
            <button @click="dec">-</button>
        </div>
    </div>
    <pre>{{ data }}</pre>
    <!-- {{ data.message }} -->
</template>