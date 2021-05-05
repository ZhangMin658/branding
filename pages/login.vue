<template>
  <v-container class="container--fluid fill-height">
    <v-row no-gutters align="center" justify="center">
      <v-col cols="12" sm="8" md="4" lg="4">
        <v-card class="elevation-5 pa-3">
          <v-card-title>
            <div class="layout column align-center mb-4">
              <img src="~/assets/img/vuetify-logo.svg" alt="Logo" width="150" />
            </div>
          </v-card-title>
          <v-card-text>
            <v-form>
              <v-text-field
                v-model="model.username"
                append-icon="mdi-account"
                name="username"
                :label="$t('login.username')"
                type="text"
                required
                autocomplete="username"
              />
              <v-text-field
                v-model="model.password"
                append-icon="mdi-lock"
                name="password"
                :label="$t('login.password')"
                type="password"
                required
                autocomplete="current-password"
              />
            </v-form>
          </v-card-text>
          <v-card-actions>
            <app-localization />
            <v-btn icon>
              <v-icon color="gray"> mdi-google-play</v-icon>
            </v-btn>
            <v-btn icon>
              <v-icon color="gray"> mdi-apple</v-icon>
            </v-btn>
            <v-spacer />
            <v-btn
              color="primary"
              :loading="loading"
              name="login-button"
              @click="login"
            >
              {{ $t('login.singIn') }}
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import AppLocalization from '~/components/AppLocalization'

export default {
  name: 'Login',
  components: { AppLocalization },
  layout: 'login',
  data: () => ({
    loading: false,
    model: {
      // TODO this must be null
      username: null,
      // TODO this must be null
      password: null,
    },
  }),
  computed: {
    ...mapGetters(['user']),
  },
  methods: {
    ...mapActions({ doLogin: 'login' }),
    async login() {
      this.loading = true
      // Perform a simple validation that email and password have been typed in
      if (this.model.username !== '' && this.model.password !== '') {
        await this.doLogin({
          username: this.model.username,
          password: this.model.password,
        })
        this.model.password = ''
      }
      this.loading = false
    },
  },
}
</script>
