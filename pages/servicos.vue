<template>
  <div>
    <v-container pa-0 fluid class="main-content">
    <v-layout class="mb-4">
      <v-flex xs12 class="white--text text-xs-center">
        <h2 class="display-3 mb-3">
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
          <v-btn outline round color="white">
            Conheça os serviços
          </v-btn>
        </p>
      </v-flex>
    </v-layout>
    </v-container>
    <v-container pa-0 fluid class="white">
    <v-layout>
      <v-container fluid pa-0 grid-list-md style="max-width: 1200px">
        <v-layout row wrap justify-space-between>
          <v-flex xs12 sm6 md4 v-for="(card, index) in servicos" :key="index"  data-aos="flip-left">
            <v-img :src="card.image" :alt="card.alt" />
          </v-flex>
        </v-layout>
      </v-container>
    </v-layout>
  </v-container>
  </div>
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
