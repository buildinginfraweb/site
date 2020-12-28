<template>
  <div>
    <v-container>
      <v-layout class="mb-4">
        <v-flex xs12 class="white--text text-xs-center" data-aos="fade-right">
          <h2 class="display-1 mb-3">
            Adminstração
            <span class="white px-2 primary--text font-weight-bold">Terceirizada</span>
          </h2>
          <p class="title white--text text--darken-1 font-weight-bold mb-5">
            Gerenciamento completo do depertamento de tecnologia
          </p>
          <p class="subheading white--text text--darken-1 mt-5">
            Desde do planejamento ao suporte técnico deixa com a B.I.
            <br>
            Nossos serviços gerenciais:
          </p>
          <p class="mt-5 pt-5">
            <v-btn outline round color="white" @click="showServices">
              Conheça os serviços
            </v-btn>
          </p>
        </v-flex>
      </v-layout>
    </v-container>
    <v-container id="services" pa-0 fluid style="max-width: 1200px" v-if="display">
      <v-layout row wrap justify-space-between>
        <v-flex xs12 sm6 md4 v-for="(card, index) in servicos" :key="index" data-aos="flip-left">
          <v-img :src="card.image" :alt="card.alt" />
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
export default {
  data () {
    return {
      display: false,
      servicos: [
        {
          image: '/planejamento.jpg',
          alt: 'Planejamento estratégico'
        },
        {
          image: '/solucao-personalizada.jpg',
          alt: 'Solução Personalizada'
        },
        {
          image: '/inloco.jpg',
          alt: 'in loco'
        },
        {
          image: '/infraestrutura.jpg',
          alt: 'Implementação de infraestrutura'
        },
        {
          image: '/service-desk.jpg',
          alt: 'Apoio em service desk'
        },
        {
          image: '/helpdesk2.jpg',
          alt: 'Conhecer o cliente'
        },
        {
          image: '/treinamento.jpg',
          alt: 'Treinamento corporativo'
        },
        {
          image: '/gestao-produtos.jpg',
          alt: 'Gestão de produtos'
        },
        {
          image: '/parque-tecnologico.jpg',
          alt: 'Gestão de documentos'
        },
        {
          image: '/taxa-mensal.jpg',
          alt: 'Sem sustos, taxa mensal'
        }
        // {
        //   image: '/gestao-de-equipe.jpg',
        //   alt: 'Acrecente mais know how'
        // }
      ]
    }
  },
  methods: {
    async showServices () {
      this.display = true;
      await new Promise(resolve => setTimeout(resolve, 300))
      this.$vuetify.goTo('#services', {offset: 0})
    }
  }
}
</script>

<style>

</style>
