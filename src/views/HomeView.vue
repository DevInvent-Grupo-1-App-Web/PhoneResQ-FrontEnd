<script setup>
import NavbarMain from '../components/NavbarMain.vue';

</script>

<template>
  <NavbarMain :items="[
    { label: 'Inicio', route: '/' },
    { label: 'Historial', route: '/about' },
    { label: 'Notificaciones', route: '/notifications'},
    {label: 'Perfil', route: '/profile'},
    {label: 'Contacto', route: '/contact'}
  ]" />
</template>

<script>

export default {
  name: 'HomeView',
  components: {
    NavbarMain
  },
}

</script>