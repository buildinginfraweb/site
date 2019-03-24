<template>
  <v-container>
    <v-layout row wrap>
      <v-flex xs12 md4 style="opacity: 0.6">
        <v-carousel v-model="first" hide-controls hide-delimiters class="elevation-0">
          <v-carousel-item v-for="(client, index) in comments" :key="index" reverse-transition="fade-transition" transition="fade-transition">
            <v-container>
              <v-layout>
                <v-spacer></v-spacer>
                <v-flex shrink>
                  <v-avatar size="60">
                    <img :src="client.avatar" alt="">
                  </v-avatar>
                </v-flex>
                <v-spacer></v-spacer>
              </v-layout>
              <v-layout row wrap>
                <v-flex xs12 mt-3 class="text-xs-center">
                  {{ client.comment }}
                </v-flex>
                <v-flex xs12 mt-3 class="text-xs-center">
                  <v-icon color="primary">alternate_email</v-icon>
                </v-flex>
                <v-flex xs12 mt-2 class="grey--text text-xs-center text--darken-3 font-weight-bold">
                  <a :href="client.link" style="text-decoration:none">{{ client.name }}</a>
                </v-flex>
                <v-flex xs12 class="grey--text text--ligthen-3 text-xs-center">
                  {{ client.company }}
                </v-flex>
              </v-layout>
            </v-container>
          </v-carousel-item>
        </v-carousel>
      </v-flex>
      <v-flex xs12 md4>
        <v-carousel v-model="second" hide-controls hide-delimiters class="elevation-0">
          <v-carousel-item v-for="(client, index) in comments" :key="index" reverse-transition="fade-transition" transition="fade-transition">
            <v-container>
              <v-layout>
                <v-spacer></v-spacer>
                <v-flex shrink>
                  <v-avatar size="60">
                    <img :src="client.avatar" alt="">
                  </v-avatar>
                </v-flex>
                <v-spacer></v-spacer>
              </v-layout>
              <v-layout row wrap>
                <v-flex xs12 mt-3 class="text-xs-center">
                  {{ client.comment }}
                </v-flex>
                <v-flex xs12 mt-3 class="text-xs-center">
                  <v-icon color="primary">alternate_email</v-icon>
                </v-flex>
                <v-flex xs12 mt-2 class="grey--text text-xs-center text--darken-3 font-weight-bold">
                  <a :href="client.link" style="text-decoration:none">{{ client.name }}</a>
                </v-flex>
                <v-flex xs12 class="grey--text text--ligthen-3 text-xs-center">
                  {{ client.company }}
                </v-flex>
              </v-layout>
            </v-container>
          </v-carousel-item>
        </v-carousel>
      </v-flex>
      <v-flex xs12 md4 class="" style="opacity: 0.6">
        <v-carousel  v-model="third" hide-controls hide-delimiters class="elevation-0">
          <v-carousel-item v-for="(client, index) in comments" :key="index" reverse-transition="fade-transition" transition="fade-transition">
            <v-container>
              <v-layout>
                <v-spacer></v-spacer>
                <v-flex shrink>
                  <v-avatar size="60">
                    <img :src="client.avatar" alt="">
                  </v-avatar>
                </v-flex>
                <v-spacer></v-spacer>
              </v-layout>
              <v-layout row wrap>
                <v-flex xs12 mt-3 class="text-xs-center">
                  {{ client.comment }}
                </v-flex>
                <v-flex xs12 mt-3 class="text-xs-center">
                  <v-icon color="primary">alternate_email</v-icon>
                </v-flex>
                <v-flex xs12 mt-2 class="grey--text text-xs-center text--darken-3 font-weight-bold">
                  <a :href="client.link" style="text-decoration:none">{{ client.name }}</a>
                </v-flex>
                <v-flex xs12 class="grey--text text--ligthen-3 text-xs-center">
                  {{ client.company }}
                </v-flex>
              </v-layout>
            </v-container>
          </v-carousel-item>
        </v-carousel>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  data () {
    return {
      first: 0,
      second: 1,
      third: 2,
      comments: [
        {
          name: 'Renato Vicente Frison',
          avatar: 'https://renato66.github.io/img/profile.png',
          link: 'https://renato66.github.io',
          comment: 'Gostei muito do profissionalismo, a comunicação foi perfeita para que tivessemos uma migração calma e tranquila',
          company: 'Freelancer'
        },
        {
          name: 'Camila Azevedo Marques',
          avatar: 'https://randomuser.me/api/portraits/med/women/65.jpg',
          link: 'https://google.com.br',
          comment: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore',
          company: 'Google Inc.'
        },
        {
          name: 'Bruna Dalaqua Silva',
          avatar: 'https://randomuser.me/api/portraits/med/women/75.jpg',
          link: 'https://google.com.br',
          comment: 'Drud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore',
          company: 'Amazon'
        }
      ]
    }
  }
}
</script>
