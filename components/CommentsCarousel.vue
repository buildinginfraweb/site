<template>
  <v-container pb-0>
    <v-layout mb-2>
      <v-flex class="grey--text text--darken-3  text-xs-center display-1">
        O que dizem sobre<br>
        nós da <span class="primary--text font-weight-bold" @click="first1()">Building Infra</span>
      </v-flex>
    </v-layout>
    <v-layout row wrap>
      <v-flex xs12 sm4 md4 style="opacity: 0.6" class="hidden-sm-and-down">
        <v-carousel  height="360" :value="first" hide-controls hide-delimiters class="elevation-0" :cycle="false">
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
        <v-carousel  height="360" :value="second" hide-controls hide-delimiters class="elevation-0" :cycle="false">
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
      <v-flex xs12 sm4 md4 class="hidden-sm-and-down" style="opacity: 0.6">
        <v-carousel  height="360" :value="third" hide-controls hide-delimiters class="elevation-0" :cycle="false">
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
                <v-flex xs12 mt-3 class="text-xs-center">
                  {{ client.comment }}
                </v-flex>
                <v-flex xs12 mt-3 class="text-xs-center">
                  <v-icon color="primary">alternate_email</v-icon>
                </v-flex>
                <v-flex xs12 mt-2 class="grey--text text-xs-center text--darken-3 font-weight-bold">
                  <a :href="client.link" target="_blank" style="text-decoration:none">{{ client.name }}</a>
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
      activeCommentary: 2,
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
      if (value + 1 === this.comments.length) {
        return 0
      } else if (value + 1 > this.comments.length) {
        return value - this.comments.length + 1
      } else {
        return value + 1
      }
    }
  },
  computed: {
    first () {
      return this.play(this.activeCommentary) + 1
    },
    second () {
      return this.play(this.activeCommentary + 1) + 1
    },
    third () {
      return this.play(this.activeCommentary + 2) + 1
    }
  },
  mounted () {
    setInterval(() => {
      this.activeCommentary = this.play(this.activeCommentary)
    }, 5000)
    setTimeout(() => {
      this.activeCommentary = this.play(this.activeCommentary)
    }, 100)
  }
}
</script>
