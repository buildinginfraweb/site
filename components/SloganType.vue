<template>
  <v-container>
    <v-layout px-4 class="slogan">
      <v-flex shrink class="white--text">
        <h1 class="font-weight-bold">We do it</h1>
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
                  :text="['relax... ', 'sell... ', 'enjoy...', 'grow...  ']"
                  :repeat="Infinity"
                  :shuffle="false"
                  initial-action="erasing"
                  :pre-type-delay="70"
                  :type-delay="70"
                  :pre-erase-delay="2000"
                  :erase-delay="250"
                  erase-style="backspace"
                  :erase-on-complete="false"
                  caret-animation="blink"
                ></vue-typer>
              </no-ssr>
            </h2>
          </v-flex>
        </v-layout>
      </v-flex>
      <v-spacer></v-spacer>
    </v-layout>
    <v-layout px-4 class="slogan">
      <v-spacer></v-spacer>
      <v-flex shrink class="white--text">
        <h1 class="font-weight-bold">Nós fazemos</h1>
        <v-layout>
          <v-flex shrink>
            <h2 class="display-1">
              e você&nbsp;
            </h2>
          </v-flex>
          <v-flex>
            <h2 class="display-1">
              <no-ssr>
                <vue-typer
                  :text="['relaxa...', 'vende...', 'curte...', 'cresce...']"
                  :repeat="Infinity"
                  :shuffle="false"
                  initial-action="erasing"
                  :pre-type-delay="70"
                  :type-delay="70"
                  :pre-erase-delay="2000"
                  :erase-delay="250"
                  erase-style="backspace"
                  :erase-on-complete="false"
                  caret-animation="blink"
                ></vue-typer>
              </no-ssr>
            </h2>
          </v-flex>
        </v-layout>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
if (process.browser) {
  var VueTyper = require('vue-typer').VueTyper
}

export default {
  components: {
    VueTyper
  },
  computed: {
    pages () {
      return [
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
  .slogan {
    color: #fffeff;
    margin-bottom: 48px;
  }
  .slogan h1 {
    font-size: 112px!important
  }
  .slogan:last-child {
      margin-bottom: 12px;
  }
  @media only screen and (max-width: 600px) {
    .slogan {
      color: #fffeff;
      margin-top: 0px;
      padding-top: 0px;
    }
    /* .header .slogan:first-child {
      margin-top: -200px!important;
      position: absolute;
      top: 50%;
    }
    .header .slogan:last-child {
      margin-top: 0px!important;
      position: absolute;
      top: 50%;
    } */
    .slogan:last-child {
      margin-bottom: 12px;
    }
    .slogan h1 {
      font-size: 77px!important
    }
  }
</style>
