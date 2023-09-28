import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'inicio',
      component: HomeView
    },
    {
      path: '/servicios',
      name: 'servicios',
      component: () => import('../views/ServicesView.vue')
    },
    {
      path: '/mi-cuenta',
      name: 'mi-cuenta',
      component: () => import('../views/AccountView.vue')
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('../views/LoginView.vue')
    },
    {
      path: '/registro',
      name: 'registro',
      component: () => import('../views/RegisterView.vue')
    },
    {
      path: '/mensajes',
      name: 'mensajes',
      component: () => import('../views/MessagesView.vue')
    },
    {
      path: '/mensajes/:id',
      name: 'mensaje',
      //component: () => import('../views/MessageView.vue')
    },
    {
      path: '/recuperar-cuenta',
      name: 'recuperar-cuenta',
      component: () => import('../views/RecoverAccountView.vue')
    },
    {
      path: '/servicios/:id',
      name: 'servicio',
      component: () => import('../views/ServicesView.vue')
    },
    {
      path: '/registrar-reclamo',
      name: 'registrar-reclamo',
      component: () => import('../views/ClaimFormView.vue')
    },
    {
      path: '/registrar-observacion',
      name: 'registrar-observacion',
      component: () => import('../views/ObservationFormView.vue')
    },
    {
      path: '/perfil/:username',
      name: 'perfil',
      //component: () => import('../views/ProfileView.vue')
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'not-found',
      component: () => import('../views/NotFoundView.vue')
    }
  ]
})

export default router
