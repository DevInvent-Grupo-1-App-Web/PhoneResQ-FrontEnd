<script setup>
    import Menubar from 'primevue/menubar';
    import { defineProps } from 'vue';
    defineProps({
        items: {
            type: Array,
            required: true
        }
    });

</script>

<template>
    <Menubar :model="items">
        <template #start>
            <img id="navbar-logo" alt="logo" src="../assets/logo.svg"/>
        </template>
        <template #item="{ label, item, props, root, hasSubmenu }">
        <router-link v-if="item.route" v-slot="routerProps" :to="item.route" custom>
            <a :href="routerProps.href" v-bind="props.action">
                <span v-bind="props.icon" />
                <span v-bind="props.label">{{ label }}</span>
            </a>
        </router-link>
        <a v-else :href="item.url" :target="item.target" v-bind="props.action">
            <span v-bind="props.icon" />
            <span v-bind="props.label">{{ label }}</span>
            <span :class="[hasSubmenu && (root ? 'pi pi-fw pi-angle-down' : 'pi pi-fw pi-angle-right')]" v-bind="props.submenuicon" />
        </a>
    </template>
    <template #end>
        <!--search icon. when clicked, display a textinput-->
        <i class="pi pi-search" />
        <!--user icon-->
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
    name: 'NavbarMain',
    components: {
        Menubar,
    },
}
</script>