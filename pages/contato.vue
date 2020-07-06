<template>
  <v-container class="main-content">
    <v-layout row wrap>
      <v-flex xs12>
        <h2 class="mb-5 white--text font-weight-bold text-xs-center" :class="[$vuetify.breakpoint.xsOnly ? 'display-1' : 'display-4', $vuetify.breakpoint.xsOnly ? 'pb-0' : 'pb-5']">Entre em contato</h2>
        <v-layout row wrap class="text-xs-center">
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
        <v-layout align-center class="my-5">
          <v-spacer class="hidden-xs-only"></v-spacer>
          <v-spacer class="hidden-xs-only"></v-spacer>
          <v-divider class="white"></v-divider>
          <v-flex shrink class="px-4 title white--text">ou</v-flex>
          <v-divider class="white"></v-divider>
          <v-spacer class="hidden-xs-only"></v-spacer>
          <v-spacer class="hidden-xs-only"></v-spacer>
        </v-layout>
        <v-layout>
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
