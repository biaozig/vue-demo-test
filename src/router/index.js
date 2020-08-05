import Vue from 'vue'
import Router from 'vue-router'

import routes from './router.config'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

//引入nprogress
import NProgress from 'nprogress'
import 'nprogress/nprogress.css' //这个样式必须引入

// 路由拦截
router.beforeEach((to, from, next) => {
  const title = to.meta && to.meta.title;
  if (title) {
    document.title = title;
  }
  NProgress.start()
  next();
});

router.afterEach(() => {
  NProgress.done()
})

export default router