<template>
  <v-dialog
      v-model="dialog"
      width="500"
    >
      <template v-slot:activator="{ on }">
         <v-btn class="support-btn" v-on="on">
            Preencha o formulário
          </v-btn>
      </template>
    <v-container py-0 px-5 fluid class="contact-dialog">
      <v-layout row wrap>
        <v-flex xs12 class="white--text text--darken-3 py-4 mt-2 title">
          Entre em contato conosco <strong>agora</strong> e agende uma visita comercial:
        </v-flex>
        <v-flex xs12 class="py-4" style="border-top:1px solid #EEEEEE">
          <v-layout row wrap>
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
                  <v-flex xs12 class="text-xs-center">
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
  </v-dialog>
</template>

<script>
export default {
  data() {
    return {
      dialog: false,
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
        this.snackbar = true
        this.color = 'error'
        this.text = 'Campos não preenchidos'
      } else {
        this.loading = true
        const response = await window.fetch('/php/sendmail.php', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(
          {
            'assunto': this.subject, 
            'nome': this.name,
            'email': this.email,
            'mensagem':  this.message,
            'telefone': this.phone
          })
        })
        // https://codepen.io/anon/pen/PgwrQQ
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
.contact-dialog  {
  background:#312f3c; border-radius:8px
}
.contact-dialog .round-input.v-input .v-input__slot {
  border-radius: 30px!important;
  border-top:1px solid #EEEEEE;
  padding: 0px 20px!important;
}
</style>
