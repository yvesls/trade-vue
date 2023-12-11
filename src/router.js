// src/router.js
import Vue from 'vue';
import Router from 'vue-router';
import Dashboard from '@/components/Dashboard.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/dashboard',
      name: 'dashboard',
      component: Dashboard,
    },
  ],
});
