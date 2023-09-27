<script setup>
import Menubar from "primevue/menubar";
import { RouterLink } from "vue-router";
import "primeicons/primeicons.css";
</script>

<template>
  <Menubar>
    <template #start>
      <div class="center-links">
        <RouterLink :to="'/'">Inicio</RouterLink>
        <RouterLink :to="'/history'">History</RouterLink>
        <RouterLink :to="'/notifications'">Notificaciones</RouterLink>
        <RouterLink :to="'/contact'">Contacto</RouterLink>
        <RouterLink :to="'/account'">Cuenta</RouterLink>
      </div>
    </template>

    <template #end>
      <i class="pi pi-search" />
      <i class="pi pi-user" />
    </template>
  </Menubar>
</template>

<script>
export default {
  name: "NavbarMain",
  components: {
    Menubar,
    RouterLink,
  },
};
</script>

<style scoped>

@import url('https://fonts.googleapis.com/css2?family=Almarai&family=Nunito+Sans:opsz@6..12&display=swap');

#navbar-logo {
  width: auto;
  height: 2rem;
}


.pi {
  font-size: 1.5rem;
  padding: 0 20px 0 20px;
}
</style>
