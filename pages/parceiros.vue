<template>
  <v-container>
    <v-layout>
      <v-flex xs12 class="white--text text-xs-center" data-aos="fade-left">
        <h2 class="display-1 mb-5">
          O brilho da
          <span class="white px-2 primary--text font-weight-bold"
            >Building infra</span
          ><br />
          não seria nada sem eles
        </h2>
      </v-flex>
    </v-layout>
    <v-layout>
      <v-flex xs12 data-aos="fade-up">
        <CommentsCarousel :comments="comments" />
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
  data () {
    return {
      comments: [
        {
          name: '',
          logo: '/parceiros/LogoRaj.png',
          link: 'http://www.rajweb.com.br/novo/',
          comment: 'Parceria de sistema e ERP',
          company: 'RAJ'
        },
        {
          name: '',
          logo: '/parceiros/LogoN1IT.png',
          link: 'http://n1it.com.br/homepage/',
          comment: 'Parceria de produtos Microsoft',
          company: 'N1IT'
        },
        {
          name: '',
          logo: '/parceiros/LogoAware.png',
          link: 'http://www.estudioaware.com',
          comment: 'Designer',
          company: 'Aware'
        }
      ]
    }
  }
}
</script>

<style></style>
