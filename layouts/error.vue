<template>
  <v-container >
    <v-layout row wrap align-center>
      <v-flex xs12 class="white--text text-xs-center" data-aos="fade-left">
          <h2 class="display-1 mb-5">
            Estamos em <br><span class="white px-2 primary--text font-weight-bold">manutenção</span>
          </h2>
        </v-flex>
        <v-flex xs12 class="text-xs-center" data-aos="fade-left">
          <span class="title mt-1 white--text" style="position:relative;top:2px">Precisando de Auxílio? entre em </span>
          <v-btn class="support-btn" @click="$router.push('/contato')">
            Contato
          </v-btn>
        </v-flex>
    </v-layout>
  </v-container>
</template>

<script>

export default {
}
</script>
<style>
</style>

