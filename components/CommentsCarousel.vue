<template>
  <v-container pb-0 fluid>
    <v-layout mb-2>
      <v-flex class="white--text text--darken-3 text-xs-center display-1 hidden-sm-and-up">
        O que dizem sobre<br>
        nós da <span class="no-wrap white primary--text px-3 font-weight-bold">Building Infra</span>
      </v-flex>
    </v-layout>
    <v-layout row wrap>
      <v-flex xs12 sm4 md4 style="opacity: 0.6" class="hidden-sm-and-down">
        <v-carousel dark height="360" :value="first" hide-controls hide-delimiters class="elevation-0"  :cycle="false">
          <v-carousel-item v-for="(client, index) in comments" :key="index">
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
                <v-flex xs12 mt-3 class="white--text text-xs-center">
                  {{ client.comment }}
                </v-flex>
                <v-flex xs12 mt-3 class="white--text text-xs-center">
                  <v-icon color="white">alternate_email</v-icon>
                </v-flex>
                <v-flex xs12 mt-2 class="white--text text-xs-center text--darken-3 font-weight-bold">
                  <a :href="client.link" class="white px-3 primary--text" target="_blank" style="text-decoration:none">{{ client.name }}</a>
                </v-flex>
                <v-flex xs12 class="white--text text--ligthen-3 text-xs-center">
                  {{ client.company }}
                </v-flex>
              </v-layout>
            </v-container>
          </v-carousel-item>
        </v-carousel>
      </v-flex>
      <v-flex xs12 md4>
        <v-carousel dark  height="360" :value="second" hide-controls hide-delimiters class="elevation-0" :cycle="false">
          <v-carousel-item v-for="(client, index) in comments" :key="index">
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
                <v-flex xs12 mt-3 class="white--text text-xs-center">
                  {{ client.comment }}
                </v-flex>
                <v-flex xs12 mt-3 class="white--text text-xs-center">
                  <v-icon color="white">alternate_email</v-icon>
                </v-flex>
                <v-flex xs12 mt-2 class="white--text text-xs-center text--darken-3 font-weight-bold">
                  <a :href="client.link" class="white px-3 primary--text" target="_blank" style="text-decoration:none">{{ client.name }}</a>
                </v-flex>
                <v-flex xs12 class="white--text text--ligthen-3 text-xs-center">
                  {{ client.company }}
                </v-flex>
              </v-layout>
            </v-container>
          </v-carousel-item>
        </v-carousel>
      </v-flex>
      <v-flex xs12 sm4 md4 class="hidden-sm-and-down" style="opacity: 0.6">
        <v-carousel dark height="360" :value="third" hide-controls hide-delimiters class="elevation-0"  :cycle="false">
          <v-carousel-item v-for="(client, index) in comments" :key="index">
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
                <v-flex xs12 mt-3 class="white--text text-xs-center">
                  {{ client.comment }}
                </v-flex>
                <v-flex xs12 mt-3 class="white--text text-xs-center">
                  <v-icon color="white">alternate_email</v-icon>
                </v-flex>
                <v-flex xs12 mt-2 class="white--text text-xs-center text--darken-3 font-weight-bold">
                  <a :href="client.link" class="white px-3 primary--text" target="_blank" style="text-decoration:none">{{ client.name }}</a>
                </v-flex>
                <v-flex xs12 class="white--text text--ligthen-3 text-xs-center">
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
      unactiveFirst: 1,
      activeCommentary: 2,
      unactiveLast: 0,
      comments: [
        {
          name: 'Renato Vicente Frison',
          avatar: 'https://randomuser.me/api/portraits/med/men/64.jpg',
          link: 'https://renato66.github.io',
          comment: 'Gostei muito do profissionalismo, a comunicação foi perfeita para que tivessemos uma migração calma e tranquila',
          company: 'Freelancer'
        },
        {
          name: 'Camila Azevedo Marques',
          avatar: 'https://randomuser.me/api/portraits/med/women/65.jpg',
          link: 'https://google.com.br',
          comment: 'Lorem ipsum dolor magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore',
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
  },
  methods: {
    play (value) {
      if (value === this.comments.length) {
        return 1
      }
      return value + 1
    }
  },
  computed: {
    first () {
      return this.unactiveFirst
    },
    second () {
      return this.activeCommentary
    },
    third () {
      return this.unactiveLast
    }
  },
  async mounted () {
    this.unactiveLast = 3
    setInterval(() => {
      this.unactiveFirst = this.play(this.unactiveFirst)
      this.activeCommentary = this.play(this.activeCommentary)
      this.unactiveLast = this.play(this.unactiveLast)
    }, 5000)
  }
}
</script>
