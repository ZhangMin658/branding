<template>
  <div v-if="alert">
    <v-snackbar v-model="isVisible" top right multi-line :color="color">
      <div v-html="message" />
      <template #action="{ attrs }">
        <v-btn text v-bind="attrs" @click="closeAlert"> Close</v-btn>
      </template>
    </v-snackbar>
  </div>
</template>
<script>
import { mapGetters, mapMutations } from 'vuex'

export default {
  name: 'TheErrorList',
  data: () => ({ isVisible: false }),
  computed: {
    ...mapGetters(['alert']),
    color() {
      return (this.alert && this.alert.type) || 'danger'
    },
    message() {
      return this.alert && this.alert.message
    },
  },
  watch: {
    alert() {
      this.isVisible = true
      setTimeout(() => {
        this.isVisible = false
        this.setAlert(null)
      }, 10000)
    },
  },
  methods: {
    ...mapMutations(['setAlert']),
    closeAlert() {
      this.isVisible = false
      this.setAlert(null)
    },
  },
}
</script>
