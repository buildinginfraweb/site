<template>
  <v-app>
    <TheHeader />
    <nuxt style="position:relative;"/>
    <CallWhatsApp />
  </v-app>
</template>

<script>
import CallWhatsApp from '~/components/CallWhatsApp'
import TheHeader from '~/components/TheHeader'

export default {
  components: {
    CallWhatsApp,
    TheHeader
  }
}
</script>
<style>
  .main-content {
    height: calc(100vh - 160px);
    padding: 24px 48px;
  }
  .support-btn {
    border-radius: 8px!important;
    background: linear-gradient(140deg,#2bb6fc,#2867b5);
    color: #fffeff!important;
    background-color: transparent!important;
  }
  .header-image__wrapper {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    height: 100vh;
    width: 100%;
    min-height: 100vh;
    z-index: 0;
  }
  
  .header-image__overlay {
    height: 100vh;
    width: 100%;
    min-height: 100vh;
    position: fixed;
    background: #30354cbf;;
  }
  .header-image__img {
    height: 100vh;
    width: 100%;
    min-height: 100vh;
    background-position: center;
    background-size: cover;
    position: fixed;
  }
  .header-image__img--1 {
    background-image: url('/banner-1.jpg');
  }
  .header-image__img--2 {
    background-image: url('/banner-2.jpeg');
  }
    .header-image__img--3 {
    background-image: url('/banner-3.jpg');
  }

  .header {
    position: relative;
  }
  .header a {
    text-decoration: none;
    color: #fffeff;
    text-transform: uppercase;
    font-size: 12px;
    font-weight: 600;
  }
  .header a.nuxt-link-active {
    color: white;
    
  }
  .nav .nuxt-link-exact-active,
  .header .nuxt-link-exact-active,
  .footer .nuxt-link-exact-active {
    pointer-events: none;
    border-bottom: 1px solid #0496d8;
  }
  .header .v-divider {
    border-color: rgba(236, 236, 239, 0.05)!important;
  }

  .vue-typer .custom.char.typed {
    color: #fffeff;
  }
  .vue-typer .custom.char.selected {
    color: #fffeff;
  }
  .vue-typer .custom.caret {
    background-color: #fffeff;
  }
  .footer a, .footer{
    text-decoration: none;
    color:#c8c8c8;
  }
  .nav .v-list__tile__title{
    text-align: center
  }
  .nav .v-list__tile__title a {
    color: white;
    text-decoration: none;
  }
  body{
    overflow-x: hidden;
  }
  .component-fade-enter-active, .component-fade-leave-active {
  transition: opacity .3s ease;
}
  .component-fade-enter, .component-fade-leave-to
  /* .component-fade-leave-active below version 2.1.8 */ {
    opacity: 0;
  }
</style>

