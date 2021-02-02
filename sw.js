importScripts('/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/app.61d78bc.js",
    "revision": "67a0da56b0b23273769a3e8ccb442802"
  },
  {
    "url": "/_nuxt/commons/app.67ab72a.js",
    "revision": "8443a019302cf8f17b14c2135a6140a3"
  },
  {
    "url": "/_nuxt/commons/index~parceiros~sobre.d1ea296.js",
    "revision": "66c523306153b8a64d9069a87e1f6e54"
  },
  {
    "url": "/_nuxt/pages/contato.e492b01.js",
    "revision": "1774d13925dafc10be55aa4a5ace657f"
  },
  {
    "url": "/_nuxt/pages/index.217d15e.js",
    "revision": "aa01006ab2d1f19adbd7befdcd045ed4"
  },
  {
    "url": "/_nuxt/pages/parceiros.194c68d.js",
    "revision": "a2b07d7b64e89dc3e41e9a14d6af75c8"
  },
  {
    "url": "/_nuxt/pages/servicos.ddaa10b.js",
    "revision": "fab13511d72727d96c21e2522f07b896"
  },
  {
    "url": "/_nuxt/pages/sobre.c88d562.js",
    "revision": "2d4fde9285a36d655f2cd9e0c585d345"
  },
  {
    "url": "/_nuxt/pages/time.bcd5e13.js",
    "revision": "f83d9960a5350efe285d4fbdeaa08c6b"
  },
  {
    "url": "/_nuxt/runtime.a552ac5.js",
    "revision": "8cc1bd958809f9ac26c184b1c1e704d2"
  },
  {
    "url": "/_nuxt/vendors~app.e024c00.js",
    "revision": "f4c35de22dbad9f2aee9c06d5702ea09"
  },
  {
    "url": "/_nuxt/vendors~pages/contato.7442a5e.js",
    "revision": "1a532d25d6be0a3be22406e28e01a5b0"
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
