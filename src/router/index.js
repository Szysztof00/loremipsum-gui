import { createRouter, createWebHashHistory, RouterView  } from 'vue-router'
import Tr from "@/i18n/translation"

const routes = [
    {
      path: "/:locale?",
      component: RouterView,
      beforeEnter: Tr.routeMiddleware,
      children: [
        {
            path: '',
            name: 'app',
            component: () => import('../views/DefaultPage.vue'),
        },
        {
            path: 'aboutus',
            name: 'AboutUs',
            component: () => import('../views/AboutUs.vue'),
        },
        {
            path: 'contact',
            name: 'Contact',
            component: () => import('../views/Contact.vue'),
        },
        {
          path: 'tasklist',
          name: 'TaskList',
          component: () => import('../views/TaskList.vue'),
      }
      ]
    }
  ]

const router = createRouter({
    history: createWebHashHistory(import.meta.env.VITE_BASE_URL),
    routes,
  });
  
  
  export default router;