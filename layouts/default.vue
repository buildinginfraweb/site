<template>
  <v-app>
    <div class="header">
      <v-container>
        <v-layout px-4>
          <v-flex xs12>
            <v-layout align-center>
              <v-flex>
                <img src="/logo.png" alt="Logo Building Infra" height="60px">
              </v-flex>
              <v-spacer></v-spacer>
              <v-flex shrink>
                <v-btn class="elevation-0 support-btn">
                  Suporte sob demanda
                </v-btn>
              </v-flex>
            </v-layout>
          </v-flex>
        </v-layout>
        <v-layout px-4 row wrap>
          <v-flex xs12 mt-2 mb-3>
            <v-divider></v-divider>
          </v-flex>
          <v-flex shrink px-3>
            <nuxt-link to="/" class="selected">
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
        </v-layout>
        <v-layout px-4 class="slogan mt-5 pt-4">
          <v-spacer></v-spacer>
          <v-flex shrink class="white--text">
            <h1 class="display-4 font-weight-bold">We do it</h1>
            <v-layout>
              <v-flex shrink>
                <h2 class="display-1">
                  and you&nbsp;
                </h2>
              </v-flex>
              <v-flex>
                <h2 class="display-1">
                  <no-ssr>
                    <vue-typer
                      :text='["relax...","sell...","enjoy...","grow..."]'
                      :repeat='Infinity'
                      :shuffle='false'
                      initial-action='erasing'
                      :pre-type-delay='70'
                      :type-delay='70'
                      :pre-erase-delay='2000'
                      :erase-delay='250'
                      erase-style='backspace'
                      :erase-on-complete='false'
                      caret-animation='blink'
                    ></vue-typer>
                  </no-ssr>
                </h2>
              </v-flex>
            </v-layout>
          </v-flex>
        </v-layout>
      </v-container>
    </div>
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
if (process.browser) {
  var VueTyper = require('vue-typer').VueTyper
}
export default {
  components: {
    ContactForm,
    VueTyper
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
  .support-btn {
    border-radius: 8px;
    background: linear-gradient(140deg,#2bb6fc,#2867b5);
    color: #fffeff!important;
  }
  .header {
    background-image: url('/banner-1.jpg');
    height: 100vh;
    min-height: 100vh;
    background-position: center;
    background-size: cover;
  }
  .header a {
    text-decoration: none;
    color: #fffeff;
    text-transform: uppercase;
    font-size: 12px;
    font-weight: 600;
  }
  .header a.nuxt-link-active {
    color: #1f70a5;
  }
  .header .v-divider {
    border-color: rgba(236, 236, 239, 0.05)!important;
  }
  .header .slogan {
    color: #fffeff;
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
</style>

