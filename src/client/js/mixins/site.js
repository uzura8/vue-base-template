import store from '@/store'
import listener from '@/listener'
import util from '@/util'
import config from '@/config/config'

export default {
  data() {
    return {}
  },

  computed: {
    siteName () {
      return config.siteName
    },

    isHeaderMenuOpen () {
      return store.state.common.isHeaderMenuOpen
    },

    globalMsg () {
      return store.state.common.globalMsg
    },

    isUserPage () {
      return this.$route.path.startsWith('/user')
    },
  },

  watch: {},

  methods: {
    siteUri: util.site.uri,
    isEmpty: util.common.isEmpty,
    inArray: util.arr.inArray,
    listen: listener.listen,
    destroyed: listener.destroyed,

    toggleHeaderMenuOpen: function() {
      store.dispatch('setHeaderMenuOpen', !this.isHeaderMenuOpen)
    },

    showGlobalMessage: function(msg, type='is-danger', pos='is-bottom', duration=5000) {
      this.$buefy.toast.open({
        message: msg,
        type: type,
        duration: duration,
        position: pos,
      })
    },

    handleApiError: function(err = null, defaultMsg='') {
      if (config.isDebug) console.log(err)// DEBUG
      if (err != null
        && err.response != null
        && err.response.data != null
        && err.response.data.message != null) {
        this.showGlobalMessage(err.response.data.message, 'danger', 'bottom-full', 'エラーが発生しました', true, config.errorToastHideDuration)
      } else if (defaultMsg) {
        this.showGlobalMessage(defaultMsg, 'danger', 'bottom-full', 'エラーが発生しました', true, config.errorToastHideDuration)
      } else {
        this.showGlobalMessage('サーバエラーが発生しました', 'danger', 'bottom-full', 'エラーが発生しました', true, config.errorToastHideDuration)
      }
    },

    usableTextSanitized: function (text) {
      let conved = util.str.nl2br(text)
      conved = util.str.url2link(conved)
      return this.$sanitize(conved)
    },

    usableTextEscaped: function (text) {
      let conved = util.str.escapeHtml(text)
      conved = util.str.nl2br(conved)
      return util.str.url2link(conved)
    },
  },
}
