<script setup>
import Menubar from "primevue/menubar";
import { RouterLink } from "vue-router";
import "primeicons/primeicons.css";
</script>

<template>
  <Menubar id="menubar">
    <template #start>
      <div class="navbar-link-container">
        <RouterLink class="navbar-link" :to="'/history'">History</RouterLink>
        <RouterLink class="navbar-link" :to="'/notifications'">Notificaciones</RouterLink>
        <RouterLink class="navbar-link" :to="'/contact'">Contacto</RouterLink>
        <RouterLink class="navbar-link" :to="'/account'">Cuenta</RouterLink>
        <RouterLink class="navbar-link" :to="'/'">Inicio</RouterLink>
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

#menubar {
  background-color: #243347;
  font-family: "Almarai", sans-serif;
  border-radius: 0;
  border: none;
  display: flex;
}

.navbar-link-container {
  font-family: "Almarai", sans-serif;
  height: 2rem;
  display: flex;
  align-items: center;
  float: center;
}

.navbar-link {
  font-size: 1rem;
  padding: 0 20px 0 20px;
  color: #ffffff;
  text-decoration: none;
}

.pi {
  font-size: 1.5rem;
  padding: 0 20px 0 20px;
  color: #ffffff;
}
</style>
