<script setup>
import NavbarMain from './components/NavbarMain.vue';
</script>

<template>
  <header>
    <NavbarMain/>
  </header>
  <RouterView />
</template>

<style>
</style>

<script>

  export default {
    name: 'App',
    components: {
      NavbarMain,
    },
  }

</script>