importScripts('/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/app.a614a70.js",
    "revision": "8baf9b8844eb904fa03c9242ce1c7460"
  },
  {
    "url": "/_nuxt/commons/app.1132cf7.js",
    "revision": "2da4fc2f53d3fc9e128919695c4ea055"
  },
  {
    "url": "/_nuxt/commons/index~parceiros~sobre.f9373c4.js",
    "revision": "45d85d8165edb88ff77f963b295c3779"
  },
  {
    "url": "/_nuxt/pages/contato.b128b6a.js",
    "revision": "90b68534ba22256c45d311b8466f3dc5"
  },
  {
    "url": "/_nuxt/pages/index.5d2211b.js",
    "revision": "30ee641f1566fe24caae51d7169c4a7d"
  },
  {
    "url": "/_nuxt/pages/parceiros.2287966.js",
    "revision": "dc971389c4e71b4674f1b93dd150cd37"
  },
  {
    "url": "/_nuxt/pages/servicos.024570f.js",
    "revision": "80caa9c98b5a42a3cd33997a0357b53e"
  },
  {
    "url": "/_nuxt/pages/sobre.a337a50.js",
    "revision": "e2b978089d11954d57c894dfce9b3591"
  },
  {
    "url": "/_nuxt/pages/time.1cc4857.js",
    "revision": "68aa33fd398c330d51f936d74ddd17b0"
  },
  {
    "url": "/_nuxt/runtime.5a5abf2.js",
    "revision": "bb72650a47de29728a880a95eba8bb2e"
  },
  {
    "url": "/_nuxt/vendors~app.70e2a78.js",
    "revision": "88d91ffa4c1d7c2a598ed2e8547e2bbc"
  },
  {
    "url": "/_nuxt/vendors~pages/contato.230611c.js",
    "revision": "a99df9242bd896b3b08bf1593bac3051"
  }
], {
  "cacheId": "building-infra",
  "directoryIndex": "/",
  "cleanUrls": false
})

workbox.clientsClaim()
workbox.skipWaiting()

workbox.routing.registerRoute(new RegExp('/_nuxt/.*'), workbox.strategies.cacheFirst({}), 'GET')

workbox.routing.registerRoute(new RegExp('/.*'), workbox.strategies.networkFirst({}), 'GET')
