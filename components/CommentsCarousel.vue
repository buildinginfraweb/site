<template>
  <v-container pb-0 fluid>
    <v-layout mb-2>
      <v-flex
        class="white--text text--darken-3 text-xs-center display-1 hidden-sm-and-up"
      >
        O que dizem sobre<br />
        nós da
        <span class="no-wrap white primary--text px-3 font-weight-bold"
          >Building Infra</span
        >
      </v-flex>
    </v-layout>
    <v-layout row wrap>
      <v-flex xs12 sm4 md4 style="opacity: 0.6" class="hidden-sm-and-down">
        <v-carousel
          dark
          height="370"
          :value="first"
          hide-controls
          hide-delimiters
          class="elevation-0"
          :cycle="false"
        >
          <v-carousel-item v-for="(client, index) in comments" :key="index">
            <v-container>
              <v-layout class="px-4 white">
                <v-spacer></v-spacer>
                <v-flex shrink>
                  <a
                    :href="client.link"
                    class="white px-3 primary--text"
                    target="_blank"
                    style="text-decoration:none"
                  >
                    <v-img
                      contain
                      height="150"
                      width="200"
                      :src="client.logo"
                      alt="Logo"
                    ></v-img>
                  </a>
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
                <v-flex
                  xs12
                  mt-2
                  class="white--text text-xs-center text--darken-3 font-weight-bold"
                >
                  <a
                    :href="client.link"
                    class="white px-3 py-1 primary--text"
                    target="_blank"
                    style="text-decoration:none"
                    >{{ client.company }}</a
                  >
                </v-flex>
                <v-flex xs12 class="white--text text--ligthen-3 text-xs-center">
                  {{ client.name }}
                </v-flex>
              </v-layout>
            </v-container>
          </v-carousel-item>
        </v-carousel>
      </v-flex>
      <v-flex xs12 md4>
        <v-carousel
          dark
          height="370"
          :value="second"
          hide-controls
          hide-delimiters
          class="elevation-0"
          :cycle="false"
        >
          <v-carousel-item v-for="(client, index) in comments" :key="index">
            <v-container>
              <v-layout class="px-4 white elevation-3">
                <v-spacer></v-spacer>
                <v-flex shrink>
                  <a
                    :href="client.link"
                    class="white px-3 primary--text"
                    target="_blank"
                    style="text-decoration:none"
                  >
                    <v-img
                      contain
                      height="150"
                      width="200"
                      :src="client.logo"
                      alt="Logo"
                    ></v-img>
                  </a>
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
                <v-flex
                  xs12
                  mt-2
                  class="white--text text-xs-center text--darken-3 font-weight-bold"
                >
                  <a
                    :href="client.link"
                    class="white px-3 py-1 primary--text"
                    target="_blank"
                    style="text-decoration:none"
                    >{{ client.company }}</a
                  >
                </v-flex>
                <v-flex xs12 class="white--text text--ligthen-3 text-xs-center">
                  {{ client.name }}
                </v-flex>
              </v-layout>
            </v-container>
          </v-carousel-item>
        </v-carousel>
      </v-flex>
      <v-flex xs12 sm4 md4 class="hidden-sm-and-down" style="opacity: 0.6">
        <v-carousel
          dark
          height="370"
          :value="third"
          hide-controls
          hide-delimiters
          class="elevation-0"
          :cycle="false"
        >
          <v-carousel-item v-for="(client, index) in comments" :key="index">
            <v-container>
              <v-layout class="px-4 white">
                <v-spacer></v-spacer>
                <v-flex shrink>
                  <a
                    :href="client.link"
                    class="white px-3 primary--text"
                    target="_blank"
                    style="text-decoration:none"
                  >
                    <v-img
                      contain
                      height="150"
                      width="200"
                      :src="client.logo"
                      alt="Logo"
                    ></v-img>
                  </a>
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
                <v-flex
                  xs12
                  mt-2
                  class="white--text text-xs-center text--darken-3 font-weight-bold"
                >
                  <a
                    :href="client.link"
                    class="white px-3 py-1 primary--text"
                    target="_blank"
                    style="text-decoration:none"
                    >{{ client.company }}</a
                  >
                </v-flex>
                <v-flex xs12 class="white--text text--ligthen-3 text-xs-center">
                  {{ client.name }}
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
  props: {
    comments: {
      type: Array,
    }
  },
  data() {
    return {
      unactiveFirst: 1,
      activeCommentary: 2,
      unactiveLast: 0
    }
  },
  methods: {
    play(value) {
      if (value === this.comments.length) {
        return 1
      }
      return value + 1
    }
  },
  computed: {
    first() {
      return this.unactiveFirst
    },
    second() {
      return this.activeCommentary
    },
    third() {
      return this.unactiveLast
    }
  },
  async mounted() {
    this.unactiveLast = 3
    setInterval(() => {
      this.unactiveFirst = this.play(this.unactiveFirst)
      this.activeCommentary = this.play(this.activeCommentary)
      this.unactiveLast = this.play(this.unactiveLast)
    }, 5000)
  }
}
</script>
