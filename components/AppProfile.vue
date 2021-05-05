<template>
  <v-menu
    offset-y
    origin="center center"
    :nudge-bottom="10"
    transition="scale-transition"
  >
    <template #activator="{ on }">
      <v-btn icon large text name="profile-button" v-on="on">
        <v-avatar size="36px">
          <img v-if="avatar" :src="avatar" alt="name" />
          <v-icon v-else class="gray--text"> mdi-account </v-icon>
        </v-avatar>
      </v-btn>
    </template>
    <v-list class="pa-0">
      <v-list>
        <v-list-item>
          <v-list-item-avatar>
            <img v-if="avatar" :src="avatar" alt="name" />
            <v-icon v-else class="blue--text"> mdi-account </v-icon>
          </v-list-item-avatar>

          <v-list-item-content>
            <v-list-item-title>{{ user.first_name }}</v-list-item-title>
            <v-list-item-subtitle>{{ user.last_name }}</v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
      </v-list>
      <v-divider />
      <v-list-item
        v-for="(item, index) in menuitems"
        :key="index"
        :name="item.name"
        :to="!item.href ? { name: item.name } : null"
        ripple="ripple"
        :disabled="item.disabled"
        :target="item.target"
        rel="noopener"
        @click="item.click"
      >
        <v-list-item-action v-if="item.icon">
          <v-icon>{{ item.icon }}</v-icon>
        </v-list-item-action>
        <v-list-item-content>
          <v-list-item-title>{{ $t(item.title) }}</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </v-menu>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'AppProfile',
  data() {
    return {
      menuitems: [
        {
          icon: 'mdi-account',
          name: 'profile',
          href: '/profile',
          title: 'toolbar.profile',
          click: (e) => {
            this.$router.push('/profile')
          },
        },
        {
          icon: 'mdi-cog',
          name: 'settings',
          href: '/settings',
          title: 'toolbar.settings',
          click: () => {
            this.$router.push('/settings')
          },
        },
        {
          icon: 'mdi-exit-to-app',
          name: 'logout',
          href: '#',
          title: 'toolbar.logout',
          click: () => {
            this.logout()
          },
        },
      ],
    }
  },
  computed: {
    ...mapGetters(['user', 'name', 'avatar', 'status']),
  },
  methods: {
    ...mapActions({ doLogout: 'logout' }),
    logout() {
      this.doLogout()
    },
    toggleSettingsPanel() {
      this.$vuetify.goTo(0)
      this.$store.dispatch('SettingsPanelToggle')
    },
  },
}
</script>
