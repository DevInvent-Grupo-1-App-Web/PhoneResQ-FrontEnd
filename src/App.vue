<script setup>
import HomeView from './views/HomeView.vue';
</script>

<template>
  <header>
    <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" />

    <div class="wrapper">
      <HelloWorld msg="You did it!" />

      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/history">history</RouterLink>
        <RouterLink to="/notifications">Notifications</RouterLink>
        <RouterLink to="/contact">Contact</RouterLink>
        <RouterLink to="/account">Account</RouterLink>
      </nav>
    </div>
  </header>
  <RouterView />
</template>

<style scoped>
</style>

<script>

  export default {
    name: 'App',
    components: {
    },
  }

</script>