import { createRouter, createWebHashHistory } from 'vue-router';

const routes = [
        {
            path: '/',
            name: 'app',
            component: () => import('../views/DefaultPage.vue'),
        },
        {
            path: '/aboutus',
            name: 'AboutUs',
            component: () => import('../views/AboutUs.vue'),
        },
        {
            path: '/contact',
            name: 'Contact',
            component: () => import('../views/Contact.vue'),
        }
]


const router = createRouter({
    history: createWebHashHistory('/loremIpsum/'),
    routes,
  });
  
  
  export default router;