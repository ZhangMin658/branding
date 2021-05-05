<template>
  <v-container v-if="isLoading">
    <v-skeleton-loader type="card-avatar, article, actions" />
  </v-container>
  <v-container v-else>
    <v-card>
      <v-card-title> Branding </v-card-title>
      <v-divider class="mx-4" />
      <v-card-text>
        <ValidationObserver ref="obs">
          <v-row>
            <v-col cols="6">
              <v-text-field
                v-model="model.company_name"
                data-testid="company_name"
                filled
                label="Company name"
              />
            </v-col>
            <v-col cols="6">
              <v-text-field
                v-model="model.privacy_url"
                data-testid="privacy_url"
                filled
                label="Privacy Url"
              />
            </v-col>
            <v-col cols="6">
              <v-text-field-with-validation
                id="term_url"
                v-model="model.terms_url"
                rules="required|"
                filled
                label="Term Link"
              />
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="12">
              <v-text-area-with-validation
                id="address"
                v-model="model.company_address"
                rules="required"
                filled
                label="Company Address"
              />
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="6">
              <v-text-field-with-validation
                id="support_email"
                v-model="model.support_email"
                rules="required|email|max:191"
                filled
                label="Support Email"
              />
            </v-col>
            <v-col cols="6">
              <v-text-field
                v-model="model.primary_color"
                label="Primary Colour"
                filled
                data-testid="primary-color"
              >
                <template #append>
                  <v-menu
                    v-model="menu"
                    top
                    nudge-bottom="105"
                    nudge-left="16"
                    :close-on-content-click="false"
                  >
                    <template #activator="{ on }">
                      <div :style="swatchStyle" v-on="on" />
                    </template>
                    <v-card>
                      <v-card-text class="pa-0">
                        <v-color-picker v-model="model.primary_color" flat />
                      </v-card-text>
                    </v-card>
                  </v-menu>
                </template>
              </v-text-field>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="6">
              <v-file-input-with-validation
                v-model="model.logo"
                rules="required"
                show-size
                filled
                label="Logo"
                truncate-length="45"
                placeholder="Pick an image"
                accept="image/jpeg, image/png, image/gif"
                prepend-icon=""
                prepend-inner-icon="mdi-camera"
                data-testid="file-input"
                @change="createPreviewImage"
              />
            </v-col>
            <v-col cols="6">
              <v-img :src="previewUrl" @error="errorAlert('Image not found')"
                >Preview</v-img
              >
              <v-alert v-if="errors" ref="errorAlertLogo" type="error">
                {{ errorMessage }} <br />
                {{ previewUrl }}
              </v-alert>
            </v-col>
          </v-row>
          <v-row>
            <v-spacer />
            <v-col cols="1">
              <v-btn
                id="save-button"
                :loading="isSaving"
                color="primary"
                @click="save"
                >Save</v-btn
              >
            </v-col>
          </v-row>
        </ValidationObserver>
      </v-card-text>
    </v-card>
  </v-container>
</template>
<script>
import { ValidationObserver } from 'vee-validate'
import VTextFieldWithValidation from '~/components/inputs/VTextFieldWithValidation'
export default {
  name: 'Branding',
  meta: {
    title: 'Branding',
  },
  components: {
    VTextFieldWithValidation,
    ValidationObserver,
  },
  data() {
    return {
      model: {
        company_name: null,
        company_address: null,
        terms_url: null,
        support_email: null,
        logo: null,
        privacy_url: null,
        primary_color: '#BA68C8',
      },
      previewUrl: null,
      isSaving: false,
      isLoading: false,
      menu: false,
      errors: false,
      errorMessage: null,
    }
  },
  computed: {
    swatchStyle() {
      return {
        backgroundColor: this.model.primary_color,
        cursor: 'pointer',
        height: '30px',
        width: '30px',
        borderRadius: this.menu ? '50%' : '4px',
        transition: 'border-radius 200ms ease-in-out',
      }
    },
  },
  async mounted() {
    this.isLoading = true
    this.model = await this.$axios.$get(process.env.ADMIN_BRANDING_GET)
    debugger
    if (this.model.logo) {
      this.previewUrl = this.model.logo
    }
    this.isLoading = false
  },
  methods: {
    save() {
      this.$refs.obs.validate().then(async (success) => {
        if (!success) {
          return
        }
        this.isSaving = true
        await this.updateBranding()
        this.isSaving = false
      })
    },
    createPreviewImage(e) {
      this.previewUrl = URL.createObjectURL(e)
    },
    async updateBranding() {
      const url = process.env.ADMIN_BRANDING_UPDATE
      const formData = new FormData()
      formData.append('logo', this.model.logo)
      formData.append('company_name', this.model.company_name)
      formData.append('company_address', this.model.company_address)
      formData.append('terms_url', this.model.terms_url)
      formData.append('privacy_url', this.model.privacy_url)
      formData.append('support_email', this.model.support_email)
      formData.append('primary_color', this.model.primary_color)
      return await this.$axios.post(url, formData)
    },
    errorAlert(msg) {
      this.errors = true
      this.errorMessage = msg
    },
  },
}
</script>
