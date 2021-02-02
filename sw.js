importScripts('/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/app.c71eba2.js",
    "revision": "b018dae07985ceb07472e652b55bae9f"
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
    "url": "/_nuxt/pages/contato.e332b40.js",
    "revision": "ec7a65d78ec736bceff13229e3c241f9"
  },
  {
    "url": "/_nuxt/pages/index.7173713.js",
    "revision": "62ca58161f89a07ebe7377988a35080b"
  },
  {
    "url": "/_nuxt/pages/parceiros.5153673.js",
    "revision": "8f71f55fe7b397e5b39587780a15e98f"
  },
  {
    "url": "/_nuxt/pages/servicos.ebb19ab.js",
    "revision": "1bde5d04cb4651e8155a40e6fd280e2d"
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
    "url": "/_nuxt/runtime.632ffa9.js",
    "revision": "fa08e32b458fe52810d9a72cbe4efed3"
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
