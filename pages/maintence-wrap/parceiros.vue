<template>
  <v-container >
    <v-layout>
       <v-flex xs12 class="white--text text-xs-center" data-aos="fade-left">
          <h2 class="display-1 mb-5">
            O brilho da <span class="white px-2 primary--text font-weight-bold">Building infra</span><br> não seria nada sem eles
          </h2>
        </v-flex>
    </v-layout>
    <CommentsCarousel  data-aos="fade-up" />
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

<style>

</style>