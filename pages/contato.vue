<template>
  <v-container>
    <v-layout row wrap>
      <v-flex xs12 sm6>
         <h2 class="display-1 mb-5">
          Entre em contato com a 
          <br>
          <span class="primary--text font-weight-bold">Building Infra</span>
        </h2>
        <!-- Rua Capitão Salinas, 281 - Sala 02 Jd. Universal - Barueri -->
        <v-layout>
          <v-flex class="title mb-2 grey--text text--darken-1">
            Por email:
          </v-flex>
        </v-layout>
        <v-layout align-center>
          <v-flex shrink>
            <v-icon small color="primary">
              mail
            </v-icon>
          </v-flex>
          <v-flex shrink class="pl-2">
             <a href="mailto:contato@buildinginfra.com.br" style="text-decoration: none;" class="primary--text">
              contato@buildinginfra.com.br
            </a>
          </v-flex>
        </v-layout>
        <v-layout align-center class="my-4">
          <v-divider></v-divider>
          <v-flex shrink class="px-4 grey--text">
            ou
          </v-flex>
          <v-divider></v-divider>
          <v-spacer class="hidden-xs-only"></v-spacer>
        </v-layout>
        <v-layout>
          <v-flex class="title mb-2 grey--text text--darken-1">
            Pelo numero:
          </v-flex>
        </v-layout>
        <v-layout align-center>
          <v-flex shrink>
            <v-icon small color="primary">
              phone
            </v-icon>
          </v-flex>
          <v-flex shrink class="pl-2">
             <a href="tel:+551143829676" style="text-decoration: none;" class="primary--text">
              (11) 4382-9676
            </a>
          </v-flex>
        </v-layout>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
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
