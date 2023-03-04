import {createRouter, createWebHistory} from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/auth/Login.vue'
import Register from '../views/auth/Register.vue'

const routes = [
    {
        path: '/',
        name: 'default',
        component: Login
    },
   {
       path: '/home',
       name: 'home',
       component: Home
   },
   {
       path: '/register',
       name: 'register',
       component: Register
   },
   {
    path: '/login',
    name: 'login',
    component: Login
},
];

const router = createRouter({
   history:createWebHistory(),
   routes,
});

export default router