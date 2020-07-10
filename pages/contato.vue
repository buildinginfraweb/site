<template>
  <v-container class="main-content">
    <v-layout row wrap>
      <v-flex xs12>
        <v-flex xs12 class="white--text text-xs-center" data-aos="fade-right">
          <h2 class="display-1 mb-5">
            Entre em <span class="white px-2 primary--text font-weight-bold">contato</span> conosco agora<br> agende uma visita comercial
          </h2>
        </v-flex>
        <v-layout row wrap class="text-xs-center"  data-aos="fade-up" >
          <v-spacer></v-spacer>
          <v-flex xs12 sm5 class="title mb-4 white--text text--darken-1">
            <v-icon size="40" color="white"  class="mb-2">mail</v-icon>
            <br />
            <a
              href="mailto:contato@buildinginfra.com.br"
              style="text-decoration: none;"
              class="white--text title"
            >contato@buildinginfra.com.br</a>
          </v-flex>
          <v-spacer></v-spacer>
          <v-flex xs12 sm5 class="title mb-4 white--text text--darken-1">
            <v-icon size="40" color="white" class="mb-2">phone</v-icon>
            <br />
            <a
              href="tel:+551143829676"
              style="text-decoration: none;"
              class="white--text title"
            >(11) 4382-9676</a>
          </v-flex>
          <v-spacer></v-spacer>
        </v-layout>
        <v-layout align-center class="my-5"  data-aos="fade-up" >
          <v-spacer class="hidden-xs-only"></v-spacer>
          <v-spacer class="hidden-xs-only"></v-spacer>
          <v-divider class="white"></v-divider>
          <v-flex shrink class="px-4 title white--text">ou</v-flex>
          <v-divider class="white"></v-divider>
          <v-spacer class="hidden-xs-only"></v-spacer>
          <v-spacer class="hidden-xs-only"></v-spacer>
        </v-layout>
        <v-layout  data-aos="fade-up" >
          <v-spacer></v-spacer>
          <v-flex shrink>
            <ContactDialog />
          </v-flex>
          <v-spacer></v-spacer>
        </v-layout>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import ContactDialog from '@/components/ContactDialog'
export default {
  components: {
    ContactDialog
  }
}
</script>

<style>
.maps-frame {
  min-height: 400px;
  width: calc(100% + 60px);
  position: relative;
  left: -30px;
  top: 35px;
}
</style>
