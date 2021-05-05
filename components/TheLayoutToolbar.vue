<template>
  <v-app-bar app>
    <app-breadcrumbs />
    <v-spacer />
    <app-localization />
    <app-profile />
  </v-app-bar>
</template>

<script>
import { mapGetters } from 'vuex'
import AppProfile from '~/components/AppProfile'
import AppLocalization from '~/components/AppLocalization'
import AppBreadcrumbs from '~/components/AppBreadcrumbs'

export default {
  name: 'TheLayoutToolbar',
  components: {
    AppBreadcrumbs,
    AppLocalization,
    AppProfile,
  },
  data: () => ({}),
  computed: {
    ...mapGetters(['navbarShow']),
    toggleNavbarIcon() {
      return this.navbarShow
        ? 'mdi-format-indent-decrease'
        : 'mdi-format-indent-increase'
    },
  },
  methods: {
    toggleNavbar() {
      this.$store.dispatch('NavbarToggle')
    },
  },
}
</script>
