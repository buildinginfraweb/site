<template>
  <v-container pa-0 fluid>
    <v-layout class="mb-4">
      <v-flex xs12 class="text-xs-center">
        <h2 class="display-1 mb-3">
          Adminstração
          <br>
          <span class="primary--text font-weight-bold">terceirizada</span>
        </h2>
        <p class="grey--text text--darken-1 font-weight-bold">
          Gerenciamento completo do depertamento de tecnologia
        </p>
        <p class="grey--text text--darken-1">
          Desde do planejamento ao suporte técnico deixa com a B.I.
          <br>
          Nossos serviços gerenciais:
        </p>
      </v-flex>
    </v-layout>
    <v-layout class="mb-4">
      <v-container fluid pa-0 grid-list-md>
        <v-layout row wrap justify-space-between>
          <v-flex xs12 sm6 md4 v-for="(card, index) in servicos" :key="index"  data-aos="flip-left">
            <v-img :src="card.image" :alt="card.alt" />
          </v-flex>
        </v-layout>
      </v-container>
    </v-layout>
    <!-- <v-layout row wrap>
      <v-flex xs12 class="text-xs-center">
        <h2 class="display-1 mb-3">
          Adminstração
        </h2>
      </v-flex>
      <v-flex>
        <v-img></v-img>
      </v-flex>
    </v-layout> -->
  </v-container>
</template>

<script>
export default {
  data () {
    return {
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
  }
}
</script>

<style>

</style>
