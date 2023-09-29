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
      path: '/inicio',
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
      path: '/registracliente',
      name: 'registracliente',
      component: () => import('../views/RegisterClient.vue')
    },
    {
      path: '/registertecnical',
      name: 'registertecnical',
      component: () => import('../views/RegisterTecnical.vue')
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
    },
    {
      path: '/sisopchoose',
      name: 'sisopchoose',
      component: () => import('../views/SistemOpChooseView.vue')
    },
    {
      path: '/iphonemodels',
      name: 'iphonemodels',
      component: () => import('../views/iOSoptionsView.vue')

    },
    {
       path: '/phoneproblems',
        name: 'phoneproblems',
        component: () => import('../views/PhoneProblemsSelectionView.vue')
    },
    {
      path: '/androidbrandsoptions',
      name: 'androidbrandsoptions',
      component: () => import('../views/AndroidBrandsOptionsView.vue')
    },
    {
      path: '/xiaomiphonelist',
      name: 'xiaomiphonelist',
      component: () => import('../views/XiaomiPhoneListView.vue')
    },
    {
      path: '/samsungphoneslist',
      name: 'samsungphonelist',
      component: () => import('../views/SamsungPhoneListView.vue')
    },
    {
      path: '/huaweiphoneslist',
      name: 'huaweiphoneslist',
      component: () => import('../views/HuaweiPhoneListView.vue')
    },
    {
      path: '/motorolaphoneslist',
      name: 'motorolaphoneslist',
      component: () => import('../views/MotorolaPhoneListView.vue')
    }

  ]
})

export default router
