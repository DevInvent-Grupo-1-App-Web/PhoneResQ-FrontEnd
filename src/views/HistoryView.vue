<script setup>

</script>
<template>
<NavbarMain :items="[
    { label: 'Inicio', route: '/' },
    { label: 'Historial', route: '/history' },
    { label: 'Notificaciones', route: '/notifications'},
    {label: 'Perfil', route: '/profile'},
    {label: 'Contacto', route: '/contact'}
  ]" />
</template>

<style>
</style>
