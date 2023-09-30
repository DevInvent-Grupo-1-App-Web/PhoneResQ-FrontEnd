<script setup>
</script>

<template>
    <div class="service-card">
        <div class="layout-horizontal layout-center-vertical">
            <div class="layout-centered">
                <img class="service-icon" src="https://picsum.photos/200/300" alt="Service image">
            </div>
            <div class="layout-vertical" style="width: 75%;">
                <p class="support-center-name">Servicio técnico "Técnicos"</p>
                <a style="font-size: small;" href="/reviewtechnician">Más información</a>
            </div>
            <div class="star-container layout-horizontal layout-center">
                <i class="pi pi-star" style="font-size: small;"  v-for="i in [1,2,3,4,5]" v-bind:key="i" />
            </div>
        </div>
    </div>
</template>

<style>
    .support-center-name {
        margin: 0px;
    }
    .service-icon {
        width: 3rem;
        height: 3rem;
        border-radius: 100%;
        align-items: center;
        margin: 1rem;
    }
    .pi-star {
        padding: 0px 0.1rem;
    }
    .service-card {
        width: 100%;
        border-radius: 1rem;
        background-color: #F6F6FE;
        justify-content: space-around;
        box-sizing: border-box;
        margin: 0.5rem 0px;
        border: 1px solid #888888;
    }
    div>a {
        color: #7C8DB0;
    }
</style>

<script>
    
        export default {
            name: 'ServiceCard',
            components: {
            },
            methods: {
            }
        }
</script>