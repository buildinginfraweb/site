<template>
  <v-app>
    <v-navigation-drawer
          v-model="drawer"
          temporary
          fixed
          right
          dark
          width="200"
        >
        <v-container class="py-0 mt-2" fluid>
          <v-layout>
            <v-flex class="text-xs-center">
              <img src="/symbol-bg-branco.png" alt="" style="max-width:90px">
            </v-flex>
          </v-layout>
        </v-container>
      <v-list class="pt-0" dense>
        <v-divider></v-divider>
        <v-list-tile class="py-1">
          <v-list-tile-content>
            <v-list-tile-title>
              <nuxt-link to="/">
                Home
              </nuxt-link>
            </v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-divider></v-divider>
        <v-list-tile class="py-1">
          <v-list-tile-content>
            <v-list-tile-title>
              <nuxt-link to="/sobre">
                Sobre Nós
              </nuxt-link>
            </v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-divider></v-divider>
        <v-list-tile class="py-1">
          <v-list-tile-content>
            <v-list-tile-title>
              <nuxt-link to="/time">
                Nosso time
              </nuxt-link>
            </v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-divider></v-divider>
        <v-list-tile class="py-1">
          <v-list-tile-content>
            <v-list-tile-title>
              <nuxt-link to="/servicos">
                Serviços
              </nuxt-link>
            </v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-divider></v-divider>
        <v-list-tile class="py-1">
          <v-list-tile-content>
            <v-list-tile-title>
              <nuxt-link to="/contato">
                Contato
              </nuxt-link>
            </v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-btn fab fixed right bottom icon color="#25d366" @click="openWhats()">
      <svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
        width="30px" height="30px" viewBox="0 0 90 90" style="enable-background:new 0 0 90 90;fill: whitesmoke;" xml:space="preserve">
        <g>
          <path d="M90,43.841c0,24.213-19.779,43.841-44.182,43.841c-7.747,0-15.025-1.98-21.357-5.455L0,90l7.975-23.522
            c-4.023-6.606-6.34-14.354-6.34-22.637C1.635,19.628,21.416,0,45.818,0C70.223,0,90,19.628,90,43.841z M45.818,6.982
            c-20.484,0-37.146,16.535-37.146,36.859c0,8.065,2.629,15.534,7.076,21.61L11.107,79.14l14.275-4.537
            c5.865,3.851,12.891,6.097,20.437,6.097c20.481,0,37.146-16.533,37.146-36.857S66.301,6.982,45.818,6.982z M68.129,53.938
            c-0.273-0.447-0.994-0.717-2.076-1.254c-1.084-0.537-6.41-3.138-7.4-3.495c-0.993-0.358-1.717-0.538-2.438,0.537
            c-0.721,1.076-2.797,3.495-3.43,4.212c-0.632,0.719-1.263,0.809-2.347,0.271c-1.082-0.537-4.571-1.673-8.708-5.333
            c-3.219-2.848-5.393-6.364-6.025-7.441c-0.631-1.075-0.066-1.656,0.475-2.191c0.488-0.482,1.084-1.255,1.625-1.882
            c0.543-0.628,0.723-1.075,1.082-1.793c0.363-0.717,0.182-1.344-0.09-1.883c-0.27-0.537-2.438-5.825-3.34-7.977
            c-0.902-2.15-1.803-1.792-2.436-1.792c-0.631,0-1.354-0.09-2.076-0.09c-0.722,0-1.896,0.269-2.889,1.344
            c-0.992,1.076-3.789,3.676-3.789,8.963c0,5.288,3.879,10.397,4.422,11.113c0.541,0.716,7.49,11.92,18.5,16.223
            C58.2,65.771,58.2,64.336,60.186,64.156c1.984-0.179,6.406-2.599,7.312-5.107C68.398,56.537,68.398,54.386,68.129,53.938z"/>
        </g>
      </svg>
    </v-btn>
    <div class="header">
      <v-container>
        <v-layout px-4>
          <v-flex xs12>
            <v-layout align-center>
              <v-flex>
                <img src="/logo.png" alt="Logo Building Infra" height="60px">
              </v-flex>
              <v-spacer></v-spacer>
              <v-flex shrink class="hidden-xs-only">
                <v-btn class="elevation-0 support-btn" @click="$vuetify.goTo('#contact')">
                  Suporte sob demanda
                </v-btn>
              </v-flex>
              <v-flex shrink class="hidden-sm-and-up">
                <v-btn color="white" icon flat @click="drawer = true">
                  <v-icon>
                    menu
                  </v-icon>
                </v-btn>
              </v-flex>
            </v-layout>
          </v-flex>
        </v-layout>
        <v-layout px-4 row wrap>
          <v-flex xs12 mt-2 mb-3>
            <v-divider></v-divider>
          </v-flex>
        </v-layout>
        <v-layout px-4 row wrap class="hidden-xs-only">
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
    <contact-form id="contact" />
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
  methods: {
    openWhats () {
      if (navigator.userAgent.match(/Android/i) ||
        navigator.userAgent.match(/webOS/i) ||
        navigator.userAgent.match(/iPhone/i) ||
        navigator.userAgent.match(/iPad/i) ||
        navigator.userAgent.match(/iPod/i) ||
        navigator.userAgent.match(/BlackBerry/i) ||
        navigator.userAgent.match(/Windows Phone/i)) {
        window.open(`https://api.whatsapp.com/send?phone=5511976436250&text=Gostaria de algumas informações sobre:`, '_blank')
      } else {
        window.open(`https://web.whatsapp.com/send?phone=5511976436250&text=Gostaria de algumas informações sobre:`, '_blank')
      }
    }
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
    color: #1f70a5;
  }
  .header .v-divider {
    border-color: rgba(236, 236, 239, 0.05)!important;
  }
  .header .slogan {
    color: #fffeff;
  }
  @media only screen and (max-width: 600px) {
    .header .slogan {
      margin-top: -100px!important;
      position: absolute;
      top: 50%;
    }
    .header .slogan h1 {
      font-size: 77px!important
    }
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

