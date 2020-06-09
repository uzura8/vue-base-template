import config from '@/config/config'
import str from './str'

export default {
  uri: (path) => {
    const domain = config.domain ? config.domain : ''
    const port = config.port != null ? `:${config.port}` : ''
    const basePath = config.baseUrl
    let schem = ''
    if (config.domain) {
      schem = config.isSSL ? 'https://' : 'http://'
    }
    let items = [schem, domain, port, basePath, str.ltrimChar(path, '/')]
    return items.join('')
  },
}
