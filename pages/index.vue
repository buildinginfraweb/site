<template>
  <v-container>
    <v-layout mb-5>
      <v-flex xs7 pr-3>
        <h3 class="display-1 mb-3">
          Soluções em infraestrutura,<br>
          isso é <span class="primary--text font-weight-bold">Building infra</span>
        </h3>
        <p class="grey--text darken-1">
          A segurança de rede não é mais um luxo para as grandes corporações e sim uma necessidade.
        </p>
        <p  class="grey--text darken-1">
          Nossa abordagem proativa e vigilante garante que a infraestrutura de sua empresa estea atualizada e protegida contra ameaças.
        </p>
        <p  class="grey--text darken-1">
          Vamos além de suporte ao usuário e manutenção computadores também nos especializamos ao proeto de implementação de estrutura de dados e sstemas, auxiliando a manter desde do projeto inicial até a segurança da internet.
        </p>
        <v-btn color="primary" class="ml-0" round outline>
          Veja mais
        </v-btn>
      </v-flex>
      <v-flex xs5 ml-3 style="background-image: url(/img-sobre-1.jpg);background-size: cover;background-position: center;">
      </v-flex>
    </v-layout>
    <v-layout mb-5>
      <v-flex xs5 mr-3 style="background-image: url(/img-pessoas.png);background-size: cover;background-position: center;">
      </v-flex>
      <v-flex xs7 pl-3>
        <h3 class="display-1 mb-3">
          Somos uma empresa<br><span class="primary--text font-weight-bold">totalmente diferente</span>
        </h3>
        <p class="grey--text darken-1">
          Nós nos esforcamos para ser um perceiro que você pode confiar, independente do problema nos colocamos a disposição para ajudar a melhorar cada vez mais a funcionalidade da sua empresa.
        </p>
        <p  class="grey--text darken-1">
          Nos orgulhamos de não ser apenas o cada dos computadores e sim mais um membro da equipe, confiável e experiente que reflete sua paixão pelo seu negócioNos orgulhamos de não ser apenas o cada dos computadores e sim mais um membro da equipe, confiável e experiente que reflete sua paixão pelo seu negócio.
        </p>
        <v-btn color="primary" class="ml-0" round outline>
          Veja mais
        </v-btn>
      </v-flex>
    </v-layout>
    <v-layout row wrap>
      <v-flex xs12 sm4 pr-1>
        <img src="/helpdesk.jpg" alt="" style="max-width:100%">
      </v-flex>
      <v-flex xs12 sm4>
        <v-container fill-height fluid pa-4>
          <v-layout align-center>
            <v-flex class="text-xs-center">
              <h5 class="headline">
                Confira<br>
                <span class="primary--text font-weight-bold">nossos serviços</span>
              </h5>
              <p>
                entendemos que clientes possuem nescessidades únicas e
                é desta forma que cada cliente é tratado. Para tanto 
                procuramos entender junto com cada cliente suas necessidades
              </p>
            </v-flex>
          </v-layout>
        </v-container>
      </v-flex>
      <v-flex xs12 sm4 pl-1>
        <img src="/suporte.jpg" alt="" style="max-width:100%">
      </v-flex>
      <v-flex xs12>
        <v-container grid-list-md pa-0 fluid>
          <v-layout>
            <v-flex xs12 sm4>
              <img src="/infraestrutura.jpg" alt="" style="max-width:100%">
            </v-flex>
            <v-flex xs12 sm4>
              <img src="/planejamento.jpg" alt="" style="max-width:100%">
            </v-flex>
            <v-flex xs12 sm4>
              <img src="/treinamento.jpg" alt="" style="max-width:100%">
            </v-flex>
          </v-layout>
        </v-container>
      </v-flex>
      <v-flex xs12 class="text-xs-center" my-3>
        <v-btn color="primary" round outline>
          Veja mais
        </v-btn>
      </v-flex>
    </v-layout>
    <CommentsCarousel />
  </v-container>
</template>

<script>
import CommentsCarousel from '~/components/CommentsCarousel'
export default {
  components: {
    CommentsCarousel
  }
}
</script>
