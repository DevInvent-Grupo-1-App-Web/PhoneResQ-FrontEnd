<script setup>
</script>

<template>
    <div class="service-card">
        <div class="layout-horizontal layout-center-vertical">
            <div class="layout-centered" style="width: 10%;">
                <img class="service-icon" src="https://picsum.photos/200/300" alt="Service image">
            </div>
            <div class="layout-vertical" style="width: 75%;">
                <p class="support-center-name">Servicio técnico "Técnicos"</p>
                <a>Más información</a>
            </div>
            <div class="layout-horizontal layout-center" style="width: 15%;">
                <i class="pi pi-star" style="font-size: small;"  v-for="i in [1,2,3,4,5]" v-bind:key="i" />
            </div>
        </div>
    </div>
</template>

<style>
    .service-icon {
        width: 5rem;
        height: 5rem;
        border-radius: 0.5rem;
        align-items: center;
    }
    .pi-star {
        padding: 0px 0.1rem;
    }
</style>

<script>
    
        export default {
            name: 'ServiceCard',
            components: {
            },
        }
</script>