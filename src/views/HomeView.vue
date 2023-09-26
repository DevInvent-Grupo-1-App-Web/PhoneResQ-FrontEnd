<script setup>
import SearchBarLarge from "../components/SearchBarLarge.vue";
import ServiceCard from "../components/ServiceCard.vue";
import "../assets/theme.css"
</script>

<template>
  <main class="layout-vertical layout-center">
    <div class="layout-vertical layout-center">
      <h1>PhoneResQ</h1>
      <p>
        Tenemos los mejores técnicos en reparación de telefonos de celulares a
        tu disposición
      </p>
    </div>

    <SearchBarLarge> </SearchBarLarge>
    <div style="width: 70%" class="v-sp-1">
      <h2 style="text-align: center;">Búsqueda reciente</h2>
      <ServiceCard> </ServiceCard>
      <ServiceCard> </ServiceCard>
    </div>
  </main>
</template>

<script>
  export default {
      name: 'HomeView'
  }
</script>