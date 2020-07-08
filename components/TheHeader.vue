<template>
  <div>
    <v-navigation-drawer v-model="drawer" temporary fixed right dark class="nav" width="200">
      <v-list class="pt-0 text-xs-center" dense>
        <v-list-tile class="py-5 mb-4" style="height:80px">
          <v-list-tile-content class="text-xs-center" style="height:80px">
            <img src="/symbol-bg-branco.png" alt style="margin:auto;max-width:90px" />
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile class="py-1" v-for="page in pages" :key="page.name">
          <v-list-tile-content>
            <v-list-tile-title>
              <nuxt-link :to="page.to">{{ page.name }}</nuxt-link>
            </v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <div class="header-image">
      <transition name="component-fade" mode="out-in">
        <div class="header-image__img header-image__img--2" v-if="$route.name === 'contato'">
        </div>
        <div class="header-image__img header-image__img--3" v-else-if="$route.name === 'time'">
        </div>
        <div class="header-image__img header-image__img--4" v-else-if="$route.name === 'sobre'">
        </div>
        <div class="header-image__img header-image__img--5" v-else-if="$route.name === 'servicos'">
        </div>
        <div class="header-image__img header-image__img--6" v-else-if="$route.name === 'parceiros'">
        </div>
        <div class="header-image__img  header-image__img--1" v-else>
        </div>
      </transition>
      <div class="header-image__overlay">
      </div>
    </div>
    <div class="header">
      <v-container>
        <v-layout px-4>
          <v-flex xs12>
            <v-layout align-center>
              <v-flex>
                <img src="/logo-mix.png" alt="Logo Building Infra" height="60px" />
              </v-flex>
              <v-spacer></v-spacer>
              <v-flex shrink class="hidden-xs-only">
                <v-btn
                  class="elevation-0 support-btn"
                  href="https://buildinginfrabr.sharepoint.com/sites/buildininfra/SitePages/Portal-de-Atendimento-ao-Cliente.aspx"
                >Atendimento ao Cliente</v-btn>
              </v-flex>
              <v-flex shrink class="hidden-sm-and-up">
                <v-btn color="white" icon flat @click="drawer = true">
                  <v-icon>menu</v-icon>
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
            <nuxt-link :to="page.to">{{ page.name }}</nuxt-link>
          </v-flex>
        </v-layout>
        <slot name="header"></slot>
      </v-container>
    </div>
  </div>
</template>

<script>
export default {
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
      ]
    }
  }
}
</script>

<style>
</style>