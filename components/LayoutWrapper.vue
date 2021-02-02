<template>
  <div>
    <v-navigation-drawer
          v-model="drawer"
          temporary
          fixed
          right
          dark
          class="nav"
          width="200"
        >
      <v-list class="pt-0 text-xs-center" dense>
        <v-list-tile class="py-5 mb-4" style="height:80px">
          <v-list-tile-content class="text-xs-center"  style="height:80px">
              <img src="/symbol-bg-branco.png" alt="" style="margin:auto;max-width:90px">
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile class="py-1" v-for="page in pages" :key="page.name">
          <v-list-tile-content>
            <v-list-tile-title>
              <nuxt-link :to="page.to">
                {{ page.name }}
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
                <v-btn class="elevation-0 support-btn" href="https://buildinginfrabr.sharepoint.com/sites/buildininfra/SitePages/Portal-de-Atendimento-ao-Cliente.aspx">
                  ÁREA DE CLIENTE
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
          <v-flex px-3 shrink v-for="page in pages" :key="page.name">
            <nuxt-link :to="page.to">
              {{ page.name }}
            </nuxt-link>
          </v-flex>
        </v-layout>
          <slot name="header"></slot>
      </v-container>
    </div>
    <v-content>
      <v-container id="main-section">
        <slot name="body"></slot>
        <nuxt />
      </v-container>
    </v-content>
    <contact-form id="contact" />
    <FooterMenu />
  </div>
</template>

<script>
import ContactForm from '~/components/ContactForm'
import FooterMenu from '~/components/FooterMenu'

export default {
  components: {
    ContactForm,
    FooterMenu
  },
  props: {
    banner: {
      type: Number,
      default: 1
    }
  },
  data() {
    return {
      drawer: false,
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
      ],
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
        window.open(`https://api.whatsapp.com/send?phone=551143829676&text=Gostaria de algumas informações sobre:`, '_blank')
      } else {
        window.open(`https://web.whatsapp.com/send?phone=551143829676&text=Gostaria de algumas informações sobre:`, '_blank')
      }
    }
  }
}
</script>
<style>

</style>

