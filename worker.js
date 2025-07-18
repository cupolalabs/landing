export default {
  async fetch(request, env) {
    const url = new URL(request.url)
    let path = url.pathname

    if (path === "/") path = "/index.html"

    const asset = await env.ASSETS.fetch(path)
    if (asset.status === 404) {
      return new Response("Not Found", { status: 404 })
    }
    return asset
  }
}
