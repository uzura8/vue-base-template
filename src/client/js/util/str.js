const UtilStr = {
  substr: (text, len, truncation='') => {
    const text_array = text.split('')
    let count = 0
    let str = ''
    for (let i = 0, m = text_array.length; i < m; i++) {
      let n = escape(text_array[i])
      if (n.length < 4) {
        count++
      } else {
        count += 2;
      }
      if (count > len) {
        return str + truncation
      }
      str += text.charAt(i)
    }
    return text
  },

  capitalize: (text) => {
    return text.slice(0, 1).toUpperCase() + text.slice(1)
  },

  ltrimChar: function(str, anyChar) {
    return str.replace(new RegExp('^' + anyChar, 'g'),'')
  },

  rtrimChar: function(str, anyChar) {
    return str.replace(new RegExp(anyChar + '+$', 'g'),'')
  },

  trimChar: function(str, anyChar) {
    return str.replace(new RegExp('^' + anyChar + '+|' + anyChar + '+$', 'g'),'')
  },

  convObjToStr: function(obj, delimitter=',') {
    let items = []
    Object.keys(obj).map((key) => {
      items.push(`${key}:${obj[key]}`)
    })
    return items.join(delimitter)
  },

  convToHalfWidth: function(str) {
    if (typeof (str) != 'string') return str

    return str.replace(/[Ａ-Ｚａ-ｚ０-９]/g, (s) => {
      return String.fromCharCode(s.charCodeAt(0) - 0xFEE0)
    })
  },

  strToInt: function(str, isNotReturnZero = false) {
    if (typeof (str) != 'string') return str
    if (str === '') return str

    const halfWidthStr = UtilStr.convToHalfWidth(str)
    if (isNaN(halfWidthStr) || !halfWidthStr) {
      return isNotReturnZero ? '' : 0
    }
    return parseInt(halfWidthStr)
  },

  nl2br: function(str) {
    if (str == null) return ''
    str = str.replace(/\r\n/g, '<br />')
    str = str.replace(/(\n|\r)/g, '<br />')
    return str
  },

  url2link: function(str) {
    if (str == null) return ''
    const pattern = /(\b(https?|ftp):\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])/gim
    return str.replace(pattern, '<a href="$1" target="_blank">$1</a>')
  },

  escapeHtml: function(str) {
    if (str == null) return ''
    return str.replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#39;');
  },

  checkEmail: function(text) {
    const regexp = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    return regexp.test(text)
  },
}

export default UtilStr
