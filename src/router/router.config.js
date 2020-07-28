
import TabbarLayout from '../layouts/TabbarLayout'; // 带tabbar

const routes = [
  {
    path: '/',
    name: 'Home',
    component: TabbarLayout,
    children: [
      {
        path: '/home',
        component: () => import(/* webpackChunkName: "about" */ '../views/Home')
      },
      {
        path: '/cart',
        component: () => import(/* webpackChunkName: "about" */ '../views/Cart')
      },
      {
        path: '/catalog',
        component: () => import(/* webpackChunkName: "about" */ '../views/Catalog')
      },
      {
        path: '/user',
        component: () => import(/* webpackChunkName: "about" */ '../views/Account/User')
      }
    ]
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
];

export default routes;