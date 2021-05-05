<template>
  <v-menu
    offset-y
    origin="center center"
    :nudge-bottom="10"
    transition="scale-transition"
  >
    <template #activator="{ on }">
      <v-btn text v-on="on">
        <v-icon color="gray"> mdi-translate </v-icon>
        Language
      </v-btn>
    </template>
    <v-list class="pa-0">
      <v-list-item
        v-for="(item, index) in $i18n.locales"
        :key="index"
        ripple="ripple"
        :target="item.target"
        rel="noopener"
        @click="setLocale(item.code)"
      >
        <v-list-item-content>
          <v-list-item-title>{{ item.name }}</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </v-menu>
</template>

<script>
export default {
  name: 'AppLocalization',
  data: () => ({}),
  methods: {
    setLocale(locale) {
      this.$i18n.locale = locale
      console.log(this.$i18n.locale)
    },
  },
}
</script>
