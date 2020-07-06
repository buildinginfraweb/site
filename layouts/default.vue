<template>
  <v-app>
    <nuxt />
  </v-app>
</template>

<script>

export default {
}
</script>
<style>
  .support-btn {
    border-radius: 8px!important;
    background: linear-gradient(140deg,#2bb6fc,#2867b5);
    color: #fffeff!important;
    background-color: transparent!important;
  }
  .header {
    background-image: url('/banner-1.jpg');
    height: 100vh;
    min-height: 100vh;
    background-position: center;
    background-size: cover;
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
</style>

