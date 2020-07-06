<template>
  <LayoutWrapper>
    <template v-slot:header>
      <SloganType />
    </template>
    <template v-slot:body>
      <v-container>
        <v-layout class="over-banner" v-if="false">
          <v-flex xs12>
            <v-container fluid pa-0 grid-list-md>
              <v-layout  row wrap>
                <v-flex xs12 sm4>
                  <img src="/img-1.jpg" alt="" style="max-width:100%">
                  <v-icon small color="primary" style="position:absolute">subdirectory_arrow_right</v-icon>
                  <p class="pl-3 grey--text text--darken-3 caption">
                    Entendemos que cada cliente é unico e possuimos um atendimento personalizado para cada tipo de negócio
                  </p>
                </v-flex>
                <v-flex xs12 sm4>
                  <img src="/img-2.jpg" alt="" style="max-width:100%">
                  <v-icon small color="primary" style="position:absolute">subdirectory_arrow_right</v-icon>
                  <p class="pl-3 grey--text text--darken-3 caption">
                    Flexibilidade na relação comercial desde da proposta de negócios à atualizações de contrato
                  </p>
                </v-flex>
                <v-flex xs12 sm4>
                  <img src="/img-3.jpg" alt="" style="max-width:100%">
                  <v-icon small color="primary" style="position:absolute">subdirectory_arrow_right</v-icon>
                  <p class="pl-3 grey--text text--darken-3 caption">
                    Fornecemos os recrusos qu você precisa para apoiar o seu sucesso
                  </p>
                </v-flex>
              </v-layout>
            </v-container>
          </v-flex>
        </v-layout>
        <v-layout mb-5 v-if="false">
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
            <v-btn color="primary" class="ml-0" round outline @click="$router.push('/sobre')">
              Veja mais
            </v-btn>
          </v-flex>
          <v-flex sm5 class="hidden-xs-only" ml-3 style="background-image: url(/img-sobre-1.jpg);background-size: cover;background-position: center;">
          </v-flex>
        </v-layout>
        <v-layout mb-5 v-if="false">
          <v-flex sm5 class="hidden-xs-only" mr-3 style="background-image: url(/img-pessoas.png);background-size: cover;background-position: center;">
          </v-flex>
          <v-flex xs12 sm7 pl-3 
            data-aos="fade-left"
            data-aos-duration="500">
            <h3 class="display-1 mb-3">
              Somos uma empresa<br><span class="primary--text font-weight-bold">totalmente diferente</span>
            </h3>
            <p class="grey--text text--darken-1">
              Nós nos esforcamos para ser um perceiro que você pode confiar, independente do problema nos colocamos a disposição para ajudar a melhorar cada vez mais a funcionalidade da sua empresa.
            </p>
            <p  class="grey--text text--darken-1">
              Nos orgulhamos de não ser apenas o cada dos computadores e sim mais um membro da equipe, confiável e experiente que reflete sua paixão pelo seu negócioNos orgulhamos de não ser apenas o cada dos computadores e sim mais um membro da equipe, confiável e experiente que reflete sua paixão pelo seu negócio.
            </p>
            <v-btn color="primary" class="ml-0" round outline @click="$router.push('/time')">
              Veja mais
            </v-btn>
          </v-flex>
        </v-layout>
        <v-layout row wrap v-if="false">
          <v-container grid-list-md fluid pa-0>
            <v-layout row wrap>
            <v-flex xs12 class="hidden-sm-and-up">
              <v-container fill-height fluid pa-4>
                <v-layout align-center>
                  <v-flex class="text-xs-center">
                    <h5 class="headline">
                      Confira<br>
                      <span class="primary--text font-weight-bold">nossos serviços</span>
                    </h5>
                    <p class="grey--text text--darken-3">
                      Entendemos que clientes possuem nescessidades únicas e
                      é desta forma que cada cliente é tratado. Para tanto 
                      procuramos entender junto com cada cliente suas necessidades
                    </p>
                  </v-flex>
                </v-layout>
              </v-container>
            </v-flex>
          <v-flex xs12 sm4>
            <img src="/helpdesk.jpg" alt="" style="max-width:100%">
          </v-flex>
          <v-flex sm4 class="hidden-xs-only">
            <v-container fill-height fluid pa-4>
              <v-layout align-center>
                <v-flex class="text-xs-center">
                  <h5 class="headline">
                    Confira<br>
                    <span class="primary--text font-weight-bold">nossos serviços</span>
                  </h5>
                  <p class="grey--text text--darken-3">
                    Entendemos que clientes possuem nescessidades únicas e
                    é desta forma que cada cliente é tratado. Para tanto 
                    procuramos entender junto com cada cliente suas necessidades
                  </p>
                </v-flex>
              </v-layout>
            </v-container>
          </v-flex>
          <v-flex xs12 sm4>
            <img src="/suporte.jpg" alt="" style="max-width:100%">
          </v-flex>
          </v-layout>
          <v-flex xs12>
              <v-layout row wrap>
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
          </v-flex>
          <v-flex xs12 class="text-xs-center" my-3>
            <v-btn color="primary" round outline  @click="$router.push('/servicos')">
              Veja mais
            </v-btn>
          </v-flex>
        </v-container>
        </v-layout>
        <CommentsCarousel />
      </v-container>
    </template>
  </LayoutWrapper>
</template>

<script>
import SloganType from '~/components/SloganType'
import LayoutWrapper from '~/components/LayoutWrapper'
import CommentsCarousel from '~/components/CommentsCarousel'

export default {
  components: {
    LayoutWrapper,
    CommentsCarousel,
    SloganType
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
