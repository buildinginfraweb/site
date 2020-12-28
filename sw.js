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
    "url": "/_nuxt/commons/index~parceiros~sobre.bb95665.js",
    "revision": "e132709ebc43f9a3db929259c5b1a6f4"
  },
  {
    "url": "/_nuxt/pages/contato.b128b6a.js",
    "revision": "90b68534ba22256c45d311b8466f3dc5"
  },
  {
    "url": "/_nuxt/pages/index.b8fce9b.js",
    "revision": "83bd0b89c27af5f5255aeace84040b84"
  },
  {
    "url": "/_nuxt/pages/parceiros.725cba7.js",
    "revision": "46263fbb7d989e5a9f48f9292e34fbbe"
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
    "url": "/_nuxt/runtime.66070b5.js",
    "revision": "f8a51c32b04850e0b1d3893e04bed920"
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
