<template>
  <header>
    <NavbarMain v-if="showNavbar && !isTechnician" />
    <NavbarTechnician v-if="showNavbar && isTechnician" />
  </header>
  <RouterView v-on:value-received="updateNavbarVisibility" />
  
</template>

<script>
import NavbarMain from './components/NavbarMain.vue';
import NavbarTechnician from './components/NavbarTechnician.vue';


export default {
  name: 'App',
  components: {
    NavbarMain,
    NavbarTechnician,

  },
  data() {
    return {
      isTechnician: false, // Asume que el usuario no es un técnico al principio
      isLoggedIn: false, // Asume que el usuario no ha iniciado sesión al principio
      showNavbar: true, // Inicialmente muestra el Navbar
    };
  },
  methods: {
  updateNavbarVisibility(value) {
    this.showNavbar = value; // Actualiza la visibilidad del Navbar según el valor recibido
  },
}

};
</script>
