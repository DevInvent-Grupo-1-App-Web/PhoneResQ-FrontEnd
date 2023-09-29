<script setup>
import NavbarMain from './components/NavbarMain.vue';
</script>

<template>
  <header>
    <NavbarMain v-if="authorized"/>
  </header>
  <RouterView v-on:value-received="authorize();"/>
</template>

<style>
</style>

<script>
  export default {
    name: 'App',
    components: {
      NavbarMain,
    },
    data() {
      return {
        authorized: false
      }
    },
    methods: {
      authorize() {
        this.authorized = true;
      }
    }
  }

</script>