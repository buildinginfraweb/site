<template>
  <v-container>
    <v-layout mb-5>
      <v-flex xs12 sm7 pr-3
         data-aos="fade-right"
        data-aos-duration="500">
        <h3 class="display-1 mb-3">
          Soluções em infraestrutura,<br>
          isso é <span class="primary--text font-weight-bold">Building infra</span>
        </h3>
        <p class="grey--text text--darken-1">
          A segurança de rede não é mais um luxo para as grandes corporações e sim uma necessidade.
        </p>
        <p  class="grey--text text--darken-1">
          Nossa abordagem proativa e vigilante garante que a infraestrutura de sua empresa estea atualizada e protegida contra ameaças.
        </p>
        <p  class="grey--text text--darken-1">
          Vamos além de suporte ao usuário e manutenção computadores também nos especializamos ao proeto de implementação de estrutura de dados e sstemas, auxiliando a manter desde do projeto inicial até a segurança da internet.
        </p>
      </v-flex>
      <v-flex sm5 class="hidden-xs-only" ml-3 style="background-image: url(/img-sobre-1.jpg);background-size: cover;background-position: center;">
      </v-flex>
    </v-layout>
    <v-layout mb-5 class="grey--text text--darken-1">
      <v-flex sm5 class="hidden-xs-only" mr-3 style="background-image: url(/sobre-2.jpg);background-size: cover;background-position: center;">
      </v-flex>
      <v-flex xs12 sm7 pl-3 
         data-aos="fade-left"
        data-aos-duration="500">
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
          Pariatur vel doloribus, minima ut deleniti quas. Ipsa, quae facere. Doloremque nobis sequi quasi amet aspernatur. Dicta quo expedita ab a aliquam.
        </p>
        <p>
          <v-icon small color="primary">
            check_circle_outline
          </v-icon>
          Conte com especialistas na área 
        </p>
        <p>
          <v-icon small color="primary">
            check_circle_outline
          </v-icon>
          Foco na gestão de infraestrutura 
        </p>
        <p>
          <v-icon small color="primary">
            check_circle_outline
          </v-icon>
          Suporte 24hrs
        </p>
      </v-flex>
    
    </v-layout>
    <v-layout row wrap>
      <v-flex xs12>
        <h3 class="display-1 mb-3 text-xs-center">
        Nosso <span class="primary--text font-weight-bold">diferencial</span>
        </h3>
      </v-flex>
      <v-flex xs12>
        <p class="grey--text">
          - Atendimento personalizado: soluções para cada tipo de negócio
        </p>
      </v-flex>
      <v-flex>
        <p class="grey--text ligthen-1">
          - Não somos engessados: flexibilidade na relação comercial desde da proposta de negócios á atualizações de contrato
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
    head () {
    return {
      title: 'Building Infra',
      meta: [
        { hid: 'description', name: 'description', content: 'My custom description' }
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
