<script setup>
import NavbarMain from "../components/NavbarMain.vue";
import SearchBarLarge from "../components/SearchBarLarge.vue";
import ServiceCard from "../components/ServiceCard.vue";
import "../assets/theme.css"
</script>

<template>
  <NavbarMain
    :items="[
      { label: 'Inicio', route: '/' },
      { label: 'Historial', route: '/history' },
      { label: 'Notificaciones', route: '/notifications' },
      { label: 'Perfil', route: '/profile' },
      { label: 'Contacto', route: '/contact' },
    ]"
  />
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