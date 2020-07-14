importScripts('/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/app.dc9c9a7.js",
    "revision": "7acb655bbc43d1f138c6dfd42193a22f"
  },
  {
    "url": "/_nuxt/commons/0ae66f98.6ca2b70.js",
    "revision": "fd52cbad2cd450abc04f2db9ab365862"
  },
  {
    "url": "/_nuxt/commons/app.9546602.js",
    "revision": "ec49d873a63353375017190b77420054"
  },
  {
    "url": "/_nuxt/pages/contato.e9cd712.js",
    "revision": "18ed4c199ec19ea6434699ddd0eb06e1"
  },
  {
    "url": "/_nuxt/pages/maintence-wrap/index.a4b3b1b.js",
    "revision": "f1a26c636047824b2c50a69593a5defb"
  },
  {
    "url": "/_nuxt/pages/maintence-wrap/parceiros.bef4bd2.js",
    "revision": "dc382391c133d275b06a7b3876383c84"
  },
  {
    "url": "/_nuxt/pages/maintence-wrap/servicos.0a92807.js",
    "revision": "2fac68071f5caa29399874c0c7135f0e"
  },
  {
    "url": "/_nuxt/pages/maintence-wrap/sobre.1b3c2f7.js",
    "revision": "5b0ab154fce6932ec06e53d306faa4f7"
  },
  {
    "url": "/_nuxt/pages/maintence-wrap/time.0fe28d8.js",
    "revision": "514acd0dcd987d4a6d8e453419a2c297"
  },
  {
    "url": "/_nuxt/runtime.60c96ee.js",
    "revision": "1546ee48fe403eb52b2f62fa07defb94"
  },
  {
    "url": "/_nuxt/vendors~app.75a89f4.js",
    "revision": "bb753974902daea1185c251a30a4416a"
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
