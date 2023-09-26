<script setup>
import Menubar from "primevue/menubar";
import { defineProps } from "vue";
import { RouterLink } from "vue-router";
defineProps({
  items: {
    type: Array,
    required: true,
  },
});
</script>

<template>
  <Menubar>
    <template #start>
      <img id="navbar-logo" alt="logo" src="../assets/logo.svg" />
    </template>
    <template>
      <RouterLink></RouterLink>
    </template>
    <template #end>
      <i class="pi pi-search" />
      <i class="pi pi-user" />
    </template>
  </Menubar>
</template>

<style>
#navbar-logo {
  width: auto;
  height: 2rem;
}

.pi {
  font-size: 1.5rem;
  padding: 0 20px 0 20px;
}
</style>

<script>
export default {
  name: "NavbarMain",
  components: {
    Menubar,
  },
};
</script>
