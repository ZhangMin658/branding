<template>
  <v-navigation-drawer fixed app :value="true" width="250">
    <v-app-bar v-if="true">
      <v-toolbar-title>
        <img
          :src="logo"
          width="150px"
          alt="Logo"
          @error="brandingLogoDefault"
        />
      </v-toolbar-title>
    </v-app-bar>
    <the-layout-drawer-list :dense="false" :routes="constantRoutes" icon-show />
  </v-navigation-drawer>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import TheLayoutDrawerList from './TheLayoutDrawerList.vue'

export default {
  name: 'NavigationDrawer',
  components: {
    TheLayoutDrawerList,
  },
  data: () => ({
    logoDefault: require(`~/assets/img/vuetify-logo.svg`),
    logo: require(`~/assets/img/vuetify-logo.svg`),
    constantRoutes: [
      {
        path: '/',
        children: [
          {
            path: '/dashboard',
            alias: '/',
            name: 'Dashboard',
            meta: {
              title: 'Dashboard',
              icon: 'mdi-view-dashboard',
              noCache: true,
              affix: true,
            },
          },
        ],
      },
      {
        path: '/branding',
        name: 'Branding',
        meta: { title: 'Branding', icon: 'mdi-tune-vertical' },
      },
    ],
  }),
  computed: {
    ...mapGetters([]),
  },
  mounted() {
    const branding = {} // await this.$axios.$get(process.env.ADMIN_BRANDING_GET)

    console.log(branding)

    if (branding.logo) {
      this.logo = branding.logo
    }
  },
  methods: {
    ...mapActions(['changeNavbarState']),
    brandingLogoDefault(event) {
      event.target.src = this.logoDefault
    },
  },
}
</script>
