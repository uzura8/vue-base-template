import Vue from 'vue'
import Router from 'vue-router'
import store from '@/store'
import config from '@/config/config'
import routes from './routes'

Vue.use(Router)

const routerMode = config.routerMode || 'history'
const router = new Router({
  mode: routerMode,
  saveScrollPosition: true,
  routes,
  scrollBehavior (to, from, savedPosition) {
    if (to.hash) {
      return { selector: to.hash }
    } else if (savedPosition) {
      return savedPosition;
    } else {
      return { x: 0, y: 0 }
    }
  }
})

router.beforeEach((to, from, next) => {
  store.dispatch('setHeaderMenuOpen', false)
  next()
})

export default router
