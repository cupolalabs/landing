import { serveStatic } from 'cloudflare:workers'

export default {
  async fetch(request) {
    return serveStatic(request, { root: '/' })
  },
}
