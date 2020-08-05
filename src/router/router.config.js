
import TabbarLayout from '../layouts/TabbarLayout';
import BlankLayout from '../layouts/BlankLayout'; 

const routes = [
  // {
  //   path: '/',
  //   name: 'Home',
  //   component: TabbarLayout,
  //   children: [
  //     {
  //       path: '/home',
  //       component: () => import(/* webpackChunkName: "about" */ '../views/home')
  //     },
  //     {
  //       path: '/cart',
  //       component: () => import(/* webpackChunkName: "about" */ '../views/cart')
  //     },
  //     {
  //       path: '/catalog',
  //       component: () => import(/* webpackChunkName: "about" */ '../views/catalog')
  //     },
  //     {
  //       path: '/user',
  //       component: () => import(/* webpackChunkName: "about" */ '../views/account/user')
  //     }
  //   ]
  // },
  {
    path: '/login',
    name: 'Login',
    component: () => import(/* webpackChunkName: "about" */ '../views/login')
  },
  {
    path: '/',
    redirect: '/merchant', 
    component: BlankLayout,
    children: [
      {
        path: '/merchant',
        name: 'Merchant',
        component: () => import(/* webpackChunkName: "about" */ '../views/merchant')
      },
      {
        path: '/user',
        name: 'User',
        component: () => import(/* webpackChunkName: "about" */ '../views/account/user')
      },
    ]
  }
];

export default routes;