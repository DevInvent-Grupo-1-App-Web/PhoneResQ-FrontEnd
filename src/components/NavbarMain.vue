<script setup>
import Menubar from "primevue/menubar";
import { RouterLink } from "vue-router";
import "primeicons/primeicons.css";
</script>

<template>
  <Menubar id="menubar">
    <template #start>
      <div class="navbar-link-container">
        <RouterLink class="navbar-link" :to="'/inicio'">Inicio</RouterLink>
        <RouterLink class="navbar-link" :to="'/servicios'">Servicios</RouterLink>
        <RouterLink class="navbar-link" :to="'/mensajes'">Mensajes</RouterLink>
        <RouterLink class="navbar-link" :to="'/mi-cuenta'">Mi cuenta</RouterLink>
      </div>
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

<style>

@import url('https://fonts.googleapis.com/css2?family=Almarai&family=Nunito+Sans:opsz@6..12&display=swap');

#menubar {
  background-color: #243347;
  opacity: 0.8;
  font-family: "Almarai", sans-serif;
  border-radius: 0;
  border: none;
  display: flex;
  padding: 0 15% 0 36.75%; /* TO-DO */
  margin-bottom: 3rem;
}

.navbar-link-container {
  font-family: "Almarai", sans-serif;
  height: 2rem;
  display: flex;
  align-items: center;
  float: center;
}

.navbar-link {
  font-size: 0.8rem;
  padding: 0 20px 0 20px;
  color: #ffffff;
  text-decoration: none;
}
</style>
