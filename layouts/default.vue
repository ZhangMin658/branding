<template>
  <v-app>
    <div class="v-application--wrap">
      <the-layout-drawer />
      <the-layout-toolbar />
      <v-main class="custom_grey">
        <the-error-list />
        <nuxt />
      </v-main>
    </div>
  </v-app>
</template>

<script>
import TheErrorList from '@/components/TheErrorList'
import TheLayoutDrawer from '~/components/NavigationDrawer'
import TheLayoutToolbar from '~/components/TheLayoutToolbar'

export default {
  components: { TheErrorList, TheLayoutToolbar, TheLayoutDrawer },
  middleware: 'authenticated',
  data() {
    return {
      clipped: false,
      drawer: false,
      fixed: false,
      items: [
        {
          icon: 'mdi-apps',
          title: 'Welcome',
          to: '/',
        },
        {
          icon: 'mdi-chart-bubble',
          title: 'Inspire',
          to: '/inspire',
        },
        {
          icon: 'mdi-chart-bubble',
          title: 'Users',
          to: '/user',
        },
        {
          icon: 'mdi-chart-bubble',
          title: 'Groups',
          to: '/group',
        },
      ],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: 'Vuetify.js',
    }
  },
  methods: {},
}
</script>
