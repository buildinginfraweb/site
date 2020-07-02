<template>
  <v-container>
    <v-layout mb-5>
      <v-flex xs12 sm7 pr-3 data-aos="fade-right" data-aos-duration="500">
        <h3 class="display-1 mb-3">
          Soluções em infraestrutura,
          <br />isso é
          <span class="primary--text font-weight-bold">BuildingInfra</span>
        </h3>
        <p
          class="grey--text text--darken-1"
        >A segurança de rede não é mais um luxo para as grandes corporações e sim uma necessidade.</p>
        <p
          class="grey--text text--darken-1"
        >Nossa abordagem proativa e vigilante garante que a infraestrutura de sua empresa esteja atualizada e protegida contra ameaças.</p>
        <p
          class="grey--text text--darken-1"
        >Vamos além de suporte ao usuário e manutenção computadores também nos especializamos em Projetos de infraestrutura de Rede e Dados, Segurança na internet, LGPD, Microsoft 365, Segurança em CoWorking/HomeOffice e Treinamentos.</p>
      </v-flex>
      <v-flex
        sm5
        class="hidden-xs-only"
        ml-3
        style="background-image: url(/img-sobre-1.jpg);background-size: cover;background-position: center;"
      ></v-flex>
    </v-layout>
    <v-layout mb-5 class="">
      <v-flex
        sm5
        class="hidden-xs-only"
        mr-3
        style="background-image: url(/sobre-2.jpg);background-size: cover;background-position: center;"
      ></v-flex>
      <v-flex xs12 sm7 pl-3 data-aos="fade-left" data-aos-duration="500">
        <p class="grey--text text--darken-1">Para BuildingInfra cada cliente é um parceiro, e queremos mostrar ao cliente que nós vamos além de um prestador de serviço, buscamos fazer parte de sua equipe, com transparência fornecemos nossas ideias e soluções e estamos dispostos a arregaçar as mangas para fazer o melhor para aproximar ainda mais do sucesso que nossos clientes buscam.</p>
      </v-flex>
    </v-layout>
    <v-layout>
      <v-flex>
        <h3 class="display-1 mb-3 text-xs-center">
          Nosso
          <span class="primary--text font-weight-bold">Objetivo</span>
        </h3>
        <p class="grey--text">Alcançar a excelência no atendimento, fornecendo consultoria e soluções adequadas para o crescimento de nossos clientes.</p>
      </v-flex>
    </v-layout>
    <v-layout row wrap>
      <v-flex xs12>
        <h3 class="display-1 mb-3 text-xs-center">
          Nosso
          <span class="primary--text font-weight-bold">diferencial</span>
        </h3>
      </v-flex>
      <v-flex xs12>
        <p class="grey--text">
          <v-icon small color="primary">check_circle_outline</v-icon>Atendimento personalizado, caso a caso, para cada necessidade do cliente uma solução personalizada.
        </p>
      </v-flex>
      <v-flex>
        <p class="grey--text ligthen-1">
          <v-icon small color="primary">check_circle_outline</v-icon>Ouvir, estudar e entender a operação e a real necessidade de nossos clientes.
        </p>
      </v-flex>
      <v-flex>
        <p class="grey--text ligthen-1">
          <v-icon small color="primary">check_circle_outline</v-icon>Treinamento e consultoria especializada.
        </p>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import CommentsCarousel from '~/components/CommentsCarousel'
export default {
  components: {
    CommentsCarousel
  },
  head() {
    return {
      title: 'Building Infra',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'My custom description'
        }
      ]
    }
  }
}
</script>

<style>
@media only screen and (min-width: 600px) {
  .over-banner {
    position: relative;
    top: -175px;
    height: 150px;
  }
}
</style>
