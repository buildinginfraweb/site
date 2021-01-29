importScripts('/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/app.23e26e5.js",
    "revision": "7d3afcb0b1a25ac626b5a896904bb54e"
  },
  {
    "url": "/_nuxt/commons/app.1132cf7.js",
    "revision": "2da4fc2f53d3fc9e128919695c4ea055"
  },
  {
    "url": "/_nuxt/commons/index~parceiros~sobre.4b97966.js",
    "revision": "0f5ac5897dfe0ce0b9bc25f87108c1b3"
  },
  {
    "url": "/_nuxt/pages/contato.b056b23.js",
    "revision": "226b32c7d392ab0ad043dccb7a9ea392"
  },
  {
    "url": "/_nuxt/pages/index.8151b54.js",
    "revision": "ba7b297b08b72b6bedede6528019ecf5"
  },
  {
    "url": "/_nuxt/pages/parceiros.9208af0.js",
    "revision": "41bfb7015c678fbbd494b05d53693689"
  },
  {
    "url": "/_nuxt/pages/servicos.fbc8d87.js",
    "revision": "aa05e2c052ec4a5146768e76098d3e2f"
  },
  {
    "url": "/_nuxt/pages/sobre.22e43dc.js",
    "revision": "09af86b2fcb2ec6529a9491bf31d67c9"
  },
  {
    "url": "/_nuxt/pages/time.124831f.js",
    "revision": "6bbfbdd5e6c64bff3b74652d6464cd8f"
  },
  {
    "url": "/_nuxt/runtime.b4c1362.js",
    "revision": "1b6ff145160c0e361712b57ada85074c"
  },
  {
    "url": "/_nuxt/vendors~app.70e2a78.js",
    "revision": "88d91ffa4c1d7c2a598ed2e8547e2bbc"
  },
  {
    "url": "/_nuxt/vendors~pages/contato.74ff96c.js",
    "revision": "fea0fda933641d061bed0792b889fb9f"
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
