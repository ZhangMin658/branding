<template>
  <v-app>
    <the-error-list />
    <Nuxt />
  </v-app>
</template>
<script>
import { mapGetters } from 'vuex'
export default {
  name: 'LoginLayout',
  computed: {
    ...mapGetters(['user']),
  },
  created() {
    if (this.user) {
      return this.$router.push(`/dashboard`)
    }
  },
}
</script>
