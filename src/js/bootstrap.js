import 'es6-promise/auto'

import Vue from 'vue'

import Vuex from 'vuex'
Vue.use(Vuex)

import VueRouter from 'vue-router'
Vue.use(VueRouter);

import Buefy from 'buefy'
Vue.use(Buefy)

//import VeeValidate from 'vee-validate'
//Vue.use(VeeValidate)

import util from './util'
import listener from './listener'
import site from './site'
Vue.mixin({
  methods: {
    siteUri: site.uri,
    siteConfig: site.config,
    isEmpty: util.isEmpty,
    inArray: util.inArray,
    listen: listener.listen,
    destroyed: listener.destroyed,
    getCategoryLabel: function(category) {
      if (util.isEmpty(category)) return ''
      if (!util.isEmpty(category.sublabel)) return category.sublabel
      return category.name
    },
  },
});

import moment from 'moment'
import 'moment/locale/ja'
moment.locale('ja');
Vue.filter('dateFormat', function (date, format='LLL') {
  return moment(date).format(format);
});

Vue.filter('numFormat', function (num) {
  num = parseInt(num)
  if (isNaN(num)) return 0
  return String(num).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, '$1,');
});
Vue.filter('substr', function (text, num) {
  return util.substr(text, num, '...')
});

import flatPickr from 'vue-flatpickr-component'
Vue.component('flatPickr', flatPickr)

export {
  Vue,
  VueRouter,
  moment,
}
