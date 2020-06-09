import Vue from 'vue'
import Router from 'vue-router'
import store from '../store'
import routes from './routes'
//import { authorizeToken } from './guards'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  saveScrollPosition: true,
  routes,
  scrollBehavior (to, from, savedPosition) {
    if (to.hash) {
      return { selector: to.hash };
    } else if (savedPosition) {
      return savedPosition;
    } else {
      return { x: 0, y: 0 };
    }
  }
});
//router.beforeEach(authorizeToken)
router.beforeEach((to, from, next) => {
  store.dispatch('setHeaderMenuOpen', false)
  next();
});

export default router
