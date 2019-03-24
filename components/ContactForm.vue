<template>
  <v-container fluid pa-0>
    <v-layout row wrap>
      <v-flex md6 style="background-image: url('/contato-rodape.jpg');background-size: cover;background-position: center;" />
      <v-flex xs12 md6 class="grey lighten-4 py-4 px-5" style="border-top:1px solid #EEEEEE">
        <v-layout row wrap>
          <v-flex xs12 class="grey--text text--darken-3  mt-2 title font-weight-bold">
            Quando você se tornar um cliente B.I. pode ficar tranquilo,
            temos <span class="primary--text">técnicos capacitados</span>
            com grande conhecimento para melhor atenteder sua empresa.
          </v-flex>
          <v-flex xs12 class="grey--text text--darken-1 mt-2">
            Entre em contato conosco ahora para conhecer
            nossos planos personalizados para atender as
            suas nescessidades e garantir a tranquilidade
            de sua empresa.
          </v-flex>
          <v-flex xs12>
            <v-container grid-list-xl fluid pa-0 mt-3>
              <v-layout row wrap>
                <v-flex xs12 md6>
                  <v-text-field
                    v-model="name"
                    hide-details
                    class="round-input"
                    solo
                    flat
                    placeholder="Nome"
                  />
                </v-flex>
                <v-flex xs12 md6>
                  <v-text-field
                    v-model="email"
                    hide-details
                    class="round-input"
                    solo
                    flat
                    placeholder="Email"
                  />
                </v-flex>
                <v-flex xs12 md6>
                  <v-text-field
                    v-model="phone"
                    hide-details
                    class="round-input"
                    solo
                    flat
                    :mask="phone.length === 11 ? '(##) #####-####' : '(##) ####-#####'"
                    placeholder="Telefone"
                  />
                </v-flex>
                <v-flex xs12 md6>
                  <v-text-field
                    v-model="subject"
                    hide-details
                    class="round-input"
                    solo
                    flat
                    placeholder="Assunto"
                  />
                </v-flex>
                <v-flex xs12 md12>
                  <v-textarea
                    v-model="message"
                    hide-details
                    class="round-input"
                    solo
                    flat
                    placeholder="Mensagem"
                  />
                </v-flex>
                <v-flex xs12>
                  <v-btn color="primary" round @click="send()" :loading="loading">
                    Enviar
                  </v-btn>
                </v-flex>
              </v-layout>
            </v-container>
          </v-flex>
        </v-layout>
      </v-flex>
    </v-layout>
     <v-snackbar
      v-model="snackbar"
      :color="color"
      top
      right
    >
      {{ text }}
    </v-snackbar>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: '',
      loading: false,
      snackbar: false,
      color: '',
      text: ''
    }
  },
  methods: {
    async send() {
      if (this.name === '' || (this.email === '' || this.phone === '') || this.subject === '' || this.message === '') {
        console.log('oi')
        this.snackbar = true
        this.color = 'error'
        this.text = 'Campos não preenchidos'
      } else {
        this.loading = true
        await new Promise(resolve => setTimeout(resolve, 1000))
        this.snackbar = true
        this.color = 'primary'
        this.text = 'Mensagem enviada!'
        this.name = ''
        this.email = ''
        this.phone = ''
        this.subject = ''
        this.message = ''
        this.loading = false
      }
    }
  }
}
</script>

<style>
.round-input.v-input .v-input__slot {
  border-radius: 30px!important;
  padding: 0px 20px!important;
}
</style>
