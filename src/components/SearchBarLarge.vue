<script setup>

</script>

<template>
    <div class="search-bar layout-horizontal layout-center">
        <div class="param-box layout-horizontal">
            <i class="pi pi-search"/>
            <input type="text" placeholder="Búsqueda">
        </div>
        <div class="param-box layout-horizontal">
            <i class="pi pi-map-marker"/>
            <input type="text" placeholder="Distrito">
        </div>
        <div class="param-box layout-horizontal">
            <i class="pi pi-calendar"/>
            <input type="date" placeholder="Fecha">
        </div>
        <button class="search-button btn btn-primary" type="submit">Buscar</button>
    </div>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap');
    .param-box {
            padding: 0px;
            width: 30%;
            background-color: #ffffff;
            border: 1px solid #e5e5e5;
    }
    input {
        font-family: 'Poppins', sans-serif;
        width: 100%;
        font-size: 1rem;
        padding: 0px 1rem;
        border: 0px;
        color: #c0c0c0;
    }
    .search-button {
        padding: 0px;
        margin: 0px;
        width: 10%;
        height: 100%;
        display: block;
        font-family: 'Poppins', sans-serif;
        background-color: #243347;
        color: white;
        font-size: 1rem;
    }
    .pi {
        font-size: medium;
        padding: 0px 1rem;
        width: auto;
        box-sizing: border-box;
        align-self: center;
        color: #c0c0c0;
    }
    .search-bar {
        width: 100%;
        height: 2.5rem;
        margin: 0px;
        border-radius: 0.2rem;
        font-family: 'Poppins', sans-serif;
        border: 1px solid #e5e5e5;
    }

</style>

<script>

    export default {
        name: 'SearchBarLarge',
        components: {
        },
    }

</script>