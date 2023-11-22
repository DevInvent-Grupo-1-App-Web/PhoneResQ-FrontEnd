import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/shared/HomeView.vue';
import LoginView from '../views/account/LoginView.vue';

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
      component: () => import('../views/user/ServicesView.vue'),
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/mi-cuenta',
      name: 'mi-cuenta',
      component: () => import('../views/account/AccountView.vue'),
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
      component: () => import('../views/account/RegisterClient.vue'),
      meta: {
        requiresAuth: false
      }
    },
    {
      path: '/registertecnical',
      name: 'registertecnical',
      component: () => import('../views/account/RegisterTecnical.vue'),
      meta: {
        requiresAuth: false
      }
    },
    {
      path: '/mensajes',
      name: 'mensajes',
      component: () => import('../views/shared/MessagesView.vue'),
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
      component: () => import('../views/account/RecoverAccountView.vue'),
      meta: {
        requiresAuth: false
      }
    },
    {
      path: '/servicios/:id',
      name: 'servicio',
      component: () => import('../views/user/ServicesView.vue'),
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/registrar-reclamo',
      name: 'registrar-reclamo',
      component: () => import('../views/user/ClaimFormView.vue'),
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/registrar-observacion',
      name: 'registrar-observacion',
      component: () => import('../views/user/ObservationFormView.vue'),
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
      component: () => import('../views/shared/NotFoundView.vue'),
      meta: {
        requiresAuth: false
      }
    },
    {
      path: '/sisopchoose',
      name: 'sisopchoose',
      component: () => import('../views/user/SistemOpChooseView.vue'),
      meta: {
        requiresAuth: false
      }
    },
    {
      path: '/iphonemodels',
      name: 'iphonemodels',
      component: () => import('../views/user/iOSoptionsView.vue'),
      meta: {
        requiresAuth: true
      }

    },
    {
       path: '/phoneproblems',
        name: 'phoneproblems',
        component: () => import('../views/user/PhoneProblemsSelectionView.vue'),
        meta: {
          requiresAuth: true
        }
    },
    {
      path: '/androidbrandsoptions',
      name: 'androidbrandsoptions',
      component: () => import('../views/user/AndroidBrandsOptionsView.vue'),
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/xiaomiphonelist',
      name: 'xiaomiphonelist',
      component: () => import('../views/user/XiaomiPhoneListView.vue'),
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/samsungphoneslist',
      name: 'samsungphonelist',
      component: () => import('../views/user/SamsungPhoneListView.vue'),
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/huaweiphoneslist',
      name: 'huaweiphoneslist',
      component: () => import('../views/user/HuaweiPhoneListView.vue'),
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/motorolaphoneslist',
      name: 'motorolaphoneslist',
      component: () => import('../views/user/MotorolaPhoneListView.vue'),
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/forgotpassword',
      name: 'forgotpassword',
      component: () => import('../views/account/ForgotPasswordView.vue'),
      meta: {
        requiresAuth: false
      }
    },
    {
      path: '/resetpassword',
      name: 'resetpassword',
      component: () => import('../views/account/ResetPasswordView.vue'),
      meta: {
        requiresAuth: false
      }
    },
    {
      path: '/password-changed-successfully',
      name: 'password-changed-successfully',
      component: () => import('../views/account/PasswordChangedtSuccessfullyView.vue')
    },
    {
      path: '/reviewtechnician',
      name: 'reviewtechnician',
      component: () => import('../views/user/RatingTechnician.vue'),
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      component: () => import('../views/technician/DashboardView.vue'),
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/inventory',
      name: 'inventory',
      component: () => import('../views/technician/InventoryView.vue'),
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/tracking/:id',
      name: 'tracking',
      component: () => import('../views/technician/TrackingView.vue'),
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/tech-service-details',
      name:  'techservicedetails',
      component: () => import('../views/user/TechServiceDetailsView.vue'),
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/support-center-register',
      name: 'support-center-register',
      component: () => import('../views/account/RegisterSupportCenterView.vue'),
      meta: {
        requiresAuth: false
      }
    }
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
