<template>
  <v-container fluid pa-4 class="grey darken-4 footer text-xs-center">
    <v-layout :column="$vuetify.breakpoint.xs" wrap>
      <v-spacer></v-spacer>
      <v-flex px-3 shrink v-for="page in pages" :key="page.name">
        <nuxt-link :to="page.to">{{ page.name }}</nuxt-link>
      </v-flex>
      <v-spacer></v-spacer>
    </v-layout>
    <v-layout>
      <v-flex
        class="text-xs-center pt-2"
      >© {{ new Date().getFullYear() }} Building Infra todos os direitos reservados</v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      pages: [
        {
          to: '/',
          name: 'Home'
        },
        {
          to: '/sobre',
          name: 'Sobre Nós'
        },
        {
          to: '/time',
          name: 'Nosso time'
        },
        {
          to: '/servicos',
          name: 'Serviços'
        },
        {
          to: '/contato',
          name: 'Contato'
        },
        {
          to: '/parceiros',
          name: 'Parceiros'
        }
      ]
    }
  }
}
</script>

<style>
</style>