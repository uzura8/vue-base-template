import 'es6-promise/auto'
import Vue from 'vue'
import router from '@/router'
import store from '@/store'
import App from '@/App'

import Buefy from 'buefy'
Vue.use(Buefy)

import mixin from '@/mixins/site'
Vue.mixin(mixin)

import * as filters from '@/filters'
Object.keys(filters).forEach(key => {
  Vue.filter(key, filters[key])
})

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})

