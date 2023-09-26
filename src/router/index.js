import { createRouter, createWebHistory } from 'vue-router'
import useraccountcomponent from '../components/UserAccount.component.vue'
import searchcomponent from '../components/SearchSystem.component.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/myaccount',
      name: 'myaccount',
      component: useraccountcomponent
    },
   {path:'/search',name:'search',component:searchcomponent},
  ]
})

export default router
