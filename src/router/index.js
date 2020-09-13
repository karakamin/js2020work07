import Vue from 'vue';
import VueRouter from 'vue-router';
// import Home from '../views/Home.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/frontend/Home.vue'),
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/frontend/Login.vue'),
  },
  // {
  //   path: '/login',
  //   name: 'Login',
  //   component: () => import('../views/frontend/Login.vue'),
  // },
  // {
  //   path: '/about',
  //   name: 'About',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
  // },
  {
    path: '/manage',
    name: '管理頁面',
    component: () => import('../views/manage/Dashboard.vue'),
    children: [
      {
        path: 'Products',
        name: '產品頁面', // router 識別用
        component: () => import('../views/manage/Products.vue'),
        meta: { requiresAuth: true },
      },
      {
        path: 'coupons',
        name: '優惠券',
        component: () => import('../views/manage/Coupons.vue'),
        meta: { requiresAuth: true },
      },
      // {
      //   path: 'coupons',
      //   component: () => import('../views/manage/Coupons.vue')
      // }
    ],
  },
];

const router = new VueRouter({
  routes,
});

export default router;
