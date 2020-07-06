<template>
  <v-container>
    <v-layout mb-5>
      <v-flex xs12 pl-3 
         data-aos="fade-left"
        data-aos-duration="500">
        <h3 class="display-3 mb-3 white--text font-weight-bold">
          Somos uma empresa<br><span class="white primary--text px-2 font-weight-bold">Totalmente diferente</span>
        </h3>
        <p class="white--text subheading text--darken-1">
          Nós nos esforçamos para ser um parceiro que você possa confiar, independente do problema, colocamos a disposição um time técnico para ajudar.
        </p>
        <p class="white--text subheading text--darken-1">
          Nos orgulhamos de não ser apenas “o carinha dos computadores” e sim, membro de sua equipe, confiável e experiente que busca refletir as metas da empresa a qual prestamos serviços.
        </p>
      </v-flex>
    </v-layout>
    <v-layout>
      <v-flex xs12>
        <v-container pa-0 fluid grid-list-md>
          <v-layout row wrap>
            <v-flex xs12 sm6 md4 v-for="(person, index) in team" :key="index" data-aos="fade">
                <v-card
                  class="transparent elevation-0"
                  style="border-radius: 8px;">
                  <v-card-title class="text-xs-center">
                    <v-spacer></v-spacer>
                    <v-avatar size="150">
                      <v-img
                        style="box-shadow: inset 0px 13px 17px 0px #d8d8d8;"
                        :src="person.image"
                      ></v-img>
                    </v-avatar>
                    <v-spacer></v-spacer>
                  </v-card-title>
                  <v-card-text class="text-xs-center">
                    <h4 class="headline white--text font-weight-bold">
                      {{ person.name }}
                    </h4>
                    <p class="subheading white--text">
                      {{ person.job }}
                    </p>
                  </v-card-text>
                </v-card>
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
