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
    <div class="searchbar-wrapper">
    <SearchBarLarge> </SearchBarLarge>
    </div>
    <div style="width: 70%" class="v-sp-1">
      <h2 style="text-align: center;">Búsqueda reciente</h2>
      <ServiceCard> </ServiceCard>
      <ServiceCard> </ServiceCard>
      <ServiceCard> </ServiceCard>
      <ServiceCard> </ServiceCard>
      <ServiceCard> </ServiceCard>
      <ServiceCard> </ServiceCard>
      <ServiceCard> </ServiceCard>
      <ServiceCard> </ServiceCard>
    </div>
  </main>
</template>

<style>
main {
  background-image: url("/vector-world-map-v2.2-blank.png");
  background-repeat: no-repeat;
  background-size: 100% auto;
}

h1 {
  font-size: 6rem;
  font-weight: 700;
  margin-top: 7rem;
  margin-bottom: 0;
  background: linear-gradient(180deg, #243347, #ffffff);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}
p {
  font-size: 1.25rem;
  margin: 0px;
}
.searchbar-wrapper {
  width: 70%;
  margin-top: 2rem;
  margin-bottom: 2rem;
}
</style>

<script>
  export default {
      name: 'HomeView'
  }
</script>