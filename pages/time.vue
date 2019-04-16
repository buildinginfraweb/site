<template>
  <v-container>
    <v-layout mb-5>
      <v-flex sm5 class="hidden-xs-only" mr-3 style="background-image: url(/img-pessoas.png);background-size: cover;background-position: center;">
      </v-flex>
      <v-flex xs12 sm7 pl-3 
         data-aos="fade-left"
        data-aos-duration="500">
        <h3 class="display-1 mb-3">
          Somos uma empresa<br><span class="primary--text font-weight-bold">totalmente diferente</span>
        </h3>
        <p class="grey--text text--darken-1">
          Nós nos esforcamos para ser um perceiro que você pode confiar, independente do problema nos colocamos a disposição para ajudar a melhorar cada vez mais a funcionalidade da sua empresa.
        </p>
        <p  class="grey--text text--darken-1">
          Nos orgulhamos de não ser apenas o cada dos computadores e sim mais um membro da equipe, confiável e experiente que reflete sua paixão pelo seu negócioNos orgulhamos de não ser apenas o cada dos computadores e sim mais um membro da equipe, confiável e experiente que reflete sua paixão pelo seu negócio.
        </p>
      </v-flex>
    </v-layout>
    <v-layout>
      <v-flex xs12>
        <v-container pa-0 fluid grid-list-md>
          <v-layout row wrap>
            <v-flex xs12 sm6 md4 v-for="(person, index) in team" :key="index" data-aos="fade">
              <v-hover>
                <v-card
                  slot-scope="{ hover }"
                  :class="`elevation-${hover && person.link !== '' ? 8 : 4}`"
                  :href="person.link" style="border-radius: 8px;">
                  <v-card-title class="text-xs-center">
                    <v-spacer></v-spacer>
                    <v-avatar size="150">
                      <v-img
                        :src="person.image"
                      ></v-img>
                    </v-avatar>
                    <v-spacer></v-spacer>
                  </v-card-title>
                  <v-card-text class="text-xs-center">
                    <h4 class="headline  font-weight-bold">
                      {{ person.name }}
                    </h4>
                    <p class="subheading">
                      {{ person.job }}
                    </p>
                  </v-card-text>
                </v-card>
              </v-hover>
            </v-flex>
          </v-layout>
        </v-container>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  data () {
    return {
      team: [
        {
          name: 'Fernando Silva',
          image: 'https://avataaars.io/?avatarStyle=Circle&topType=ShortHairDreads01&accessoriesType=Blank&hairColor=BrownDark&facialHairType=BeardLight&facialHairColor=BrownDark&clotheType=BlazerSweater&eyeType=Default&eyebrowType=DefaultNatural&mouthType=Smile&skinColor=DarkBrown',
          job: 'CEO',
          link: ''
        },
        {
          name: 'Claudia JM',
          image: 'https://avataaars.io/?avatarStyle=Circle&topType=LongHairCurly&accessoriesType=Sunglasses&hairColor=Black&facialHairType=Blank&clotheType=ShirtVNeck&clotheColor=Blue02&eyeType=Default&eyebrowType=RaisedExcited&mouthType=Smile&skinColor=DarkBrown',
          job: 'Sales',
          link: ''
        },
        {
          name: 'Renato Vicente',
          image: 'https://avataaars.io/?avatarStyle=Circle&topType=ShortHairShortFlat&accessoriesType=Blank&hairColor=Black&facialHairType=BeardLight&facialHairColor=Black&clotheType=ShirtVNeck&clotheColor=Black&eyeType=Default&eyebrowType=Default&mouthType=Smile&skinColor=Pale',
          job: 'Front end',
          link: 'https://renato66.github.io'
        }
      ]
    }
  }

}
</script>

<style>

</style>
