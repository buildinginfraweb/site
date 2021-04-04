<template>
  <div>
    <v-container>
      <v-layout class="mb-4">
        <v-flex xs12 class="white--text text-xs-center" data-aos="fade-right">
          <h2 class="display-1 mb-3">
            Adminstração
            <span class="white px-2 primary--text font-weight-bold"
              >Terceirizada</span
            >
          </h2>
          <p class="title white--text text--darken-1 font-weight-bold mb-5">
            Gerenciamento completo do depertamento de tecnologia
          </p>
          <p class="subheading white--text text--darken-1 mt-5">
            Desde do planejamento ao suporte técnico deixa com a B.I.
            <br />
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
    <v-container
      id="services"
      pa-0
      fluid
      style="max-width: 1200px"
      v-if="display"
      data-aos="flip-left"
    >
      <v-layout row wrap justify-center>
        <v-flex
          xs12
          sm6
          md4
          v-for="(card, index) in servicesList"
          :key="index"
        >
          <v-img
            class="blured-bg"
            :src="`${location}/${card.img}`"
            contain
            :alt="card.title"
          >
            <v-container class="card-container">
              <v-layout class="mt-5">
                <v-spacer></v-spacer>
                <v-flex shrink class="card-container__headline">
                  {{ card.headline }}
                </v-flex>
                <v-spacer></v-spacer>
              </v-layout>
              <v-layout>
                <v-spacer></v-spacer>
                <v-flex shrink class="card-container__title">
                  {{ card.title }}
                </v-flex>
                <v-spacer></v-spacer>
              </v-layout>
              <v-layout>
                <v-spacer></v-spacer>
                <v-flex shrink class="card-container__description" v-html="card.description">
                </v-flex>
                <v-spacer></v-spacer>
              </v-layout>
            </v-container>
          </v-img>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      display: false,
      servicesList: [
        {
          headline: 'Planejamento',
          title: 'Estratégico',
          description: 'analise dos cenários, Macro e Micro Tecnológos',
          img: '1.jpg'
        },
        {
          headline: 'Para cada caso uma',
          title: 'Solução Personalizada',
          description: 'tudo para que você seja<br>bem atendido.',
          img: '2.jpg'
        },
        {
          headline: 'Técnicos',
          title: 'In Loco',
          description: 'entendendo o seu negócio e fazendo muito por ele',
          img: '3.jpg'
        },
        {
          headline: 'Implementação de',
          title: 'Infraestrutura',
          description: 'analise dos cenário Macro e Micro Economicos',
          img: '4.jpg'
        },
        {
          headline: 'Todo apoio no',
          title: 'Service Desk',
          description:
            'implementação, manutenção e monitoramento de servidores (WINDOWS / LINUX)',
          img: '5.jpg'
        },
        {
          headline: 'Helpdesk:',
          title: 'Conhecer o cliente',
          description:
            'e descobrir nescessidades e encontrar melhores soluções',
          img: '6.jpg'
        },
        {
          headline: 'Treinamento',
          title: 'Corporativo',
          description:
            'melhores praticas online, dicas de segurança e proteção de dados',
          img: '7.jpg'
        },
        {
          headline: 'Todo foco para',
          title: 'Gestão de Produtos',
          description: 'e serviços terceiros.',
          img: '8.jpg'
        },
        {
          headline: 'Gestão de documentação, licenciamento e',
          title: 'Parque tecnológico',
          description: 'cuidamos de todo o seu negócio',
          img: '9.jpg'
        },
        {
          headline: 'Sem sustos',
          title: 'Taxa mensal',
          description:
            'à preço fixo, você sabe o que está pagando, sem "surpresinhas"',
          img: '10.jpg'
        }
      ],
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
  computed: {
    location() {
      // return 'building-infra.netlify.app/servicos/'
      return window.location.href
    }
  },
  methods: {
    async showServices() {
      this.display = true
      await new Promise(resolve => setTimeout(resolve, 300))
      this.$vuetify.goTo('#services', { offset: 0 })
    }
  }
}
</script>

<style>
.blured-bg .v-responsive__content {
  background: rgb(55 68 103 / 0.7);
}
.card-container {
  padding:  75px 12px 0px 13px
}
.card-container__headline,
.card-container__title,
.card-container__description {
  text-align: center;
  color: #ced1da;
}
.card-container__description,
.card-container__headline {
  font-size: 18px;
  margin-top: -3px;
}
.card-container__title {
  font-size: 34px;
  margin-top: -7px;
  letter-spacing: 1.2px;
}
</style>
