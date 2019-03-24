<template>
  <v-app>
    <v-content>
      <v-container>
        <nuxt />
      </v-container>
    </v-content>
    <contact-form />
    <v-container fluid pa-4 class="grey darken-4 footer text-xs-center">
      <v-layout :column="$vuetify.breakpoint.xs" wrap>
        <v-spacer></v-spacer>
        <v-flex px-3 shrink>
          <nuxt-link to="/">
            Home
          </nuxt-link>
        </v-flex>
        <v-flex px-3 shrink>
          <nuxt-link to="/sobre">
            Sobre Nós
          </nuxt-link>
        </v-flex>
        <v-flex px-3 shrink>
          <nuxt-link to="/time">
            Nosso time
          </nuxt-link>
        </v-flex>
        <v-flex px-3 shrink>
          <nuxt-link to="/servicos">
            Serviços
          </nuxt-link>
        </v-flex>
        <v-flex px-3 shrink>
          <nuxt-link to="/contato">
            Contato
          </nuxt-link>
        </v-flex>
        <v-spacer></v-spacer>
      </v-layout>
      <v-layout>
        <v-flex class="text-xs-center pt-2">
          © {{ new Date().getFullYear() }} Building Infra todos os direitos reservados
        </v-flex>
      </v-layout>
    </v-container>
  </v-app>
</template>

<script>
import ContactForm from '~/components/ContactForm'
export default {
  components: {
    ContactForm
  },
  data() {
    return {
      clipped: false,
      drawer: false,
      fixed: false,
      items: [
        {
          icon: 'apps',
          title: 'Welcome',
          to: '/'
        },
        {
          icon: 'bubble_chart',
          title: 'Inspire',
          to: '/inspire'
        }
      ],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: 'Vuetify.js'
    }
  },
  mounted () {
    console.log(this.$vuetify)
  }
}
</script>
<style>
 .footer a, .footer{
   text-decoration: none;
   color:#c8c8c8;
 }
</style>

