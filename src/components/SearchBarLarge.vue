<script setup>

</script>

<template>
    <div class="search-bar layout-horizontal layout-center">
        <div class="layout-horizontal">
            <i class="pi pi-search" style="font-size: medium;"/>
            <input type="text" placeholder="Búsqueda">
        </div>
        <div class="layout-horizontal">
            <i class="pi pi-map-marker" style="font-size: medium;"/>
            <input type="text" placeholder="Distrito">
        </div>
        <div class="layout-horizontal">
            <i class="pi pi-calendar" style="font-size: medium;"/>
            <input type="text" placeholder="Fecha">
        </div>
        <button class="btn btn-primary" type="submit">Buscar</button>
    </div>
</template>

<style>
    .pi {
        padding: 0px 0.5rem;
    }
    .search-bar {
        width: 100%;
        padding: 0.5rem;
        background-color: var(--surface-1);
        border-radius: 0.5rem;
    }

</style>

<script>

    export default {
        name: 'SearchBarLarge',
        components: {
        },
    }

</script>