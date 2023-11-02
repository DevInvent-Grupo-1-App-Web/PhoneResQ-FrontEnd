import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import LoginView from '../views/LoginView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/inicio',
      name: 'inicio',
      component: HomeView,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/',
      name: 'start',
      component: LoginView,
      meta: {
        requiresAuth: false
      }
    },
    {
      path: '/servicios',
      name: 'servicios',
      component: () => import('../views/ServicesView.vue'),
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/mi-cuenta',
      name: 'mi-cuenta',
      component: () => import('../views/AccountView.vue'),
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/login',
      name: 'login',
      component: LoginView
    },
    {
      path: '/registracliente',
      name: 'registracliente',
      component: () => import('../views/RegisterClient.vue'),
      meta: {
        requiresAuth: false
      }
    },
    {
      path: '/registertecnical',
      name: 'registertecnical',
      component: () => import('../views/RegisterTecnical.vue'),
      meta: {
        requiresAuth: false
      }
    },
    {
      path: '/mensajes',
      name: 'mensajes',
      component: () => import('../views/MessagesView.vue'),
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/mensajes/:id',
      name: 'mensaje',
      //component: () => import('../views/MessageView.vue')
    },
    {
      path: '/recuperar-cuenta',
      name: 'recuperar-cuenta',
      component: () => import('../views/RecoverAccountView.vue'),
      meta: {
        requiresAuth: false
      }
    },
    {
      path: '/servicios/:id',
      name: 'servicio',
      component: () => import('../views/ServicesView.vue'),
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/registrar-reclamo',
      name: 'registrar-reclamo',
      component: () => import('../views/ClaimFormView.vue'),
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/registrar-observacion',
      name: 'registrar-observacion',
      component: () => import('../views/ObservationFormView.vue'),
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/perfil/:username',
      name: 'perfil',
      //component: () => import('../views/ProfileView.vue')
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'not-found',
      component: () => import('../views/NotFoundView.vue'),
      meta: {
        requiresAuth: false
      }
    },
    {
      path: '/sisopchoose',
      name: 'sisopchoose',
      component: () => import('../views/SistemOpChooseView.vue'),
      meta: {
        requiresAuth: false
      }
    },
    {
      path: '/iphonemodels',
      name: 'iphonemodels',
      component: () => import('../views/iOSoptionsView.vue'),
      meta: {
        requiresAuth: true
      }

    },
    {
       path: '/phoneproblems',
        name: 'phoneproblems',
        component: () => import('../views/PhoneProblemsSelectionView.vue'),
        meta: {
          requiresAuth: true
        }
    },
    {
      path: '/androidbrandsoptions',
      name: 'androidbrandsoptions',
      component: () => import('../views/AndroidBrandsOptionsView.vue'),
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/xiaomiphonelist',
      name: 'xiaomiphonelist',
      component: () => import('../views/XiaomiPhoneListView.vue'),
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/samsungphoneslist',
      name: 'samsungphonelist',
      component: () => import('../views/SamsungPhoneListView.vue'),
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/huaweiphoneslist',
      name: 'huaweiphoneslist',
      component: () => import('../views/HuaweiPhoneListView.vue'),
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/motorolaphoneslist',
      name: 'motorolaphoneslist',
      component: () => import('../views/MotorolaPhoneListView.vue'),
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/forgotpassword',
      name: 'forgotpassword',
      component: () => import('../views/ForgotPasswordView.vue'),
      meta: {
        requiresAuth: false
      }
    },
    {
      path: '/resetpassword',
      name: 'resetpassword',
      component: () => import('../views/ResetPasswordView.vue'),
      meta: {
        requiresAuth: false
      }
    },
    {
      path: '/password-changed-successfully',
      name: 'password-changed-successfully',
      component: () => import('../views/PasswordChangedtSuccessfullyView.vue')
    },
    {
      path: '/reviewtechnician',
      name: 'reviewtechnician',
      component: () => import('../views/RatingTechnician.vue')
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      component: () => import('../views/DashboardView.vue')
    },
    {
      path: '/inventory',
      name: 'inventory',
      component: () => import('../views/InventoryView.vue')
    },
    {
      path: '/tracking/:id',
      name: 'tracking',
      component: () => import('../views/TrackingView.vue')
    },
    {
      path: '/tech-service-details',
      name:  'techservicedetails',
      component: () => import('../views/TechServiceDetailsView.vue')
    },
  ]
})

router.beforeEach((to, from, next)=>{
  const requiresAuth = to.matched.some(record => record.meta.requiresAuth);
  const isAuthenticated = localStorage.getItem('token');


  if(requiresAuth && !isAuthenticated){
    next('/login');
  } 
  else{
    next();
  }
})

export default router
