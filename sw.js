importScripts('/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/app.f2462e4.js",
    "revision": "b0935ff57d82bac2b2395183df37c972"
  },
  {
    "url": "/_nuxt/commons/app.14b19fc.js",
    "revision": "3ad87272a14ad8c01afe2e8f0d3210c1"
  },
  {
    "url": "/_nuxt/commons/index~parceiros~sobre.29ded61.js",
    "revision": "a70c91775ad93b42c9607f55a7a4ec3c"
  },
  {
    "url": "/_nuxt/pages/contato.0ee96be.js",
    "revision": "b23489cd939b3b836647712d8b6185c6"
  },
  {
    "url": "/_nuxt/pages/index.36d1474.js",
    "revision": "3a913edcbcc675594cf8943b46ad004d"
  },
  {
    "url": "/_nuxt/pages/parceiros.5153673.js",
    "revision": "8f71f55fe7b397e5b39587780a15e98f"
  },
  {
    "url": "/_nuxt/pages/servicos.509d5fb.js",
    "revision": "15e39d2926a3be2d36bcd9d8faa53159"
  },
  {
    "url": "/_nuxt/pages/sobre.1b5b9f3.js",
    "revision": "bb0b66277370b64e3be461795f79ff44"
  },
  {
    "url": "/_nuxt/pages/time.e5b652b.js",
    "revision": "82066a9d383656fc4350e2ac4746c157"
  },
  {
    "url": "/_nuxt/runtime.5520c58.js",
    "revision": "65edc50ed67c6fe39b36e8d12b7a42e5"
  },
  {
    "url": "/_nuxt/vendors~app.7182969.js",
    "revision": "4ac7f646dc9616526628e47ee74c0816"
  },
  {
    "url": "/_nuxt/vendors~pages/contato.60b3eb3.js",
    "revision": "cbfd46c09f4ac4a725ba7924cf9195d0"
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
