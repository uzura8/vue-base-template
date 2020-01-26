import 'es6-promise/auto'
import Vue from 'vue'
import router from './router'
import store from './store'
import './common';

import Firebase from './firebase'
Firebase.init()

import Buefy from 'buefy'
Vue.use(Buefy)

import moment from 'moment'
import 'moment/locale/ja'
moment.locale('ja');
Vue.filter('dateFormat', function (date, format='LLL') {
  return moment(date).format(format);
});

//import VeeValidate from 'vee-validate'
//Vue.use(VeeValidate)

import util from './util'
import listener from './listener'
import config from './config'
Vue.mixin({
  computed: {
    isAuth: function () {
      return this.$store.state.auth.state
    },
  },
  methods: {
    siteUri: config.uri,
    getConfig: config.get,
    isEmpty: util.isEmpty,
    inArray: util.inArray,
    listen: listener.listen,
    destroyed: listener.destroyed,
    getCategoryLabel: function(category) {
      if (util.isEmpty(category)) return ''
      if (!util.isEmpty(category.sublabel)) return category.sublabel
      return category.name
    },
    signout: function() {
      this.$store.dispatch('signOut')
        .then(() => {
          this.$router.push({ path:'/signin' })
        })
        .catch(err => this.throwReject(err))
    },
  },
});

Vue.filter('numFormat', function (num) {
  num = parseInt(num)
  if (isNaN(num)) return 0
  return String(num).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, '$1,');
});
Vue.filter('substr', function (text, num) {
  return util.substr(text, num, '...')
});

//import flatPickr from 'vue-flatpickr-component'
//Vue.component('flatPickr', flatPickr)

new Vue({
  el: '#app',
  computed: {
    isLoading () {
      return store.state.common.isLoading
    },
    isHeaderMenuOpen: function () {
      return store.state.common.isHeaderMenuOpen
    },
  },
  created: function () {
  },
  methods: {
    toggleHeaderMenuOpen: function () {
      store.dispatch('setHeaderMenuOpen', !this.isHeaderMenuOpen)
    },
  },
  store,
  router,
});

