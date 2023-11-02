<template>
  <header>
    <NavbarMain v-if="showNavbar" />
  </header>
  <RouterView v-on:value-received="updateNavbarVisibility" />
</template>

<script>
import NavbarMain from './components/NavbarMain.vue';

export default {
  name: 'App',
  components: {
    NavbarMain,
  },
  data() {
    return {
      showNavbar: true, // Inicialmente muestra el Navbar
    };
  },
  methods: {
    updateNavbarVisibility(value) {
      this.showNavbar = value; // Actualiza la visibilidad del Navbar según el valor recibido
    },
  },
};
</script>
